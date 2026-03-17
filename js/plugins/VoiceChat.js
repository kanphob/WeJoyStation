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
 * @param micVolume
 * @text Mic Volume (0.0 to 2.0)
 * @type number
 * @decimals 1
 * @min 0.0
 * @max 2.0
 * @default 1.0
 * @desc Input gain multiplier for your microphone.
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
    // Build version — update this string whenever you push a new version
    // =========================================================================
    const BUILD = 'v2.2 · r12 · 2026-03-11';
    const SPEAKING_THRESHOLD = 0.05; // 0.0 to 1.0 (adjusted RMS)
    const MIC_VOLUME = parseFloat(getParam('micVolume', '1.0'));

    // Inject a tiny corner badge visible immediately on every page load
    (function _injectBuildBadge() {
        if (document.getElementById('vchat-build-badge')) return;
        const badge = document.createElement('div');
        badge.id = 'vchat-build-badge';
        badge.textContent = '🎤 PVC ' + BUILD;
        badge.style.cssText = [
            'position:fixed',
            'top:4px',
            'left:4px',
            'background:rgba(0,0,0,0.6)',
            'color:#0ff',
            'font-size:10px',
            'font-family:monospace',
            'padding:2px 6px',
            'border-radius:4px',
            'z-index:99999',
            'pointer-events:none',
            'user-select:none',
            'letter-spacing:0.5px',
            'box-shadow: 0 0 5px rgba(0,255,255,0.3)'
        ].join(';');
        
        const attach = () => {
            if (document.body) document.body.appendChild(badge);
            else setTimeout(attach, 100);
        };
        attach();
    })();

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
        processedStream: null, // Mic with Gain applied
        socket:       null,
        peers:        {},   // peerId -> { pc, audioEl, analyser }
        muted:        false,
        initialized:  false,
        hudEl:        null,
        indicatorEl:  null, // Mic icon
        meterEl:      null, // Volume bar fill
        statusEl:     null, // Mute/Voice text
        audioCtx:     null, // Web Audio Context
        localAnalyser: null,
        localGainNode: null, 
        _socketReady: false,
        PROXIMITY_ENABLED: false, 
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

        log('Trying to grab socket from ANNetwork or io.managers...');

        // Priority 1: Alpha_NETZ internal client socket
        try {
            if (typeof ANNetwork !== 'undefined' && ANNetwork.client && ANNetwork.client.socket) {
                PVC.socket = ANNetwork.client.socket;
                PVC._socketReady = true;
                logOk('Socket captured from ANNetwork.client.socket! ID: ' + PVC.socket.id);
                PVC._attachSocketListeners();
                return;
            }
            if (typeof NGAME !== 'undefined' && NGAME.client && NGAME.client.socket) {
                PVC.socket = NGAME.client.socket;
                PVC._socketReady = true;
                logOk('Socket captured from NGAME.client.socket! ID: ' + PVC.socket.id);
                PVC._attachSocketListeners();
                return;
            }
        } catch (e) {
            logErr('Error grabbing socket from ANNetwork/NGAME', e);
        }

        // Priority 2: io.managers fallback
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
        if (PVC._listenersAttached) {
            log('Listeners already attached — skipping');
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

        PVC._listenersAttached = true;
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

        // Log room status for debugging
        const roomInfo = ANNetwork.room ? { name: ANNetwork.room.name } : 'NULL';
        const gamePlayers = (window.ANGameManager && ANGameManager.playersData) ? ANGameManager.playersData.length : 'NULL';
        log('ANNetwork.room = ' + JSON.stringify(roomInfo));
        log('ANGameManager.playersData count = ' + gamePlayers);

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
            
            // Setup AudioContext for analysis
            if (!PVC.audioCtx) {
                PVC.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (PVC.audioCtx.state === 'suspended') PVC.audioCtx.resume();
            
            // Local Graph: mic -> gain -> analyser
            const source = PVC.audioCtx.createMediaStreamSource(PVC.localStream);
            
            PVC.localGainNode = PVC.audioCtx.createGain();
            PVC.localGainNode.gain.value = MIC_VOLUME;
            
            PVC.localAnalyser = PVC.audioCtx.createAnalyser();
            PVC.localAnalyser.fftSize = 512;
            
            // Create a processed stream to send to others
            const dest = PVC.audioCtx.createMediaStreamDestination();
            
            source.connect(PVC.localGainNode);
            PVC.localGainNode.connect(PVC.localAnalyser);
            PVC.localGainNode.connect(dest);
            
            PVC.processedStream = dest.stream;

            PVC.initialized = true;
            logOk('Microphone access GRANTED — voice chat logic enabled!');
            PVC._createHUD();
        } catch (err) {
            logErr('Microphone access DENIED or error: ' + err.name + ' — ' + err.message, err);
            return;
        }

        // Re-attach listeners if socket was grabbed in fallback above
        if (PVC.socket) {
            PVC._attachSocketListeners();
        }

        // Start discovering players immediately after init
        PVC.discoverPlayers();
    };

    // =========================================================================
    // Discover and Connect to Players
    // =========================================================================
    PVC._discoveryAttempts = 0;
    PVC.discoverPlayers = function () {
        if (!PVC.initialized) return;

        log('Discovering players in room...');
        
        // Primary source: ANGameManager.playersData (NGAME.playersData)
        // Secondary source: ANNetwork.room.players
        let players = [];
        if (window.ANGameManager && ANGameManager.playersData) {
            players = ANGameManager.playersData;
        } else if (ANNetwork.room && ANNetwork.room.players) {
            players = ANNetwork.room.players;
        }

        if (players.length > 0) {
            logOk('Found ' + players.length + ' players in room sync data');
            players.forEach(p => {
                const pid = p.id || p.netId;
                if (!pid) return;
                log('  Checked player: ' + pid + (pid === ANNetwork.myId() ? ' (ME)' : ''));
                if (pid !== ANNetwork.myId()) {
                    PVC.connectToPlayer(pid);
                }
            });
            PVC._discoveryAttempts = 0;
        } else {
            PVC._discoveryAttempts++;
            if (PVC._discoveryAttempts < 10) {
                log('No players found in sync data — retry #' + PVC._discoveryAttempts + ' in 2s...');
                setTimeout(PVC.discoverPlayers, 2000);
            } else {
                log('Gave up waiting for initial player list sync');
            }
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

        const streamToSend = PVC.processedStream || PVC.localStream;
        if (streamToSend) {
            streamToSend.getTracks().forEach(track => {
                pc.addTrack(track, streamToSend);
                log('Added local ' + (PVC.processedStream ? 'PROCESSED' : 'RAW') + ' track [' + track.kind + '] to peer ' + peerId);
            });
        } else {
            logErr('No local stream to send to peer ' + peerId);
        }

        pc.ontrack = (event) => {
            logOk('Receiving audio track from ' + peerId);
            const stream = event.streams[0];
            audioEl.srcObject = stream;
            
            // Setup Analyser for this peer
            try {
                if (PVC.audioCtx) {
                    const source = PVC.audioCtx.createMediaStreamSource(stream);
                    const analyser = PVC.audioCtx.createAnalyser();
                    analyser.fftSize = 512;
                    source.connect(analyser);
                    if (PVC.peers[peerId]) PVC.peers[peerId].analyser = analyser;
                    log('Attached AnalyserNode to peer ' + peerId);
                }
            } catch (e) {
                logErr('Failed to attach AnalyserNode to ' + peerId, e);
            }
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
            // Manual trigger instead of relying on onnegotiationneeded
            setTimeout(async () => {
                log('Initiating handshake for ' + peerId + ' — creating offer...');
                try {
                    const offer = await pc.createOffer();
                    await pc.setLocalDescription(offer);
                    log('Offer created — sending to ' + peerId);
                    PVC._signal(peerId, { type: 'offer', sdp: pc.localDescription });
                } catch (e) {
                    logErr('Offer creation failed', e);
                }
            }, 500); // Tiny delay to ensure tracks are ready
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
        if (!PVC.initialized) { log('Not init yet — cannot connect to ' + peerId); return; }
        if (PVC.peers[peerId]) {
            const state = PVC.peers[peerId].pc.connectionState;
            if (state === 'failed' || state === 'closed' || state === 'disconnected') {
                log('Peer ' + peerId + ' is in state ' + state + ' — recreating connection');
                PVC._closePeer(peerId);
            } else {
                return; // already have peer in healthy state
            }
        }
        if (peerId === ANNetwork.myId()) { return; }
        log('Connecting to Player: ' + peerId);
        PVC._createPeer(peerId, true);
    };

    // =========================================================================
    // Update volumes every frame
    // =========================================================================
    // =========================================================================
    // Helper to get Average Volume (RMS) from AnalyserNode
    // =========================================================================
    PVC._getVolume = function (analyser) {
        if (!analyser) return 0;
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) sum += data[i];
        return sum / data.length / 255; // Normalize 0-1
    };

    // =========================================================================
    // Update speaking state and icons for all players
    // =========================================================================
    PVC.updateVoiceActivity = function () {
        if (!PVC.initialized || !$gamePlayer || !$gameMap) return;

        // Local player
        const localVol = PVC._getVolume(PVC.localAnalyser);
        PVC.isSpeaking = !PVC.muted && localVol > SPEAKING_THRESHOLD;
        PVC.lastLocalVol = localVol;
        
        // Update HUD every frame to show local talking status + meter
        PVC._updateHUD();

        // Remote peers
        for (const peerId in PVC.peers) {
            const peer = PVC.peers[peerId];
            if (!peer || !peer.analyser) continue;
            
            const vol = PVC._getVolume(peer.analyser);
            const isSpeaking = vol > SPEAKING_THRESHOLD;
            peer.isSpeaking = isSpeaking;
            peer.lastRawVolume = vol;
        }
    };

    PVC.updateVolumes = function () {
        if (!PVC.initialized || !$gamePlayer || !$gameMap) return;
        const myX = $gamePlayer.x;
        const myY = $gamePlayer.y;

        for (const peerId in PVC.peers) {
            const peer = PVC.peers[peerId];
            if (!peer || !peer.audioEl) continue;

            if (!PVC.PROXIMITY_ENABLED) {
                peer.audioEl.volume = 1.0;
                peer.lastVolume = 1.0;
                continue;
            }

            let peerX = null, peerY = null;

            // Try ANMapManager (Alpha_NETZ)
            if (typeof ANMapManager !== 'undefined' && ANMapManager.networkCharacters) {
                const chars = ANMapManager.networkCharacters();
                if (chars) {
                    const ch = chars.find(c => (c._netId === peerId || c.netId === peerId));
                    if (ch) { peerX = ch.x; peerY = ch.y; }
                }
            }

            // Fallback: scan all game characters
            if (peerX === null) {
                const allChars = [$gamePlayer, ...$gameMap.events(), ...($gamePlayer.followers ? $gamePlayer.followers()._data : [])];
                for (const char of allChars) {
                    if (char && (char._netId === peerId || char.netId === peerId || (char._title && char._title.includes(peerId)))) {
                        peerX = char.x; peerY = char.y; break;
                    }
                }
            }

            if (peerX !== null) {
                const dist = Math.abs(myX - peerX) + Math.abs(myY - peerY);
                const vol  = Math.max(0, 1 - (dist / MAX_DISTANCE));
                peer.audioEl.volume = vol;
                peer.lastVolume = vol;
            } else {
                peer.audioEl.volume = 1.0;
                peer.lastVolume = 1.0;
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
        if (PVC.socket && ANNetwork && ANNetwork.myId()) {
            for (const peerId in PVC.peers) {
                PVC.socket.emit('vchat_end', { to: peerId, from: ANNetwork.myId() });
                PVC._closePeer(peerId);
            }
        }
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
            'display:flex', 'flex-direction:column', 'align-items:center', 'gap:6px',
            'background:rgba(0,0,0,0.6)', 'padding:10px', 'border-radius:14px',
            'z-index:9999', 'pointer-events:none',
            'font-family:sans-serif', 'user-select:none',
            'border: 1px solid rgba(255,255,255,0.15)',
            'box-shadow: 0 4px 15px rgba(0,0,0,0.5)',
            'backdrop-filter: blur(5px)',
            'width: 64px'
        ].join(';');

        // 1. Mic Icon (Top)
        const indicator = document.createElement('div');
        indicator.style.cssText = [
            'width:40px', 'height:40px',
            'background-image:url("img/system/vchat_talking.png")',
            'background-size:contain', 'background-repeat:no-repeat',
            'transition: filter 0.2s, transform 0.1s',
            'filter: grayscale(1) brightness(0.5)'
        ].join(';');
        
        // 2. Volume Meter Bar (Middle)
        const meterContainer = document.createElement('div');
        meterContainer.style.cssText = 'width:100%; height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;';
        const meterFill = document.createElement('div');
        meterFill.style.cssText = 'width:0%; height:100%; background:#60ff90; transition: width 0.05s; box-shadow: 0 0 5px #60ff90;';
        meterContainer.appendChild(meterFill);

        // 3. Status Text (Bottom)
        const status = document.createElement('div');
        status.style.cssText = 'font-size:12px; font-weight:bold; letter-spacing:1px;';

        el.appendChild(indicator);
        el.appendChild(meterContainer);
        el.appendChild(status);
        document.body.appendChild(el);
        
        PVC.hudEl = el;
        PVC.indicatorEl = indicator;
        PVC.meterEl = meterFill;
        PVC.statusEl = status;
        PVC._updateHUD();
    };

    PVC._updateHUD = function () {
        if (!PVC.hudEl || !PVC.statusEl || !PVC.indicatorEl || !PVC.meterEl) return;
        
        if (PVC.muted) {
            // MUTED: Red Theme
            PVC.statusEl.textContent = 'MUTED';
            PVC.statusEl.style.color = '#ff6060';
            // Use CSS filters to force Red on the transparent image
            PVC.indicatorEl.style.filter = 'grayscale(1) brightness(0.8) sepia(1) hue-rotate(-50deg) saturate(5) drop-shadow(0 0 5px #ff6060)';
            PVC.indicatorEl.style.opacity = '1';
            PVC.indicatorEl.style.transform = 'scale(1.0)';
            PVC.meterEl.style.width = '0%';
            PVC.meterEl.style.background = '#ff6060';
        } else {
            // VOICE: Green/Cyan Theme
            PVC.statusEl.textContent = 'VOICE';
            PVC.statusEl.style.color = '#60ff90';
            PVC.meterEl.style.background = '#60ff90';
            
            // Volume Meter update
            const volPercent = Math.min(100, Math.max(0, (PVC.lastLocalVol || 0) * 200)); // boost for visual
            PVC.meterEl.style.width = volPercent + '%';

            if (PVC.isSpeaking) {
                // Talking: Glowing Green
                PVC.indicatorEl.style.filter = 'grayscale(0) brightness(1.3) drop-shadow(0 0 8px #60ff90)';
                PVC.indicatorEl.style.opacity = '1';
                PVC.indicatorEl.style.transform = 'scale(1.1)';
            } else {
                // Idle: Dim Green
                PVC.indicatorEl.style.filter = 'grayscale(0.7) brightness(0.5)';
                PVC.indicatorEl.style.opacity = '0.7';
                PVC.indicatorEl.style.transform = 'scale(1.0)';
            }
        }
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
        
        if (ANNetwork.isConnected()) {
            if (!PVC.initialized) {
                log('Calling PVC.init()...');
                PVC.init();
            } else {
                // Already initialized, just trigger discovery
                PVC.discoverPlayers();
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
            PVC.updateVoiceActivity(); // New: Detect noise and show icons
            if (Input.isTriggered(MUTE_KEY)) PVC.toggleMute();
        }
    };

    // =========================================================================
    // Scene_Map: terminate
    // =========================================================================
    const _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.call(this);
        // We only destroy if we are actually disconnected, to keep it alive during map transfers if possible
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
    // Console commands
    // =========================================================================
    window.vchatMicVolume = function (val) {
        if (!PVC.localGainNode) {
            logErr('Cannot adjust volume — PVC not initialized or mic not active');
            return;
        }
        const v = parseFloat(val);
        if (isNaN(v)) return;
        PVC.localGainNode.gain.value = v;
        logOk('Microphone gain set to ' + v.toFixed(2));
    };

    // =========================================================================
    // Debug helper — type vchatDebug() in browser console
    // =========================================================================
    window.vchatDebug = function () {
        console.group('%c[VoiceChat] Debug Report', LOG_STYLE);
        console.log('BUILD            :', BUILD);
        console.log('initialized      :', PVC.initialized);
        console.log('socket           :', PVC.socket ? 'EXISTS (id=' + PVC.socket.id + ')' : 'NULL');
        console.log('socketReady      :', PVC._socketReady);
        console.log('localStream      :', PVC.localStream ? 'ACTIVE' : 'NULL');
        console.log('muted            :', PVC.muted);
        console.log('maxDistance      :', MAX_DISTANCE, 'tiles');
        console.log('proximityEnabled :', PVC.PROXIMITY_ENABLED);
        console.log('muteKey          :', MUTE_KEY);
        console.log('ANNetwork conn   :', typeof ANNetwork !== 'undefined' ? ANNetwork.isConnected() : 'ANNetwork MISSING');
        console.log('ANNetwork.myId() :', typeof ANNetwork !== 'undefined' ? ANNetwork.myId() : 'N/A');
        
        const players = (window.ANGameManager && ANGameManager.playersData) ? ANGameManager.playersData : (ANNetwork.room ? ANNetwork.room.players : []);
        console.log('discovered players:', players ? players.map(p => p.id || p.netId) : 'none');
        console.log('active peers     :', Object.keys(PVC.peers));
        for (const [id, peer] of Object.entries(PVC.peers)) {
            const v = peer.lastVolume !== undefined ? peer.lastVolume.toFixed(2) : '?.??';
            const noise = peer.lastRawVolume !== undefined ? peer.lastRawVolume.toFixed(3) : '?.???';
            console.log('  peer ' + id + ': state=' + peer.pc.connectionState + ' ice=' + peer.pc.iceConnectionState + ' volume=' + v + ' noise=' + noise + (peer.isSpeaking ? ' [TALKING]' : ''));
        }
        // --- Diagnostics for identifying characters ---
        console.group('Map Characters Diagnostic');
        const allChars = [$gamePlayer, ...$gameMap.events(), ...($gamePlayer.followers ? $gamePlayer.followers()._data : [])];
        allChars.forEach((c, index) => {
            if (!c) return;
            const keys = Object.keys(c).filter(k => k.includes('Net') || k.includes('Id') || k.includes('net') || k.includes('ID'));
            const data = {};
            keys.forEach(k => data[k] = c[k]);
            console.log(`[Char ${index}] x:${c.x} y:${c.y}`, data, c);
        });
        console.groupEnd();

        console.groupEnd();
    };

    // Expose for debugging
    window.ProximityVoiceChat = PVC;

    logOk('Proximity Voice Chat ' + BUILD + ' loaded');
    log('Type vchatDebug() in console any time to see full state');

})();