/*:
 * @target MZ MV
 * @plugindesc (v3.0) Multiplayer voice: room/proximity, push-to-talk, reconnect and audio controls.
 * @author WeJoyStation
 * @param maxHearDistance
 * @type number
 * @min 1
 * @default 10
 * @param muteKey
 * @default m
 * @param micVolume
 * @type number
 * @decimals 1
 * @default 1.0
 * @param pushToTalkKey
 * @default v
 * @param iceServers
 * @type multiline_string
 * @default []
 * @desc JSON array of additional RTCIceServer entries (TURN recommended for internet play).
 * @help
 * Join voice explicitly using the panel in a multiplayer game.
 * M: mute. V: hold to speak when push-to-talk is selected.
 * Requires the server's existing vchat_signal / vchat_end relay.
 * See docs/voice-chat.md for relay requirements and TURN configuration.
 */
(function () {
    'use strict';
    const params = PluginManager.parameters('VoiceChat') || {};
    const clamp = (v, min, max, fallback) => Number.isFinite(Number(v)) ? Math.max(min, Math.min(max, Number(v))) : fallback;
    const maxDistance = clamp(params.maxHearDistance || 10, 1, 1000, 10);
    const muteKey = (params.muteKey || 'm').toLowerCase();
    const talkKey = (params.pushToTalkKey || 'v').toLowerCase();
    const rtcConfig = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
    try {
        const extra = JSON.parse(params.iceServers || '[]');
        if (Array.isArray(extra)) rtcConfig.iceServers.push(...extra.filter(s => s && s.urls));
    } catch (_) { console.warn('[VoiceChat] Invalid iceServers JSON'); }
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('wejoy.voice.settings') || '{}') || {}; } catch (_) { /* Storage may be disabled. */ }
    const PVC = window.ProximityVoiceChat = {
        peers: Object.create(null), socket: null, initialized: false, muted: saved.muted !== false,
        deafened: false, pushToTalk: saved.pushToTalk === true, held: false,
        PROXIMITY_ENABLED: saved.proximity === true,
        micVolume: clamp(saved.micVolume == null ? (params.micVolume || 1) : saved.micVolume, 0, 2, 1),
        outputVolume: clamp(saved.outputVolume == null ? 1 : saved.outputVolume, 0, 1, 1),
        generation: 0, pending: false, active: false, message: '', isSpeaking: false
    };
    const players = () => (window.ANGameManager && Array.isArray(ANGameManager.playersData)) ? ANGameManager.playersData : [];
    const myId = () => window.ANNetwork ? String(ANNetwork.myId() || '') : '';
    const member = id => players().some(p => String(p.id) === String(id));
    const connected = () => window.ANNetwork && ANNetwork.isConnected() && ANNetwork.room;
    let transport = null;
    if (window.NetworkClientHandler) {
        const startClient = NetworkClientHandler.prototype._init;
        NetworkClientHandler.prototype._init = function () {
            const result = startClient.apply(this, arguments);
            transport = this.socket;
            if (PVC.initialized) PVC._attachSocket(transport);
            return result;
        };
    }
    const gameSocket = () => {
        if (transport && transport.id === myId()) return transport;
        // Only accept the socket belonging to this game's authenticated identity.
        const managers = window.io && io.managers || {};
        for (const key of Object.keys(managers)) {
            const socket = managers[key].nsps && managers[key].nsps['/'];
            if (socket && socket.connected && socket.id === myId()) return socket;
        }
        return null;
    };
    const persist = () => {
        try { localStorage.setItem('wejoy.voice.settings', JSON.stringify({ muted: PVC.muted, pushToTalk: PVC.pushToTalk,
            proximity: PVC.PROXIMITY_ENABLED, micVolume: PVC.micVolume, outputVolume: PVC.outputVolume })); } catch (_) { /* optional */ }
    };
    const stopStream = stream => { if (stream) stream.getTracks().forEach(t => { t.onended = null; t.stop(); }); };
    const report = (message, error) => {
        PVC.message = message;
        if (error) console.warn('[VoiceChat]', message, error.name || error.message);
        PVC._updateHUD();
    };
    PVC._applyMute = function () {
        const enabled = PVC.initialized && !PVC.muted && !PVC.deafened && (!PVC.pushToTalk || PVC.held) && !document.hidden;
        [PVC.localStream, PVC.processedStream].forEach(s => { if (s) s.getAudioTracks().forEach(t => { t.enabled = enabled; }); });
        PVC.transmitting = enabled;
    };
    PVC.toggleMute = function () { PVC.muted = !PVC.muted; PVC._applyMute(); persist(); PVC._updateHUD(); };
    PVC._signal = function (id, payload) {
        if (PVC.initialized && PVC.socket && PVC.socket.connected && member(id)) {
            PVC.socket.emit('vchat_signal', Object.assign({ to: id, from: myId() }, payload));
        }
    };
    PVC._detachSocket = function () {
        if (PVC.socket && PVC.handlers) Object.keys(PVC.handlers).forEach(event => PVC.socket.off(event, PVC.handlers[event]));
        PVC.socket = null;
        PVC.handlers = null;
    };
    PVC._attachSocket = function (socket) {
        if (!socket || socket === PVC.socket) return;
        Object.keys(PVC.peers).forEach(PVC._closePeer);
        PVC._detachSocket();
        PVC.socket = socket;
        PVC.handlers = {
            vchat_signal(data) {
                if (!PVC.initialized || !connected() || !data || String(data.to) !== myId() ||
                    !member(data.from) || String(data.from) === myId() || !['offer', 'answer', 'ice'].includes(data.type)) return;
                const id = String(data.from);
                const peer = PVC.peers[id] || PVC._createPeer(id);
                // Serialise SDP and ICE per peer; messages may arrive while an await is pending.
                peer.queue = peer.queue.then(() => PVC._receive(peer, data)).catch(error => {
                    if (PVC.peers[id] === peer) { PVC._closePeer(id); report('เชื่อมต่อเสียงใหม่…', error); }
                });
            },
            vchat_end(data) {
                if (data && String(data.to) === myId() && member(data.from)) PVC._closePeer(String(data.from));
            },
            disconnect() { PVC.destroy(); report('เครือข่ายขาดการเชื่อมต่อ — เข้าร่วมเสียงอีกครั้งเมื่อพร้อม'); }
        };
        Object.keys(PVC.handlers).forEach(event => socket.on(event, PVC.handlers[event]));
    };
    PVC.init = async function () {
        if (PVC.initialized || PVC.pending || !PVC.active || !connected()) return;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.RTCPeerConnection) {
            report('เบราว์เซอร์ไม่รองรับเสียง หรือไม่ได้เปิดผ่าน HTTPS / localhost'); return;
        }
        const generation = ++PVC.generation;
        PVC.pending = true;
        report('กำลังขอใช้ไมโครโฟน…');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: {
                echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1
            }, video: false });
            if (generation !== PVC.generation || !PVC.active || !connected()) { stopStream(stream); return; }
            PVC.localStream = stream;
            stream.getAudioTracks().forEach(t => { t.enabled = false; t.onended = () => { PVC.destroy(); report('ไมโครโฟนถูกถอด — เชื่อมต่อแล้วกดเข้าร่วมใหม่'); }; });
            const context = PVC.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            await context.resume();
            if (generation !== PVC.generation) return;
            PVC.source = context.createMediaStreamSource(stream);
            PVC.localGainNode = context.createGain();
            PVC.localGainNode.gain.value = PVC.micVolume;
            PVC.localAnalyser = context.createAnalyser();
            PVC.localAnalyser.fftSize = 512;
            PVC.destination = context.createMediaStreamDestination();
            PVC.source.connect(PVC.localGainNode);
            PVC.localGainNode.connect(PVC.localAnalyser);
            PVC.localGainNode.connect(PVC.destination);
            PVC.processedStream = PVC.destination.stream;
            PVC.initialized = true;
            PVC._applyMute();
            PVC._attachSocket(gameSocket());
            report('');
            PVC.discoverPlayers();
        } catch (error) {
            if (generation !== PVC.generation) return;
            PVC.destroy();
            const messages = { NotAllowedError: 'กรุณาอนุญาตไมโครโฟน แล้วกดเข้าร่วมใหม่',
                NotFoundError: 'ไม่พบไมโครโฟน กรุณาเชื่อมต่ออุปกรณ์', NotReadableError: 'ไมโครโฟนไม่พร้อมใช้งาน หรือถูกแอปอื่นใช้อยู่' };
            report(messages[error.name] || 'เริ่มเสียงไม่สำเร็จ กรุณาลองอีกครั้ง', error);
        } finally {
            if (generation === PVC.generation) PVC.pending = false;
            PVC._updateHUD();
        }
    };
    PVC._createPeer = function (id) {
        const pc = new RTCPeerConnection(rtcConfig);
        const audioEl = document.createElement('audio');
        audioEl.autoplay = true;
        audioEl.setAttribute('playsinline', '');
        audioEl.volume = 0;
        const peer = PVC.peers[id] = { id, pc, audioEl, queue: Promise.resolve(), iceBuffer: [],
            created: Date.now(), lastVolume: 0, makingOffer: false, ignoreOffer: false };
        PVC.processedStream.getTracks().forEach(t => pc.addTrack(t, PVC.processedStream));
        pc.onicecandidate = event => {
            if (PVC.peers[id] === peer && event.candidate) PVC._signal(id, { type: 'ice', candidate: event.candidate });
        };
        pc.ontrack = event => {
            if (PVC.peers[id] !== peer) return;
            if (peer.source) peer.source.disconnect();
            if (peer.analyser) peer.analyser.disconnect();
            const stream = event.streams[0] || new MediaStream([event.track]);
            audioEl.srcObject = stream;
            peer.source = PVC.audioCtx.createMediaStreamSource(stream);
            peer.analyser = PVC.audioCtx.createAnalyser();
            peer.analyser.fftSize = 512;
            peer.source.connect(peer.analyser);
            PVC._play(peer);
        };
        pc.onconnectionstatechange = () => {
            if (PVC.peers[id] !== peer) return;
            if (pc.connectionState === 'disconnected') peer.disconnectedAt = Date.now();
            if (pc.connectionState === 'connected') { peer.disconnectedAt = 0; PVC.message = ''; }
            if (pc.connectionState === 'failed' || pc.connectionState === 'closed') PVC._closePeer(id);
        };
        return peer;
    };
    PVC._play = function (peer) {
        const result = peer.audioEl.play();
        if (result && result.then) result.then(() => { peer.blocked = false; }).catch(() => { peer.blocked = true; });
    };
    PVC.resumeAudio = function () {
        if (PVC.audioCtx) PVC.audioCtx.resume().catch(() => report('แตะเปิดเสียงอีกครั้ง'));
        Object.values(PVC.peers).forEach(PVC._play);
    };
    PVC._offer = async function (peer) {
        if (PVC.peers[peer.id] !== peer) return;
        peer.makingOffer = true;
        try {
            await peer.pc.setLocalDescription(await peer.pc.createOffer());
            if (PVC.peers[peer.id] === peer) PVC._signal(peer.id, { type: 'offer', sdp: peer.pc.localDescription });
        } finally { peer.makingOffer = false; }
    };
    PVC._receive = async function (peer, data) {
        if (PVC.peers[peer.id] !== peer || !PVC.initialized) return;
        const pc = peer.pc;
        if (data.type === 'ice') {
            if (!data.candidate || peer.ignoreOffer) return;
            if (!pc.remoteDescription) {
                if (peer.iceBuffer.length < 128) peer.iceBuffer.push(data.candidate);
            } else await pc.addIceCandidate(data.candidate);
            return;
        }
        if (!data.sdp || data.sdp.type !== data.type || typeof data.sdp.sdp !== 'string') return;
        const collision = data.type === 'offer' && (peer.makingOffer || pc.signalingState !== 'stable');
        peer.ignoreOffer = collision && myId() > peer.id;
        if (peer.ignoreOffer) return;
        if (data.type === 'answer' && pc.signalingState !== 'have-local-offer') return;
        if (collision) await pc.setLocalDescription({ type: 'rollback' });
        await pc.setRemoteDescription(data.sdp);
        for (const candidate of peer.iceBuffer.splice(0)) await pc.addIceCandidate(candidate);
        if (data.type === 'offer') {
            await pc.setLocalDescription(await pc.createAnswer());
            if (PVC.peers[peer.id] === peer) PVC._signal(peer.id, { type: 'answer', sdp: pc.localDescription });
        }
    };
    PVC._closePeer = function (id) {
        const peer = PVC.peers[id];
        if (!peer) return;
        delete PVC.peers[id];
        peer.pc.ontrack = peer.pc.onicecandidate = peer.pc.onconnectionstatechange = null;
        peer.pc.close();
        peer.audioEl.pause();
        peer.audioEl.srcObject = null;
        if (peer.source) peer.source.disconnect();
        if (peer.analyser) peer.analyser.disconnect();
    };
    PVC.discoverPlayers = function () {
        if (!PVC.initialized) return;
        if (!PVC.active || !connected()) { PVC.destroy(); return; }
        PVC._attachSocket(gameSocket());
        if (!PVC.socket || !PVC.socket.connected) return;
        const now = Date.now();
        Object.keys(PVC.peers).forEach(id => {
            const p = PVC.peers[id];
            if (!member(id) || (p.disconnectedAt && now - p.disconnectedAt > 10000) ||
                (p.pc.connectionState !== 'connected' && now - p.created > 20000)) PVC._closePeer(id);
        });
        players().forEach(player => {
            const id = String(player.id || '');
            if (!id || id === myId() || PVC.peers[id]) return;
            const peer = PVC._createPeer(id);
            if (myId() > id) peer.queue = peer.queue.then(() => PVC._offer(peer)).catch(error => {
                if (PVC.peers[id] === peer) { PVC._closePeer(id); report('กำลังลองเชื่อมต่อเสียงอีกครั้ง…', error); }
            });
        });
    };
    PVC._getVolume = function (analyser) {
        if (!analyser) return 0;
        const data = analyser._voiceSamples || (analyser._voiceSamples = new Uint8Array(analyser.fftSize));
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) sum += Math.pow((data[i] - 128) / 128, 2);
        return Math.sqrt(sum / data.length);
    };
    PVC.updateVolumes = function () {
        Object.values(PVC.peers).forEach(peer => {
            let volume = PVC.deafened || peer.muted ? 0 : PVC.outputVolume;
            if (PVC.PROXIMITY_ENABLED) {
                const player = players().find(p => String(p.id) === peer.id);
                const char = window.$gameMap && $gameMap.networkCharacterById ? $gameMap.networkCharacterById(peer.id) : null;
                if (!player || !window.$gamePlayer || !window.$gameMap || player.mapId !== $gameMap.mapId() || !char) volume = 0;
                else {
                    const distance = Math.hypot($gameMap.deltaX($gamePlayer.x, char.x), $gameMap.deltaY($gamePlayer.y, char.y));
                    volume *= Math.pow(Math.max(0, 1 - distance / maxDistance), 2);
                }
            }
            peer.audioEl.volume = volume;
            peer.lastVolume = volume;
            const level = PVC._getVolume(peer.analyser);
            if (level > 0.025) peer.spokeAt = Date.now();
            peer.isSpeaking = volume > 0 && Date.now() - (peer.spokeAt || 0) < 220;
        });
        PVC.lastLocalVol = PVC.transmitting ? PVC._getVolume(PVC.localAnalyser) : 0;
        PVC.isSpeaking = PVC.lastLocalVol > 0.025;
    };
    PVC.destroy = function () {
        ++PVC.generation;
        PVC.pending = false;
        Object.keys(PVC.peers).forEach(id => {
            if (PVC.socket && PVC.socket.connected) PVC.socket.emit('vchat_end', { to: id, from: myId() });
            PVC._closePeer(id);
        });
        PVC._detachSocket();
        stopStream(PVC.localStream);
        stopStream(PVC.processedStream);
        ['source', 'localGainNode', 'localAnalyser', 'destination'].forEach(key => { if (PVC[key]) PVC[key].disconnect(); PVC[key] = null; });
        if (PVC.audioCtx) PVC.audioCtx.close().catch(() => {});
        PVC.audioCtx = PVC.localStream = PVC.processedStream = null;
        PVC.initialized = PVC.held = PVC.isSpeaking = PVC.transmitting = false;
        PVC.lastLocalVol = 0;
        PVC._updateHUD();
    };
    PVC._createHUD = function () {
        if (PVC.hudEl || !document.body) return;
        const style = document.createElement('style');
        style.textContent = '#vchat-hud{position:fixed;right:12px;bottom:12px;z-index:99;width:264px;max-width:calc(100vw - 40px);max-height:65vh;overflow:auto;padding:14px;background:rgba(18,23,39,.94);color:#eef3ff;border:1px solid #536582;border-radius:16px;box-shadow:0 8px 28px #0007;font:13px system-ui,sans-serif;backdrop-filter:blur(12px)}#vchat-hud button,#vchat-hud select{font:inherit;color:#eef3ff;background:#29344e;border:1px solid #647594;border-radius:8px;padding:7px;cursor:pointer}#vchat-hud button:focus-visible,#vchat-hud select:focus-visible{outline:2px solid #7df4d1}#vchat-hud button[aria-pressed="true"]{background:#704052}#vchat-hud .vc-row{display:flex;gap:6px;align-items:center;justify-content:space-between;margin:8px 0}#vchat-hud label{display:block;margin-top:10px}#vchat-hud input{width:100%;accent-color:#7df4d1}#vchat-hud small{color:#b4c3dd}#vchat-hud .vc-meter{height:4px;background:#34405a;border-radius:4px;overflow:hidden;margin:9px 0}#vchat-hud .vc-meter span{display:block;height:100%;background:#7df4d1}#vchat-hud .vc-peer{padding:5px 0;border-top:1px solid #34405a}';
        document.head.appendChild(style);
        const el = PVC.hudEl = document.createElement('section');
        el.id = 'vchat-hud';
        el.setAttribute('aria-label', 'Voice chat');
        el.innerHTML = '<div class="vc-row"><strong>VOICE CHAT</strong><small id="vc-count"></small></div><div id="vc-status" role="status"></div><div class="vc-meter"><span id="vc-meter"></span></div><div class="vc-row"><button id="vc-join">เข้าร่วมเสียง</button><button id="vc-mute">ไมค์</button><button id="vc-deafen">หูฟัง</button></div><button id="vc-resume" hidden>แตะเพื่อเปิดเสียง</button><details><summary>ตั้งค่าเสียง</summary><label>โหมดไมค์ <select id="vc-mode"><option value="open">เปิดไมค์</option><option value="ptt">กดเพื่อพูด</option></select></label><button id="vc-talk" style="width:100%;margin-top:8px;touch-action:none">กดค้างเพื่อพูด</button><label>ระยะเสียง <select id="vc-channel"><option value="room">ทั้งห้อง</option><option value="near">เฉพาะคนใกล้</option></select></label><label>ระดับไมค์ <input id="vc-input" type="range" min="0" max="2" step="0.05"></label><label>ระดับเสียงผู้เล่น <input id="vc-output" type="range" min="0" max="1" step="0.05"></label><small id="vc-keys"></small><div id="vc-peers"></div></details>';
        document.body.appendChild(el);
        PVC.ui = {};
        ['count', 'status', 'meter', 'join', 'mute', 'deafen', 'resume', 'mode', 'talk', 'channel', 'input', 'output', 'keys', 'peers'].forEach(k => { PVC.ui[k] = el.querySelector('#vc-' + k); });
        const ui = PVC.ui;
        ui.mode.value = PVC.pushToTalk ? 'ptt' : 'open';
        ui.channel.value = PVC.PROXIMITY_ENABLED ? 'near' : 'room';
        ui.input.value = PVC.micVolume;
        ui.output.value = PVC.outputVolume;
        ui.keys.textContent = muteKey.toUpperCase() + ': ปิด/เปิดไมค์ • ' + talkKey.toUpperCase() + ': กดค้างเพื่อพูด';
        ui.join.onclick = () => { if (PVC.initialized || PVC.pending) { PVC.destroy(); report('ออกจากเสียงแล้ว'); } else PVC.init(); };
        ui.mute.onclick = PVC.toggleMute;
        ui.deafen.onclick = () => { PVC.deafened = !PVC.deafened; PVC._applyMute(); PVC.updateVolumes(); PVC._updateHUD(); };
        ui.resume.onclick = PVC.resumeAudio;
        ui.mode.onchange = () => { PVC.pushToTalk = ui.mode.value === 'ptt'; PVC.held = false; PVC._applyMute(); persist(); };
        ui.channel.onchange = () => { PVC.PROXIMITY_ENABLED = ui.channel.value === 'near'; PVC.updateVolumes(); persist(); };
        ui.input.oninput = () => { PVC.micVolume = Number(ui.input.value); if (PVC.localGainNode) PVC.localGainNode.gain.value = PVC.micVolume; persist(); };
        ui.output.oninput = () => { PVC.outputVolume = Number(ui.output.value); PVC.updateVolumes(); persist(); };
        ui.talk.onpointerdown = event => { ui.talk.setPointerCapture(event.pointerId); PVC.held = true; PVC._applyMute(); };
        ui.talk.onpointerup = ui.talk.onpointercancel = ui.talk.onlostpointercapture = () => { PVC.held = false; PVC._applyMute(); };
        ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'wheel', 'keydown', 'keyup'].forEach(type => el.addEventListener(type, event => event.stopPropagation()));
        PVC._updateHUD();
    };
    PVC._updateHUD = function () {
        if (!PVC.ui) return;
        const ui = PVC.ui;
        const peers = Object.values(PVC.peers);
        ui.count.textContent = peers.filter(p => p.pc.connectionState === 'connected').length + ' เชื่อมต่อ';
        ui.status.textContent = PVC.message || (!PVC.initialized ? 'พร้อมเข้าร่วมเสียง' : PVC.deafened ? 'ปิดเสียงและไมค์' : PVC.muted ? 'ปิดไมค์อยู่' : PVC.pushToTalk && !PVC.held ? 'กดค้างเพื่อพูด' : PVC.isSpeaking ? 'กำลังพูด…' : 'ไมค์พร้อมใช้งาน');
        ui.join.textContent = PVC.pending ? 'ยกเลิก' : PVC.initialized ? 'ออกจากเสียง' : 'เข้าร่วมเสียง';
        ui.mute.setAttribute('aria-pressed', String(PVC.muted));
        ui.mute.title = PVC.muted ? 'เปิดไมโครโฟน' : 'ปิดไมโครโฟน';
        ui.deafen.setAttribute('aria-pressed', String(PVC.deafened));
        ui.deafen.title = 'ปิดเสียงผู้เล่นและไมโครโฟน';
        ui.talk.hidden = !PVC.pushToTalk;
        ui.resume.hidden = !(PVC.audioCtx && PVC.audioCtx.state === 'suspended') && !peers.some(p => p.blocked);
        ui.meter.style.width = Math.min(100, (PVC.lastLocalVol || 0) * 400) + '%';
        // Keep controls stable while focused; update participant rows only when their content changes.
        const signature = peers.map(p => [p.id, p.pc.connectionState, p.isSpeaking, p.muted, (players().find(x => String(x.id) === p.id) || {}).name].join(':')).join('|');
        if (PVC.rosterSignature === signature) return;
        PVC.rosterSignature = signature;
        ui.peers.textContent = '';
        peers.forEach(peer => {
            const row = document.createElement('div'); row.className = 'vc-row vc-peer';
            const label = document.createElement('span');
            const player = players().find(p => String(p.id) === peer.id);
            label.textContent = (peer.isSpeaking ? '● ' : '') + (player && player.name || 'ผู้เล่น') + (peer.pc.connectionState === 'connected' ? '' : ' · กำลังเชื่อมต่อ');
            const button = document.createElement('button'); button.textContent = peer.muted ? 'เปิดเสียง' : 'ปิดเสียง';
            button.setAttribute('aria-pressed', String(!!peer.muted));
            button.onclick = () => { peer.muted = !peer.muted; PVC.updateVolumes(); PVC._updateHUD(); };
            row.appendChild(label); row.appendChild(button); ui.peers.appendChild(row);
        });
    };
    const editable = target => target && (target.isContentEditable || /INPUT|TEXTAREA|SELECT|BUTTON/.test(target.tagName));
    document.addEventListener('keydown', event => {
        if (!PVC.active || !PVC.initialized || event.repeat || event.ctrlKey || event.altKey || event.metaKey || editable(event.target) ||
            !(SceneManager._scene instanceof Scene_Map)) return;
        if (event.key.toLowerCase() === muteKey) PVC.toggleMute();
        if (event.key.toLowerCase() === talkKey) { PVC.held = true; PVC._applyMute(); }
    });
    document.addEventListener('keyup', event => { if (event.key.toLowerCase() === talkKey) { PVC.held = false; PVC._applyMute(); } }, true);
    const release = () => { PVC.held = false; PVC._applyMute(); };
    window.addEventListener('blur', release);
    document.addEventListener('visibilitychange', release);
    window.addEventListener('pagehide', () => PVC.destroy());
    function hook(object, method, after) {
        if (!object || typeof object[method] !== 'function') return;
        const original = object[method];
        object[method] = function () { const result = original.apply(this, arguments); after(); return result; };
    }
    hook(window.ANGameManager, 'startGame', () => { PVC.destroy(); PVC.active = true; PVC.message = ''; PVC._createHUD(); if (PVC.hudEl) PVC.hudEl.hidden = false; });
    hook(window.ANGameManager, 'onLeaveRoom', () => { PVC.active = false; PVC.destroy(); if (PVC.hudEl) PVC.hudEl.hidden = true; });
    hook(window.ANGameManager, 'reset', () => { PVC.active = false; PVC.destroy(); if (PVC.hudEl) PVC.hudEl.hidden = true; });
    hook(Scene_Map.prototype, 'start', () => {
        if (connected() && window.ANGameManager && ANGameManager.networkGameStarted) { PVC.active = true; PVC._createHUD(); }
    });
    const updateSprite = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function () {
        updateSprite.apply(this, arguments);
        const peer = this._character && PVC.peers[String(this._character.id)];
        if (peer && peer.isSpeaking && !this._voiceIcon) {
            this._voiceIcon = new Sprite(new Bitmap(32, 24));
            this._voiceIcon.bitmap.textColor = '#7df4d1';
            this._voiceIcon.bitmap.drawText('●', 0, 0, 32, 24, 'center');
            this._voiceIcon.anchor.set(0.5, 1);
            this.addChild(this._voiceIcon);
        }
        if (this._voiceIcon) { this._voiceIcon.visible = !!(PVC.initialized && peer && peer.isSpeaking); this._voiceIcon.y = -this.patternHeight() - 4; }
    };
    // Runs outside Scene_Map too, so menus cannot leave proximity volume stale.
    setInterval(() => {
        if (!PVC.active) return;
        if (!connected()) { PVC.active = false; PVC.destroy(); }
        if (PVC.hudEl) PVC.hudEl.hidden = !PVC.active;
        if (PVC.initialized) { PVC._applyMute(); PVC.updateVolumes(); }
        PVC._updateHUD();
    }, 100);
    setInterval(() => PVC.discoverPlayers(), 3000);
    window.vchatMicVolume = value => { PVC.micVolume = clamp(value, 0, 2, 1); if (PVC.localGainNode) PVC.localGainNode.gain.value = PVC.micVolume; if (PVC.ui) PVC.ui.input.value = PVC.micVolume; persist(); };
    window.vchatDebug = () => ({ initialized: PVC.initialized, muted: PVC.muted, proximity: PVC.PROXIMITY_ENABLED,
        peers: Object.values(PVC.peers).map(p => ({ id: p.id, state: p.pc.connectionState, ice: p.pc.iceConnectionState, volume: p.lastVolume })) });
})();
