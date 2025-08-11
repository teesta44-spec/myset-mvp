# My Set — MVP (Docker-free)

This is a simple, deployable MVP of **My Set** with:
- React frontend (Vite)
- Node/Express backend
- Socket.IO chat + WebRTC one-to-many stream (broadcaster -> viewers)
- Stripe donate button via **Payment Link** (no API keys required)
- DJ name animated overlay
- Client-side recording (download .webm)

## Local dev
```bash
# at repo root
npm install
npm run build
npm start
# open http://localhost:10000
```

## Render deployment
- **No Dockerfile** needed.
- Service type: **Web Service (Node)**.
- Build Command: `npm ci && npm run build`
- Start Command: `npm start`
- Port: Use default; app reads `PORT`.

## Stripe donations
Replace the placeholder Payment Link in `client/src/App.jsx` (`donateUrl`) with your own Stripe Payment Link.

## Notes
- WebRTC here is a simple mesh suitable for small rooms. For scale, move to an SFU.
- Recording is client-side only.
