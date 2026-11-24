# fulsuccess — AI Automation Agency Website

Marketing website for **fulsuccess**, an AI automation agency. It's a fast static single-page app deployed to **GitHub Pages** at **https://fulsuccess.com**.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- Deployed with GitHub Actions → GitHub Pages

## Local development

Requires **Node.js 20+**.

```sh
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev
```

## Build

```sh
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. The custom domain **fulsuccess.com** is pinned via [`public/CNAME`](public/CNAME).

## Configuration

- The contact email and the Calendly booking link are centralized in [`src/lib/site.ts`](src/lib/site.ts) — update them there and they propagate across the whole site.
