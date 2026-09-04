# Get the site live at https://dexstar198.github.io/dexma-portfolio/

I can't do these two steps for you: GitHub deliberately refuses my app token both
`workflows` permission (creating `.github/workflows/*`) and `pages` permission
(changing the Pages setting). Only you, signed in as Dexstar198, can. It takes ~2 minutes.

---

## Step 1 — Merge the pull request

https://github.com/Dexstar198/dexma-portfolio/pull/1

Click **Merge pull request**. This puts the base-path fix, the router fix and
`.nojekyll` onto `main`.

---

## Step 2 — Create the workflow file

Click this link (it opens GitHub's new-file editor on `main` already named correctly):

https://github.com/Dexstar198/dexma-portfolio/new/main?filename=.github/workflows/deploy.yml

Paste in exactly this, then click **Commit changes**:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - name: SPA fallback
        run: cp dist/index.html dist/404.html
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

(The same content is in `github-pages-workflow.yml` at the repo root if you'd
rather copy it from there.)

---

## Step 3 — Turn Pages on

https://github.com/Dexstar198/dexma-portfolio/settings/pages

Under **Build and deployment → Source**, choose **GitHub Actions**. Save if prompted.

> Your repo is currently **private**. GitHub Pages on a private repo requires
> GitHub Pro/Team. If you're on the free plan, make the repo public first:
> Settings → General → bottom → **Change visibility → Public**.

---

## Step 4 — Watch it build

https://github.com/Dexstar198/dexma-portfolio/actions

The "Deploy to GitHub Pages" run takes ~1–2 minutes. When the green check appears:

**https://dexstar198.github.io/dexma-portfolio/**

If it didn't trigger on its own, open the workflow and click **Run workflow**.

---

## Still 404 after all that?

- First deploy can take a few minutes to propagate — hard-refresh (Ctrl+Shift+R).
- Make sure the URL has the **trailing slash** and matches the repo name's case.
- If Actions shows no runs, Step 2's file path is wrong. It must be exactly
  `.github/workflows/deploy.yml`.

## Want the bare https://dexstar198.github.io/ instead?

Rename the repo to `Dexstar198.github.io` (Settings → General → Repository name),
then tell me and I'll change the Vite base from `/dexma-portfolio/` to `/`.
