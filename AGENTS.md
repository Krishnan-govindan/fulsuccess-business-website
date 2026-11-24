# Project Architecture

- This is a **static single-page marketing site** (Vite + React + TypeScript + Tailwind + shadcn/ui). It has no backend, authentication, or third-party app-builder coupling — keep it self-contained and framework-standard so it builds and deploys purely on GitHub.
- Deployed to **GitHub Pages** at the custom domain **fulsuccess.com** via `.github/workflows/deploy.yml` (custom domain is pinned by `public/CNAME`).
- Routing uses `HashRouter` so deep links work on GitHub Pages without server-side rewrites.
- Shared contact details and the Calendly booking link live in `src/lib/site.ts` — update them there, not inline in components.
