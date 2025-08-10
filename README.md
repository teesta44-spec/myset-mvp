# My Set — MVP (Docker-ready)

Minimal, mobile-friendly starter for Render with a working Dockerfile.

## Deploy to Render (Dockerfile)
1) Upload this whole folder to **GitHub** (repo name can be `myset-mvp`).
2) On **Render** → New Web Service → connect your GitHub repo.
3) Render will auto-detect the `Dockerfile`.
4) Add Environment Variables:
   - `LIVEPEER_PLAYBACK_ID` (or `STREAM_URL`)
   - Optional: `PORT` (Render sets it automatically)
5) Deploy.

## Local run
```bash
npm install
cp .env.example .env
# set LIVEPEER_PLAYBACK_ID or STREAM_URL in .env
npm start
# open http://localhost:3000
```
