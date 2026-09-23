# Multiplayer voice chat

VoiceChat v3 uses the existing Alpha NET Z connection and a WebRTC audio mesh, suited to this game's four-player rooms. Keep VoiceChat after Alpha_NETZ in Plugin Manager.

## Player controls

- Enter a multiplayer game and click **เข้าร่วมเสียง**. Microphone access is requested only after this action. The first session starts muted; later sessions remember the mute setting.
- **M** toggles mute. Select **กดเพื่อพูด** and hold **V** (or the on-screen hold button) to talk. Unmute first. Releasing the key, losing focus, or hiding the page releases push-to-talk. Hidden pages stop transmitting.
- **หูฟัง** disables both incoming audio and microphone transmission.
- Settings include microphone gain, playback volume, room/proximity listening, and individual participant mute. Proximity is a local listening setting, not a server-enforced private channel. Other players using room mode can still hear you.
- **เฉพาะคนใกล้** fades audio over `maxHearDistance` tiles, using actual Alpha NET Z characters and looping-map distances. Players on other maps or with unknown positions are silent in this mode.
- **แตะเพื่อเปิดเสียง** appears if the browser blocks audio playback. Permission/device errors appear in the panel with a retry action.
- Leaving voice, leaving the room, network disconnect, and closing the page release microphone tracks, peer connections, and audio resources. Rejoin voice after a network disconnect. Peer failures within an active session retry automatically.

## Server integration (external to this repository)

The project contains only the game client, not the server deployed at its configured address. The deployed server must already relay these Socket.IO events:

```js
// Client -> server -> target
vchat_signal: { to, from, type: 'offer' | 'answer' | 'ice', sdp?, candidate? }
vchat_end: { to, from }
```

The server must derive `from` from the authenticated socket, verify that sender and recipient are current members of the same game room, and forward only to `to`. Do not broadcast signaling globally or trust a client-supplied sender identity. Validate event types and payload size and rate-limit signaling. Preserve SDP and ICE payloads unchanged. Client membership checks supplement these checks; they cannot replace them.

Use HTTPS (or localhost for development) and a browser/runtime with microphone, Web Audio and WebRTC support. STUN alone cannot connect every NAT/firewall combination. Configure a TURN service for internet play using the plugin's `iceServers` JSON parameter, for example:

```json
[{"urls":["turn:YOUR_HOST:3478?transport=udp","turns:YOUR_HOST:5349?transport=tcp"],"username":"TEMPORARY_USERNAME","credential":"TEMPORARY_CREDENTIAL"}]
```

These are placeholders, not working infrastructure. Do not ship permanent TURN credentials in the public game bundle. Production deployments should obtain short-lived credentials from their authenticated server before creating voice peers; that credential service is not included here. Default configuration adds only public STUN and does not provision TURN or change the deployed server.

Negotiation follows the [W3C WebRTC model](https://www.w3.org/TR/webrtc/): deterministic initiator, serialized signaling, polite rollback for colliding offers, bounded early ICE buffering, and stale connection cleanup. Existing relay event names and payload fields are preserved.

## Verification

Run `node --test tests/voice-chat.test.cjs` and `node --check js/plugins/VoiceChat.js` from the project root. The tests mock game/browser APIs; they validate lifecycle and signaling logic, not real microphone capture, browser rendering, or NAT traversal.

Before release, run two to four real clients against the deployed relay:

1. Join the same room, grant microphone access, unmute, and verify bidirectional sound and speaking indicators.
2. Test denied permission, missing/unplugged microphone, autoplay blocking, touch controls, and push-to-talk while switching focus.
3. Join voice late, leave/rejoin voice repeatedly, leave/rejoin rooms, and interrupt/recover a network connection. Check that old audio and microphone indicators stop.
4. Check proximity on the same map, across maps, beyond ten tiles, and across looping-map boundaries. Test individual mute and deafen.
5. Test users on different networks, including mobile data and a restrictive firewall with TURN enabled. Use browser WebRTC diagnostics to confirm a relay candidate is selected when direct connectivity fails.
6. Verify the server rejects spoofed sender IDs and signaling between different rooms.

`vchatDebug()` returns connection states without dumping SDP or credentials. `vchatMicVolume(0..2)` remains available for debugging.
