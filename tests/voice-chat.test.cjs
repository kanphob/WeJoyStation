const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const code = fs.readFileSync(require('node:path').join(__dirname, '../js/plugins/VoiceChat.js'), 'utf8');

function harness() {
    const events = {};
    const socket = { id: 'z', connected: true, sent: [], on(k, f) { (events[k] ||= new Set()).add(f); },
        off(k, f) { events[k]?.delete(f); }, emit(k, d) { this.sent.push([k, d]); } };
    const track = () => ({ enabled: true, stopped: false, stop() { this.stopped = true; } });
    const stream = () => { const t = track(); return { getTracks: () => [t], getAudioTracks: () => [t] }; };
    const node = () => ({ gain: { value: 1 }, connect() {}, disconnect() {}, fftSize: 512,
        getByteTimeDomainData(data) { data.fill(128); } });
    class AudioContext {
        constructor() { this.state = 'running'; }
        resume() { return Promise.resolve(); }
        close() { this.closed = true; return Promise.resolve(); }
        createMediaStreamSource() { return node(); }
        createGain() { return node(); }
        createAnalyser() { return node(); }
        createMediaStreamDestination() { return Object.assign(node(), { stream: stream() }); }
    }
    class Peer {
        constructor() { this.connectionState = 'new'; this.signalingState = 'stable'; this.candidates = []; }
        addTrack() {}
        createOffer() { return Promise.resolve({ type: 'offer', sdp: 'offer' }); }
        createAnswer() { return Promise.resolve({ type: 'answer', sdp: 'answer' }); }
        async setLocalDescription(s) { this.localDescription = s; this.signalingState = s.type === 'offer' ? 'have-local-offer' : 'stable'; }
        async setRemoteDescription(s) { this.remoteDescription = s; this.signalingState = s.type === 'offer' ? 'have-remote-offer' : 'stable'; }
        async addIceCandidate(c) { assert.ok(this.remoteDescription); this.candidates.push(c); }
        close() { this.connectionState = 'closed'; }
    }
    function SceneMap() {} SceneMap.prototype.start = function () {};
    function SpriteCharacter() {} SpriteCharacter.prototype.update = function () {};
    function Client(s) { this.socket = s; this._init(); } Client.prototype._init = function () {};
    const listeners = {};
    const context = {
        console, Uint8Array, Date, Math, Promise, Object, Number, String, JSON,
        PluginManager: { parameters: () => ({}) }, localStorage: { getItem: () => null, setItem() {} },
        navigator: { mediaDevices: { getUserMedia: async () => stream() } },
        document: { hidden: false, body: null, addEventListener(k, f) { listeners[k] = f; },
            createElement: () => ({ volume: 0, setAttribute() {}, play: () => Promise.resolve(), pause() {} }) },
        addEventListener() {}, setInterval() {}, AudioContext, RTCPeerConnection: Peer,
        Scene_Map: SceneMap, Sprite_Character: SpriteCharacter, NetworkClientHandler: Client,
        ANNetwork: { room: { name: 'room' }, isConnected: () => true, myId: () => socket.id },
        ANGameManager: { playersData: [{ id: 'z', mapId: 1 }, { id: 'a', mapId: 1 }],
            startGame() {}, onLeaveRoom() {}, reset() {} },
        $gamePlayer: { x: 0, y: 0 }, $gameMap: { mapId: () => 1, networkCharacterById: () => ({ x: 5, y: 0 }), deltaX: (a,b) => a-b, deltaY: (a,b) => a-b }
    };
    context.window = context; context.SceneManager = { _scene: new SceneMap() };
    vm.runInNewContext(code, context);
    new context.NetworkClientHandler(socket);
    const voice = context.ProximityVoiceChat;
    voice.active = true;
    return { context, voice, socket, events, stream, listeners };
}

test('explicit join starts muted and rejoin never duplicates socket listeners', async () => {
    const { voice, events } = harness();
    await voice.init();
    assert.equal(voice.initialized, true);
    assert.equal(voice.localStream.getTracks()[0].enabled, false);
    assert.equal(events.vchat_signal.size, 1);
    const stream = voice.localStream, processed = voice.processedStream, ctx = voice.audioCtx;
    voice.destroy();
    assert.equal(stream.getTracks()[0].stopped, true);
    assert.equal(processed.getTracks()[0].stopped, true);
    assert.equal(ctx.closed, true);
    assert.equal(events.vchat_signal.size, 0);
    await voice.init();
    assert.equal(events.vchat_signal.size, 1);
});
test('cancelled microphone permission result cannot resurrect the session', async () => {
    const { voice, context, stream } = harness();
    let resolve; const mic = stream();
    context.navigator.mediaDevices.getUserMedia = () => new Promise(r => { resolve = r; });
    const init = voice.init(); voice.destroy(); resolve(mic); await init;
    assert.equal(voice.initialized, false);
    assert.equal(mic.getTracks()[0].stopped, true);
});
test('early ICE is buffered, unknown participants are rejected, answers drain the buffer', async () => {
    const { voice, events } = harness(); await voice.init();
    const peer = voice.peers.a; await peer.queue;
    const signal = [...events.vchat_signal][0];
    signal({ from: 'outsider', to: 'z', type: 'offer', sdp: { type: 'offer', sdp: 'bad' } });
    assert.equal(voice.peers.outsider, undefined);
    signal({ from: 'a', to: 'z', type: 'ice', candidate: { candidate: 'candidate' } });
    signal({ from: 'a', to: 'z', type: 'answer', sdp: { type: 'answer', sdp: 'answer' } });
    await peer.queue;
    assert.equal(peer.pc.candidates.length, 1);
    assert.equal(peer.iceBuffer.length, 0);
});
test('proximity is silent for other maps and missing characters', async () => {
    const { voice, context } = harness(); await voice.init();
    voice.PROXIMITY_ENABLED = true;
    voice.updateVolumes(); assert.equal(voice.peers.a.audioEl.volume, 0.25);
    context.ANGameManager.playersData[1].mapId = 2;
    voice.updateVolumes(); assert.equal(voice.peers.a.audioEl.volume, 0);
    context.ANGameManager.playersData[1].mapId = 1;
    context.$gameMap.networkCharacterById = () => null;
    voice.updateVolumes(); assert.equal(voice.peers.a.audioEl.volume, 0);
});
test('push-to-talk gates both streams; deafen and hidden tab override transmission', async () => {
    const { voice, context } = harness(); await voice.init();
    voice.muted = false; voice.pushToTalk = true; voice._applyMute();
    assert.equal(voice.transmitting, false);
    voice.held = true; voice._applyMute(); assert.equal(voice.transmitting, true);
    voice.deafened = true; voice._applyMute(); assert.equal(voice.transmitting, false);
    voice.deafened = false; context.document.hidden = true; voice._applyMute();
    assert.equal(voice.processedStream.getTracks()[0].enabled, false);
});
test('room departure closes peers and microphone while transport stays connected', async () => {
    const { voice, context, socket } = harness(); await voice.init();
    context.ANGameManager.onLeaveRoom();
    assert.equal(voice.active, false); assert.equal(voice.initialized, false);
    assert.equal(Object.keys(voice.peers).length, 0); assert.equal(socket.connected, true);
});
test('stalled negotiations expire and are recreated for late voice joiners', async () => {
    const { voice } = harness(); await voice.init();
    const old = voice.peers.a; await old.queue; old.created = Date.now() - 21000;
    voice.discoverPlayers(); await voice.peers.a.queue;
    assert.notEqual(voice.peers.a, old); assert.equal(old.pc.connectionState, 'closed');
});
test('polite peer rolls back a colliding local offer before answering', async () => {
    const { voice, socket, context } = harness();
    socket.id = '0'; context.ANGameManager.playersData[0].id = '0';
    await voice.init(); const peer = voice.peers.a;
    await voice._offer(peer);
    assert.equal(peer.pc.signalingState, 'have-local-offer');
    await voice._receive(peer, { type: 'offer', sdp: { type: 'offer', sdp: 'remote' } });
    assert.equal(peer.pc.localDescription.type, 'answer');
    assert.equal(peer.pc.signalingState, 'stable');
});
test('permission rejection leaves no pending state and permits retry', async () => {
    const { voice, context, stream } = harness();
    context.navigator.mediaDevices.getUserMedia = async () => { throw { name: 'NotAllowedError' }; };
    await voice.init(); assert.equal(voice.pending, false); assert.equal(voice.initialized, false);
    context.navigator.mediaDevices.getUserMedia = async () => stream();
    await voice.init(); assert.equal(voice.initialized, true);
});
