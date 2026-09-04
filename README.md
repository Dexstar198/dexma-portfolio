# Dexma Portfolio

Portfolio site for Dexma — Minecraft server developer, Head Developer at BasakMC.

Built with Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui. It is a fully static single-page app (no backend required).

## Local development

```sh
npm install
npm run dev        # http://localhost:8080
```

## Production build

```sh
npm run build      # outputs static files to ./dist
npm run start      # serves ./dist on $PORT (default 3000)
```

`npm run start` uses `serve -s dist`, which binds to `0.0.0.0:$PORT` and rewrites all unknown paths to `index.html` so client-side routes work on refresh/deep links.

Requirements: Node.js >= 18.18 (see `engines` and `.nvmrc`, which pins Node 20).

---

## Deploy to GitHub Pages (primary)

Live URL: **https://dexstar198.github.io/dexma-portfolio/**

`.github/workflows/deploy.yml` builds and publishes automatically on every push to `main`.

One-time setup: GitHub repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Notes:
- `vite.config.ts` sets `base: "/dexma-portfolio/"` for production builds (override with the `VITE_BASE` env var).
- The router uses `basename={import.meta.env.BASE_URL}` so links work under the subpath.
- The workflow copies `index.html` → `404.html` so deep links / refreshes work on Pages.
- `public/.nojekyll` stops Jekyll from stripping files.

Want the bare `https://dexstar198.github.io/` URL instead? Rename the repo to `Dexstar198.github.io` and set `base: "/"`.

---

## Deploy to Vercel

Vercel serves the static build from its CDN — no server process, so no `PORT` is involved.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to https://vercel.com/new and import the repository.
3. Settings (Vercel auto-detects these from `vercel.json`; confirm they match):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Node.js Version: **20.x** (Project Settings → General)
4. Environment Variables: **none required.** If you later add any, they must be prefixed `VITE_` to be readable in the browser, and must be added for the Production/Preview/Development environments you need.
5. Click **Deploy**. Subsequent pushes to the default branch deploy automatically.

`vercel.json` already includes the SPA rewrite (`/(.*) → /index.html`) and long-lived cache headers for hashed assets.

### CLI alternative

```sh
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Deploy to Railway

Railway runs a real Node process, so the app must listen on Railway's injected `PORT` — `npm run start` does exactly that.

1. Push this repo to GitHub.
2. Go to https://railway.app → **New Project** → **Deploy from GitHub repo** → pick this repo.
3. Railway reads `railway.json` and uses:
   - Builder: **Nixpacks**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   (A `Procfile` with the same start command is included as a fallback.)
4. Environment Variables (Service → Variables):
   - `PORT` — **do not set it manually**; Railway injects it. The app falls back to `3000` locally.
   - `NODE_ENV=production` (optional but recommended)
   - `NIXPACKS_NODE_VERSION=20` (optional; pins Node if Railway's default drifts)
5. Networking → **Generate Domain** to get a public `*.up.railway.app` URL (or attach a custom domain).
6. Deploy. Pushes to the connected branch redeploy automatically.

### CLI alternative

```sh
npm i -g @railway/cli
railway login
railway link
railway up
```

---

## Troubleshooting

- **Blank page on a deep link (404 on refresh):** the SPA fallback isn't active. On Vercel confirm `vercel.json` is committed; on Railway confirm the start command includes the `-s` flag.
- **Railway build succeeds but deploy crashes:** ensure the start command is `npm run start` and that nothing hardcodes a port.
- **Wrong Node version:** set `NIXPACKS_NODE_VERSION=20` (Railway) or Node 20.x in Project Settings (Vercel).
