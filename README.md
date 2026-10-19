# Portfolio base

A fast, responsive, template-driven portfolio. Astro (static HTML) + plain CSS + small
TypeScript modules. No framework runtime on the page; React can be added later, per component,
for interactive project demos.

## Make it yours (the template contract)

| What | Where |
|---|---|
| Name, email, links, SEO title/description, link-preview image | `src/content/site.ts` |
| Every sentence on the homepage | `src/content/home.ts` |
| Colours, fonts, type scale, spacing | `src/styles/theme.css` |
| Section markup | `src/components/*.astro` |
| Motion (hero lattice, headline resolve, reveals, menu) | `src/scripts/*.ts` |

Nothing personal lives anywhere else. To produce a different site on the same base, replace the
two content files and `theme.css`.

## Commands

```
npm install
npm run dev            # local dev server
npm run build          # static site -> dist/
npm run check:content  # list every placeholder still in the content files
npm run build:release  # fails if any placeholder remains (use for the real deploy)
```

## Deploy

**GitHub Pages:** the repo ships `.github/workflows/deploy.yml`. In the repo go to
Settings → Pages → Source → **GitHub Actions**, then push to `main`. This project builds with
npm into `dist/` — do not reuse the old Bun/TanStack workflow (it looks for `.output/public`
and `bun.lock`, so it fails and the site 404s).

`dist/` is plain static files, so Cloudflare Pages, Netlify or Vercel also work.
A custom domain is strongly recommended for events. Set `SITE_URL=https://your.domain`
(absolute link-preview URLs) and, only for sub-path hosting, `BASE_PATH=/repo-name`.

## Behaviour guarantees (tested)

No horizontal scroll at 360 / 390 / 768 / 1024 / 1440 px · all text passes WCAG AA contrast ·
works without JavaScript · honours `prefers-reduced-motion` · keyboard-operable menu ·
44px minimum tap targets · no console errors.

## Not built yet (by design)

Welcome sequence/monogram intro, project pages and demos, `og:image`. The homepage has
four project slots that switch from "In preparation" to real links by setting `status: 'live'`.
