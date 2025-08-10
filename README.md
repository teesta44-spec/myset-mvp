# My Set — MVP (Docker-ready)

Neon-glitch themed live DJ streaming MVP.

- Homepage with **Now Playing** preview
- Live page with HLS player + basic Socket.IO chat
- Admin page `/admin` (protected by `ADMIN_TOKEN`)
- Express server with `/api/now-playing`

## Deploy on Render (Dockerfile)

1. Upload this repo (all files) to GitHub.
2. Render → New Web Service → GitHub → select repo.
3. Render detects the `Dockerfile` automatically.
4. Set environment variables:
   - `LIVEPEER_PLAYBACK_ID` (or `STREAM_URL`)
   - `ADMIN_TOKEN`
5. Deploy.

## Local run

```bash
npm install
cp .env.example .env
# set LIVEPEER_PLAYBACK_ID or STREAM_URL and ADMIN_TOKEN
npm start
# open http://localhost:3000
```