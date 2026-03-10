/*:
 * @target MZ MV
 * @plugindesc (v.2.0) Proximity Voice Chat — WebRTC P2P audio with distance-based volume
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
 * ---------------------------------------------------------------------------
 * Proximity Voice Chat v2.0
 * Requires Alpha NET Z plugin and its server with vchat_signal / vchat_end
 * relay event handlers added to index.js.
 *
 * How it works:
 *   - When you join a multiplayer game, your microphone is activated.
 *   - WebRTC peer connections are established with every player on the same map.
 *   - The volume of each player's voice is proportional to their tile distance.
 *   - Players beyond Max Hear Distance are muted (volume = 0).
 *   - Press [M] (or the configured mute key) to toggle your own mic on/off.
 *   - A small HUD indicator shows mic status (🎤 / 🔇).
 *
 * Server requirement:
 *   Add to your server's index.js (both HTTP and HTTPS sections):
 *     socket.on('vchat_signal', data => { if(data.to) io.to(data.to).emit('vchat_signal', data); });
 *     socket.on('vchat_end',    data => { if(data.to) io.to(data.to).emit('vchat_end',    data); });
 * ---------------------------------------------------------------------------
 */

(function () {
    'use strict';

    // =========================================================================
    // Configuration
    // =========================================================================
    const PLUGIN_NAME = 'VoiceChat';

    function getParam(name, defaultValue) {
        const params = PluginManager.parameters(PLUGIN_NAME);
        if (params && params[name] !== undefined && params[name] !== '') {
            return params[name];
        }
        return defaultValue;
    }

    const MAX_DISTANCE = parseInt(getParam('maxHearDistance', '10'), 10);
    const MUTE_KEY     = getParam('muteKey', 'm').toLowerCase();

    // =========================================================================
    // ICE / STUN Servers
    // =========================================================================
    const RTC_CONFIG = {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
        ]
    };

    // =========================================================================
    // Internal state
    // =========================================================================
    const PVC = {
        localStream: null,      // MediaStream (mic)
        socket: null,           // The Socket.IO socket shared with Alpha_NETZ
        peers: {},              // peerId -> { pc: RTCPeerConnection, audioEl: HTMLAudioElement }
        muted: false,
        initialized: false,
        hudEl: null,

        // --- Socket acquisition ---
        // We intercept the NetworkClientHandler constructor to steal the socket.
        // This fires once Alpha_NETZ connects, before vchat needs to be ready.
        _socketReady: false,
    };

    // =========================================================================
    // Intercept NetworkClientHandler to get the socket
    // =========================================================================
    // Alpha_NETZ defines NetworkClientHandler as a class. We patch its prototype
    // after the script loads so we can grab the socket reference.
    const _hookNetworkClient = function () {
        if (typeof NetworkClientHandler === 'undefined') return;
        const _orig = NetworkClientHandler.prototype.start;
        NetworkClientHandler.prototype.start = function () {
            _orig.call(this);
            if (!PVC.socket && this.socket) {
                PVC.socket = this.socket;
                PVC._socketReady = true;
                console.log('[VoiceChat] Socket acquired from NetworkClientHandler');
                PVC._attachSocketListeners();
            }
        };
    };

    // =========================================================================
    // Attach Socket.IO listeners for WebRTC signaling
    // =========================================================================
    PVC._attachSocketListeners = function () {
        if (!PVC.socket) return;

        PVC.socket.on('vchat_signal', async (data) => {
            if (!data || data.to !== ANNetwork.myId()) return;
            const peerId = data.from;

            if (data.type === 'offer') {
                await PVC._handleOffer(peerId, data.sdp);
            } else if (data.type === 'answer') {
                await PVC._handleAnswer(peerId, data.sdp);
            } else if (data.type === 'ice') {
                await PVC._handleIce(peerId, data.candidate);
            }
        });

        PVC.socket.on('vchat_end', (data) => {
            if (!data || data.to !== ANNetwork.myId()) return;
            PVC._closePeer(data.from);
        });

        // When we disconnect, clean up everything
        PVC.socket.on('disconnect', () => {
            PVC.destroy();
        });

        console.log('[VoiceChat] Socket listeners attached');
    };

    // =========================================================================
    // Initialize voice chat (called when entering a network game map)
    // =========================================================================
    PVC.init = async function () {
        if (PVC.initialized) return;
        if (!PVC.socket) {
            // Try to find socket from NetworkClientHandler instance if available
            console.warn('[VoiceChat] Socket not yet available — will retry on next map load');
            return;
        }

        try {
            PVC.localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            PVC.muted = false;
            PVC.initialized = true;
            PVC._createHUD();
            console.log('[VoiceChat] Microphone acquired — proximity voice chat active');
        } catch (err) {
            console.error('[VoiceChat] Could not get microphone:', err);
        }
    };

    // =========================================================================
    // Create a peer connection with another player
    // =========================================================================
    PVC._createPeer = function (peerId, isInitiator) {
        if (PVC.peers[peerId]) return PVC.peers[peerId].pc;

        const pc = new RTCPeerConnection(RTC_CONFIG);
        const audioEl = document.createElement('audio');
        audioEl.autoplay = true;
        audioEl.volume = 0;
        document.body.appendChild(audioEl);

        PVC.peers[peerId] = { pc, audioEl };

        // Add our local tracks
        if (PVC.localStream) {
            PVC.localStream.getTracks().forEach(track => pc.addTrack(track, PVC.localStream));
        }

        // Receive remote audio
        pc.ontrack = (event) => {
            audioEl.srcObject = event.streams[0];
            console.log('[VoiceChat] Receiving audio from', peerId);
        };

        // Send ICE candidates
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                PVC._signal(peerId, { type: 'ice', candidate: event.candidate });
            }
        };

        pc.onconnectionstatechange = () => {
            console.log(`[VoiceChat] Peer ${peerId} state: ${pc.connectionState}`);
            if (pc.connectionState === 'failed' || pc.connectionState === 'closed') {
                PVC._closePeer(peerId);
            }
        };

        if (isInitiator) {
            pc.onnegotiationneeded = async () => {
                try {
                    const offer = await pc.createOffer();
                    await pc.setLocalDescription(offer);
                    PVC._signal(peerId, { type: 'offer', sdp: pc.localDescription });
                } catch (e) {
                    console.error('[VoiceChat] Offer error:', e);
                }
            };
        }

        return pc;
    };

    // =========================================================================
    // Handle incoming offer → send answer
    // =========================================================================
    PVC._handleOffer = async function (peerId, sdp) {
        const pc = PVC._createPeer(peerId, false);
        try {
            await pc.setRemoteDescription(new RTCSessionDescription(sdp));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            PVC._signal(peerId, { type: 'answer', sdp: pc.localDescription });
        } catch (e) {
            console.error('[VoiceChat] Answer error:', e);
        }
    };

    // =========================================================================
    // Handle incoming answer
    // =========================================================================
    PVC._handleAnswer = async function (peerId, sdp) {
        const peer = PVC.peers[peerId];
        if (!peer) return;
        try {
            await peer.pc.setRemoteDescription(new RTCSessionDescription(sdp));
        } catch (e) {
            console.error('[VoiceChat] setRemoteDescription error:', e);
        }
    };

    // =========================================================================
    // Handle incoming ICE candidate
    // =========================================================================
    PVC._handleIce = async function (peerId, candidate) {
        const peer = PVC.peers[peerId];
        if (!peer) return;
        try {
            await peer.pc.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (e) {
            console.error('[VoiceChat] addIceCandidate error:', e);
        }
    };

    // =========================================================================
    // Send a WebRTC signal to a peer
    // =========================================================================
    PVC._signal = function (targetId, payload) {
        if (!PVC.socket) return;
        PVC.socket.emit('vchat_signal', {
            to: targetId,
            from: ANNetwork.myId(),
            ...payload
        });
    };

    // =========================================================================
    // Close a specific peer connection
    // =========================================================================
    PVC._closePeer = function (peerId) {
        const peer = PVC.peers[peerId];
        if (!peer) return;
        peer.pc.close();
        if (peer.audioEl && peer.audioEl.parentNode) {
            peer.audioEl.parentNode.removeChild(peer.audioEl);
        }
        delete PVC.peers[peerId];
        console.log('[VoiceChat] Closed peer:', peerId);
    };

    // =========================================================================
    // Connect to a new player on the same map (called when we detect new peers)
    // =========================================================================
    PVC.connectToPlayer = function (peerId) {
        if (!PVC.initialized) return;
        if (PVC.peers[peerId]) return; // already connected
        if (peerId === ANNetwork.myId()) return; // don't connect to ourselves

        console.log('[VoiceChat] Initiating WebRTC with', peerId);
        PVC._createPeer(peerId, true);
    };

    // =========================================================================
    // Update volumes based on tile distance
    // =========================================================================
    PVC.updateVolumes = function () {
        if (!PVC.initialized || !$gamePlayer || !$gameMap) return;

        const myX = $gamePlayer.x;
        const myY = $gamePlayer.y;
        const myMapId = $gameMap.mapId();

        // Get all network players from ANNetwork.room
        if (!ANNetwork || !ANNetwork.room || !ANNetwork.room.players) return;

        for (const player of ANNetwork.room.players) {
            const peerId = player.id;
            if (peerId === ANNetwork.myId()) continue;

            const peer = PVC.peers[peerId];
            if (!peer || !peer.audioEl) continue;

            // Try to find this player's character on the map
            // Alpha_NETZ exposes network characters via $gameMap, check common patterns
            let peerX = null, peerY = null;

            // Try $gameMap.networkCharacters or ANMapManager or similar
            if (typeof ANMapManager !== 'undefined' && ANMapManager.networkCharacters) {
                const chars = ANMapManager.networkCharacters();
                if (chars) {
                    const ch = chars.find(c => c._netId === peerId || c.netId === peerId);
                    if (ch) { peerX = ch.x; peerY = ch.y; }
                }
            }

            // Fallback: check $gameMap._events for any character with matching _netId
            if (peerX === null && $gameMap._events) {
                for (const ev of $gameMap._events) {
                    if (ev && (ev._netId === peerId || ev.netId === peerId)) {
                        peerX = ev.x; peerY = ev.y; break;
                    }
                }
            }

            if (peerX === null) {
                // We can't determine position — keep current volume or set low
                continue;
            }

            const dist = Math.abs(myX - peerX) + Math.abs(myY - peerY); // Manhattan distance
            const vol  = Math.max(0, 1 - dist / MAX_DISTANCE);
            peer.audioEl.volume = vol;
        }
    };

    // =========================================================================
    // Mute / Unmute local mic
    // =========================================================================
    PVC.toggleMute = function () {
        if (!PVC.localStream) return;
        PVC.muted = !PVC.muted;
        PVC.localStream.getAudioTracks().forEach(t => { t.enabled = !PVC.muted; });
        PVC._updateHUD();
        console.log('[VoiceChat] Muted:', PVC.muted);
    };

    // =========================================================================
    // Destroy everything (disconnect / scene change / logout)
    // =========================================================================
    PVC.destroy = function () {
        // Notify all peers we're ending
        if (PVC.socket && ANNetwork && ANNetwork.room && ANNetwork.room.players) {
            for (const player of ANNetwork.room.players) {
                if (player.id !== ANNetwork.myId()) {
                    PVC.socket.emit('vchat_end', { to: player.id, from: ANNetwork.myId() });
                }
            }
        }
        // Close all peer connections
        for (const peerId in PVC.peers) {
            PVC._closePeer(peerId);
        }
        // Stop microphone
        if (PVC.localStream) {
            PVC.localStream.getTracks().forEach(t => t.stop());
            PVC.localStream = null;
        }
        PVC.initialized = false;
        PVC._removeHUD();
        console.log('[VoiceChat] Destroyed');
    };

    // =========================================================================
    // HUD indicator
    // =========================================================================
    PVC._createHUD = function () {
        if (PVC.hudEl) return;
        const el = document.createElement('div');
        el.id = 'vchat-hud';
        el.style.cssText = [
            'position:fixed',
            'bottom:12px',
            'right:12px',
            'background:rgba(0,0,0,0.55)',
            'color:#fff',
            'font-size:20px',
            'padding:4px 8px',
            'border-radius:8px',
            'z-index:9999',
            'pointer-events:none',
            'font-family:sans-serif',
            'user-select:none'
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
    // Hook: Scene_Map — init voice on map start
    // =========================================================================
    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.call(this);
        if (ANNetwork && ANNetwork.isConnected()) {
            if (!PVC.initialized) {
                PVC.init();
            }
            // Connect to all players already in the room
            if (ANNetwork.room && ANNetwork.room.players) {
                ANNetwork.room.players.forEach(p => {
                    if (p.id !== ANNetwork.myId()) {
                        PVC.connectToPlayer(p.id);
                    }
                });
            }
        }
    };

    // =========================================================================
    // Hook: Scene_Map update — update volumes every frame
    // =========================================================================
    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _Scene_Map_update.call(this);
        if (PVC.initialized) {
            PVC.updateVolumes();

            // Handle mute key
            if (Input.isTriggered(MUTE_KEY)) {
                PVC.toggleMute();
            }
        }
    };

    // =========================================================================
    // Hook: Scene_Map terminate — destroy on scene exit
    // =========================================================================
    const _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.call(this);
        // Only destroy if we're leaving the game entirely
        // (not when transferring maps — we re-init on next Scene_Map.start)
        if (!ANNetwork || !ANNetwork.isConnected()) {
            PVC.destroy();
        }
    };

    // =========================================================================
    // Input mapping — add mute key to RPG Maker's Input system
    // =========================================================================
    if (Input.keyMapper) {
        // Find key code for the mute key letter
        const keyCode = MUTE_KEY.toUpperCase().charCodeAt(0);
        Input.keyMapper[keyCode] = MUTE_KEY;
    }

    // =========================================================================
    // Hook NetworkClientHandler.start as soon as the class is available
    // =========================================================================
    // We schedule the hook after all plugins have loaded
    const _hookWhenReady = function () {
        if (typeof NetworkClientHandler !== 'undefined') {
            _hookNetworkClient();
        } else {
            // Retry after a short delay — Alpha_NETZ may not have run yet
            setTimeout(_hookWhenReady, 500);
        }
    };

    // Also retry grabbing socket from an existing client if one is already connected
    const _tryGrabExistingSocket = function () {
        // Some Alpha_NETZ versions store the client globally
        if (!PVC.socket) {
            try {
                // manager() returns the manager — from there we can get the socket
                if (typeof io !== 'undefined' && io.managers) {
                    for (const url in io.managers) {
                        const mgr = io.managers[url];
                        if (mgr && mgr.nsps && mgr.nsps['/']) {
                            const sock = mgr.nsps['/'];
                            if (sock && sock.connected) {
                                PVC.socket = sock;
                                PVC._socketReady = true;
                                PVC._attachSocketListeners();
                                console.log('[VoiceChat] Socket acquired from io.managers');
                                return;
                            }
                        }
                    }
                }
            } catch (e) { /* ignore */ }
        }
    };

    // Run hooks after page load
    if (document.readyState === 'complete') {
        _hookWhenReady();
        setTimeout(_tryGrabExistingSocket, 1000);
    } else {
        window.addEventListener('load', () => {
            _hookWhenReady();
            setTimeout(_tryGrabExistingSocket, 1000);
        });
    }

    // Expose for debugging
    window.ProximityVoiceChat = PVC;

    console.log('[VoiceChat] Proximity Voice Chat plugin loaded (max distance:', MAX_DISTANCE, 'tiles, mute key:', MUTE_KEY, ')');

})();