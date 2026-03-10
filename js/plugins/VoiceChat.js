/*:
 * @target MZ MV
 * @plugindesc (v.2.1) Proximity Voice Chat — WebRTC P2P audio with distance-based volume
 * @author WeJoyStation
 *
 * @param maxHearDistance
 * @text Max Hear Distance (tiles)
 * @type number
 * @min 1
 * @default 10
 * @desc Players beyond this many tiles cannot hear each other.
 *
 * @param muteKey
 * @text Mute Toggle Key
 * @type string
 * @default m
 * @desc Keyboard key to toggle microphone mute (lowercase letter).
 *
 * @help
 * Proximity Voice Chat v2.1
 * Requires Alpha NET Z + vchat_signal / vchat_end relay on server.
 * Open browser DevTools console to see [VoiceChat] logs.
 * Type vchatDebug() in console to see current state.
 */

(function () {
    'use strict';

    // =========================================================================
    // Configuration
    // =========================================================================
    const PLUGIN_NAME = 'VoiceChat';

    function getParam(name, defaultValue) {
        const params = PluginManager.parameters(PLUGIN_NAME);
        return (params && params[name] !== undefined && params[name] !== '')
            ? params[name] : defaultValue;
    }

    const MAX_DISTANCE = parseInt(getParam('maxHearDistance', '10'), 10);
    const MUTE_KEY     = getParam('muteKey', 'm').toLowerCase();

    // =========================================================================
    // Logging helpers
    // =========================================================================
    const LOG_STYLE = 'color:#00cfff;font-weight:bold';
    const ERR_STYLE = 'color:#ff6060;font-weight:bold';
    const OK_STYLE  = 'color:#60ff90;font-weight:bold';

    function log(msg)  { console.log('%c[VoiceChat]%c ' + msg, LOG_STYLE, ''); }
    function logOk(msg){ console.log('%c[VoiceChat ✅]%c ' + msg, OK_STYLE,  ''); }
    function logErr(msg, err) {
        console.error('%c[VoiceChat ❌]%c ' + msg, ERR_STYLE, '', err || '');
    }

    // =========================================================================
    // ICE / STUN servers
    // =========================================================================
    const RTC_CONFIG = {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
        ]
    };

    // =========================================================================
    // State
    // =========================================================================
    const PVC = {
        localStream:  null,
        socket:       null,
        peers:        {},   // peerId -> { pc, audioEl }
        muted:        false,
        initialized:  false,
        hudEl:        null,
        _socketReady: false,
    };

    // =========================================================================
    // Intercept NetworkClientHandler to capture the socket
    // =========================================================================
    const _hookNetworkClient = function () {
        if (typeof NetworkClientHandler === 'undefined') {
            log('NetworkClientHandler not found yet — will retry...');
            return false;
        }
        log('Hooking NetworkClientHandler.start to capture socket...');
        const _orig = NetworkClientHandler.prototype.start;
        NetworkClientHandler.prototype.start = function () {
            _orig.call(this);
            if (!PVC.socket && this.socket) {
                PVC.socket = this.socket;
                PVC._socketReady = true;
                logOk('Socket captured from NetworkClientHandler! ID: ' + this.socket.id);
                PVC._attachSocketListeners();
            } else if (!this.socket) {
                logErr('NetworkClientHandler.start called but this.socket is null/undefined');
            } else {
                log('NetworkClientHandler.start called — socket already captured');
            }
        };
        logOk('NetworkClientHandler hooked successfully');
        return true;
    };

    // =========================================================================
    // Try to grab socket from io.managers (fallback for already-connected state)
    // =========================================================================
    const _tryGrabExistingSocket = function () {
        if (PVC.socket) return; // already have it

        log('Trying to grab socket from io.managers...');
        try {
            if (typeof io !== 'undefined' && io.managers) {
                const urls = Object.keys(io.managers);
                log('io.managers URLs found: ' + (urls.length ? urls.join(', ') : '(none)'));
                for (const url of urls) {
                    const mgr = io.managers[url];
                    if (mgr && mgr.nsps && mgr.nsps['/']) {
                        const sock = mgr.nsps['/'];
                        if (sock && sock.connected) {
                            PVC.socket = sock;
                            PVC._socketReady = true;
                            logOk('Socket grabbed from io.managers[' + url + '] ID: ' + sock.id);
                            PVC._attachSocketListeners();
                            return;
                        } else {
                            log('Socket at ' + url + ' exists but not connected yet (connected=' + (sock && sock.connected) + ')');
                        }
                    }
                }
                log('No connected socket found in io.managers');
            } else {
                log('io or io.managers is undefined — Socket.IO may not be loaded yet');
            }
        } catch (e) {
            logErr('Error while grabbing socket from io.managers', e);
        }
    };

    // =========================================================================
    // Attach Socket.IO signaling listeners
    // =========================================================================
    PVC._attachSocketListeners = function () {
        if (!PVC.socket) {
            logErr('Cannot attach listeners — socket is null');
            return;
        }
        log('Attaching vchat_signal and vchat_end listeners...');

        PVC.socket.on('vchat_signal', async (data) => {
            log('Received vchat_signal: type=' + (data && data.type) + ' from=' + (data && data.from) + ' to=' + (data && data.to));
            if (!data || data.to !== ANNetwork.myId()) {
                log('Ignoring signal — not for us (our id=' + ANNetwork.myId() + ')');
                return;
            }
            const peerId = data.from;
            if (data.type === 'offer') {
                log('Handling OFFER from ' + peerId);
                await PVC._handleOffer(peerId, data.sdp);
            } else if (data.type === 'answer') {
                log('Handling ANSWER from ' + peerId);
                await PVC._handleAnswer(peerId, data.sdp);
            } else if (data.type === 'ice') {
                log('Handling ICE candidate from ' + peerId);
                await PVC._handleIce(peerId, data.candidate);
            }
        });

        PVC.socket.on('vchat_end', (data) => {
            log('Received vchat_end from ' + (data && data.from));
            if (!data || data.to !== ANNetwork.myId()) return;
            PVC._closePeer(data.from);
        });

        PVC.socket.on('disconnect', () => {
            log('Socket disconnected — destroying voice chat');
            PVC.destroy();
        });

        logOk('Signaling listeners attached successfully');
    };

    // =========================================================================
    // Init — request mic and start
    // =========================================================================
    PVC.init = async function () {
        log('init() called');

        if (PVC.initialized) {
            log('Already initialized — skipping');
            return;
        }

        // Check ANNetwork
        if (typeof ANNetwork === 'undefined') {
            logErr('ANNetwork is undefined — Alpha_NETZ plugin may not be loaded');
            return;
        }
        log('ANNetwork.isConnected() = ' + ANNetwork.isConnected());
        log('ANNetwork.myId() = ' + ANNetwork.myId());
        log('ANNetwork.room = ' + JSON.stringify(ANNetwork.room ? { name: ANNetwork.room.name, players: ANNetwork.room.players ? ANNetwork.room.players.length : 0 } : null));

        // Check socket
        if (!PVC.socket) {
            log('Socket not captured yet — trying fallback grab...');
            _tryGrabExistingSocket();
        }
        log('PVC.socket = ' + (PVC.socket ? 'EXISTS (id=' + PVC.socket.id + ')' : 'NULL'));

        // Request microphone
        log('Requesting microphone access (getUserMedia)...');
        try {
            PVC.localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            PVC.muted = false;
            PVC.initialized = true;
            logOk('Microphone access GRANTED — voice chat active!');
            PVC._createHUD();
        } catch (err) {
            logErr('Microphone access DENIED or error: ' + err.name + ' — ' + err.message, err);
            return;
        }

        // Re-attach listeners if socket was grabbed in fallback above
        if (PVC.socket && !PVC._listenersAttached) {
            PVC._attachSocketListeners();
            PVC._listenersAttached = true;
        }
    };

    // =========================================================================
    // Create RTCPeerConnection for a player
    // =========================================================================
    PVC._createPeer = function (peerId, isInitiator) {
        if (PVC.peers[peerId]) {
            log('Peer ' + peerId + ' already exists — skipping create');
            return PVC.peers[peerId].pc;
        }

        log('Creating RTCPeerConnection with ' + peerId + ' (initiator=' + isInitiator + ')');
        const pc = new RTCPeerConnection(RTC_CONFIG);
        const audioEl = document.createElement('audio');
        audioEl.autoplay = true;
        audioEl.volume = 0;
        document.body.appendChild(audioEl);

        PVC.peers[peerId] = { pc, audioEl };

        if (PVC.localStream) {
            PVC.localStream.getTracks().forEach(track => {
                pc.addTrack(track, PVC.localStream);
                log('Added local track [' + track.kind + '] to peer ' + peerId);
            });
        } else {
            logErr('localStream is null when creating peer ' + peerId);
        }

        pc.ontrack = (event) => {
            logOk('Receiving audio track from ' + peerId);
            audioEl.srcObject = event.streams[0];
        };

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                log('Sending ICE candidate to ' + peerId);
                PVC._signal(peerId, { type: 'ice', candidate: event.candidate });
            } else {
                log('ICE gathering complete for ' + peerId);
            }
        };

        pc.oniceconnectionstatechange = () => {
            log('ICE state with ' + peerId + ': ' + pc.iceConnectionState);
        };

        pc.onconnectionstatechange = () => {
            log('Connection state with ' + peerId + ': ' + pc.connectionState);
            if (pc.connectionState === 'connected') {
                logOk('✅ P2P audio connected with ' + peerId + '!');
            }
            if (pc.connectionState === 'failed' || pc.connectionState === 'closed') {
                logErr('Peer ' + peerId + ' connection ' + pc.connectionState);
                PVC._closePeer(peerId);
            }
        };

        if (isInitiator) {
            pc.onnegotiationneeded = async () => {
                log('Negotiation needed for ' + peerId + ' — creating offer...');
                try {
                    const offer = await pc.createOffer();
                    await pc.setLocalDescription(offer);
                    log('Offer created — sending to ' + peerId);
                    PVC._signal(peerId, { type: 'offer', sdp: pc.localDescription });
                } catch (e) {
                    logErr('Offer creation failed', e);
                }
            };
        }

        return pc;
    };

    // =========================================================================
    // Handle offer → send answer
    // =========================================================================
    PVC._handleOffer = async function (peerId, sdp) {
        const pc = PVC._createPeer(peerId, false);
        try {
            await pc.setRemoteDescription(new RTCSessionDescription(sdp));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            log('Answer created — sending to ' + peerId);
            PVC._signal(peerId, { type: 'answer', sdp: pc.localDescription });
        } catch (e) {
            logErr('Failed to handle offer from ' + peerId, e);
        }
    };

    // =========================================================================
    // Handle answer
    // =========================================================================
    PVC._handleAnswer = async function (peerId, sdp) {
        const peer = PVC.peers[peerId];
        if (!peer) { logErr('No peer found for answer from ' + peerId); return; }
        try {
            await peer.pc.setRemoteDescription(new RTCSessionDescription(sdp));
            logOk('Answer applied from ' + peerId);
        } catch (e) {
            logErr('setRemoteDescription (answer) failed', e);
        }
    };

    // =========================================================================
    // Handle ICE candidate
    // =========================================================================
    PVC._handleIce = async function (peerId, candidate) {
        const peer = PVC.peers[peerId];
        if (!peer) { logErr('No peer found for ICE from ' + peerId); return; }
        try {
            await peer.pc.addIceCandidate(new RTCIceCandidate(candidate));
            log('ICE candidate added from ' + peerId);
        } catch (e) {
            logErr('addIceCandidate failed', e);
        }
    };

    // =========================================================================
    // Send a signal to another player
    // =========================================================================
    PVC._signal = function (targetId, payload) {
        if (!PVC.socket) { logErr('Cannot signal — no socket!'); return; }
        const pkg = { to: targetId, from: ANNetwork.myId(), ...payload };
        log('Emitting vchat_signal type=' + payload.type + ' to=' + targetId);
        PVC.socket.emit('vchat_signal', pkg);
    };

    // =========================================================================
    // Close a peer
    // =========================================================================
    PVC._closePeer = function (peerId) {
        const peer = PVC.peers[peerId];
        if (!peer) return;
        log('Closing peer connection with ' + peerId);
        peer.pc.close();
        if (peer.audioEl && peer.audioEl.parentNode) {
            peer.audioEl.parentNode.removeChild(peer.audioEl);
        }
        delete PVC.peers[peerId];
    };

    // =========================================================================
    // Connect to a new player
    // =========================================================================
    PVC.connectToPlayer = function (peerId) {
        log('connectToPlayer(' + peerId + ') — initialized=' + PVC.initialized);
        if (!PVC.initialized) { log('Not init yet — cannot connect'); return; }
        if (PVC.peers[peerId]) { log('Already have peer for ' + peerId); return; }
        if (peerId === ANNetwork.myId()) { log('Skipping self'); return; }
        PVC._createPeer(peerId, true);
    };

    // =========================================================================
    // Update volumes every frame
    // =========================================================================
    PVC.updateVolumes = function () {
        if (!PVC.initialized || !$gamePlayer || !$gameMap) return;
        const myX = $gamePlayer.x;
        const myY = $gamePlayer.y;

        if (!ANNetwork || !ANNetwork.room || !ANNetwork.room.players) return;

        for (const player of ANNetwork.room.players) {
            const peerId = player.id;
            if (peerId === ANNetwork.myId()) continue;
            const peer = PVC.peers[peerId];
            if (!peer || !peer.audioEl) continue;

            let peerX = null, peerY = null;

            // Try ANMapManager
            if (typeof ANMapManager !== 'undefined' && ANMapManager.networkCharacters) {
                const chars = ANMapManager.networkCharacters();
                if (chars) {
                    const ch = chars.find(c => c._netId === peerId || c.netId === peerId);
                    if (ch) { peerX = ch.x; peerY = ch.y; }
                }
            }

            // Fallback: scan events
            if (peerX === null && $gameMap._events) {
                for (const ev of $gameMap._events) {
                    if (ev && (ev._netId === peerId || ev.netId === peerId)) {
                        peerX = ev.x; peerY = ev.y; break;
                    }
                }
            }

            if (peerX !== null) {
                const dist = Math.abs(myX - peerX) + Math.abs(myY - peerY);
                const vol  = Math.max(0, 1 - dist / MAX_DISTANCE);
                peer.audioEl.volume = vol;
            }
        }
    };

    // =========================================================================
    // Mute / Unmute
    // =========================================================================
    PVC.toggleMute = function () {
        if (!PVC.localStream) { logErr('Cannot mute — no local stream'); return; }
        PVC.muted = !PVC.muted;
        PVC.localStream.getAudioTracks().forEach(t => { t.enabled = !PVC.muted; });
        PVC._updateHUD();
        log('Microphone ' + (PVC.muted ? 'MUTED 🔇' : 'UNMUTED 🎤'));
    };

    // =========================================================================
    // Destroy everything
    // =========================================================================
    PVC.destroy = function () {
        log('Destroying proximity voice chat...');
        if (PVC.socket && ANNetwork && ANNetwork.room && ANNetwork.room.players) {
            for (const player of ANNetwork.room.players) {
                if (player.id !== ANNetwork.myId()) {
                    PVC.socket.emit('vchat_end', { to: player.id, from: ANNetwork.myId() });
                }
            }
        }
        for (const peerId in PVC.peers) PVC._closePeer(peerId);
        if (PVC.localStream) {
            PVC.localStream.getTracks().forEach(t => t.stop());
            PVC.localStream = null;
        }
        PVC.initialized = false;
        PVC._removeHUD();
        log('Destroyed');
    };

    // =========================================================================
    // HUD
    // =========================================================================
    PVC._createHUD = function () {
        if (PVC.hudEl) return;
        const el = document.createElement('div');
        el.id = 'vchat-hud';
        el.style.cssText = [
            'position:fixed', 'bottom:12px', 'right:12px',
            'background:rgba(0,0,0,0.55)', 'color:#fff',
            'font-size:20px', 'padding:4px 8px', 'border-radius:8px',
            'z-index:9999', 'pointer-events:none',
            'font-family:sans-serif', 'user-select:none'
        ].join(';');
        document.body.appendChild(el);
        PVC.hudEl = el;
        PVC._updateHUD();
    };

    PVC._updateHUD = function () {
        if (!PVC.hudEl) return;
        PVC.hudEl.textContent = PVC.muted ? '🔇 Muted' : '🎤 Voice';
    };

    PVC._removeHUD = function () {
        if (PVC.hudEl && PVC.hudEl.parentNode) {
            PVC.hudEl.parentNode.removeChild(PVC.hudEl);
            PVC.hudEl = null;
        }
    };

    // =========================================================================
    // Scene_Map: start → init voice chat
    // =========================================================================
    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.call(this);
        log('Scene_Map.start fired');

        if (typeof ANNetwork === 'undefined') {
            log('ANNetwork undefined — not a multiplayer session, skipping');
            return;
        }
        log('ANNetwork.isConnected() = ' + ANNetwork.isConnected());

        if (ANNetwork.isConnected()) {
            if (!PVC.initialized) {
                log('Calling PVC.init()...');
                PVC.init();
            }
            // Connect to all players already in room
            if (ANNetwork.room && ANNetwork.room.players) {
                log('Players in room: ' + ANNetwork.room.players.length);
                ANNetwork.room.players.forEach(p => {
                    log('  Player: ' + p.id + (p.id === ANNetwork.myId() ? ' (ME)' : ''));
                    if (p.id !== ANNetwork.myId()) PVC.connectToPlayer(p.id);
                });
            } else {
                log('ANNetwork.room or room.players is null/undefined');
            }
        } else {
            log('Not connected to network — proximity voice chat idle');
        }
    };

    // =========================================================================
    // Scene_Map: update → update volumes + mute key
    // =========================================================================
    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _Scene_Map_update.call(this);
        if (PVC.initialized) {
            PVC.updateVolumes();
            if (Input.isTriggered(MUTE_KEY)) PVC.toggleMute();
        }
    };

    // =========================================================================
    // Scene_Map: terminate
    // =========================================================================
    const _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.call(this);
        if (!ANNetwork || !ANNetwork.isConnected()) {
            log('Leaving network scene — destroying voice chat');
            PVC.destroy();
        }
    };

    // =========================================================================
    // Input mapping for mute key
    // =========================================================================
    if (Input.keyMapper) {
        const keyCode = MUTE_KEY.toUpperCase().charCodeAt(0);
        Input.keyMapper[keyCode] = MUTE_KEY;
    }

    // =========================================================================
    // Hook NetworkClientHandler when ready
    // =========================================================================
    let _hookAttempts = 0;
    const _hookWhenReady = function () {
        _hookAttempts++;
        log('Hook attempt #' + _hookAttempts + ' for NetworkClientHandler...');
        if (!_hookNetworkClient()) {
            if (_hookAttempts < 20) setTimeout(_hookWhenReady, 500);
            else logErr('Gave up hooking NetworkClientHandler after 20 attempts');
        }
    };

    if (document.readyState === 'complete') {
        _hookWhenReady();
        setTimeout(_tryGrabExistingSocket, 2000);
    } else {
        window.addEventListener('load', () => {
            _hookWhenReady();
            setTimeout(_tryGrabExistingSocket, 2000);
        });
    }

    // =========================================================================
    // Debug helper — type vchatDebug() in browser console
    // =========================================================================
    window.vchatDebug = function () {
        console.group('%c[VoiceChat] Debug Report', LOG_STYLE);
        console.log('initialized      :', PVC.initialized);
        console.log('socket           :', PVC.socket ? 'EXISTS (id=' + PVC.socket.id + ')' : 'NULL');
        console.log('socketReady      :', PVC._socketReady);
        console.log('localStream      :', PVC.localStream ? 'ACTIVE' : 'NULL');
        console.log('muted            :', PVC.muted);
        console.log('maxDistance      :', MAX_DISTANCE, 'tiles');
        console.log('muteKey          :', MUTE_KEY);
        console.log('ANNetwork conn   :', typeof ANNetwork !== 'undefined' ? ANNetwork.isConnected() : 'ANNetwork MISSING');
        console.log('ANNetwork.myId() :', typeof ANNetwork !== 'undefined' ? ANNetwork.myId() : 'N/A');
        console.log('room players     :', ANNetwork && ANNetwork.room && ANNetwork.room.players ? ANNetwork.room.players.map(p => p.id) : 'none');
        console.log('active peers     :', Object.keys(PVC.peers));
        for (const [id, peer] of Object.entries(PVC.peers)) {
            console.log('  peer ' + id + ': state=' + peer.pc.connectionState + ' ice=' + peer.pc.iceConnectionState + ' volume=' + peer.audioEl.volume.toFixed(2));
        }
        console.groupEnd();
    };

    // Expose for debugging
    window.ProximityVoiceChat = PVC;

    logOk('Proximity Voice Chat v2.1 loaded (maxDist=' + MAX_DISTANCE + ' tiles, muteKey=' + MUTE_KEY + ')');
    log('Type vchatDebug() in console any time to see full state');

})();