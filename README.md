# aidanmarshall.ai

Personal landing page for Aidan Marshall — an AI engineer building agentic systems and enterprise automation. The site presents experience, projects, writing, and ways to connect, and is built so search engines and LLMs can resolve the entity cleanly.

## What This Includes

- Vite, React, and TypeScript site
- Prerendered static HTML so crawlers and AI scrapers read full content without running JavaScript
- `Person` + `ProfilePage` + `WebSite` JSON-LD graph, with LinkedIn and GitHub as `sameAs` links
- Human-readable sections: hero, experience, projects, writing, capabilities, and contact
- A subtle, decorative ambient background (WebGPU with a canvas fallback, disabled under reduced-motion)
- `robots.txt` and `sitemap.xml`
- GitHub Actions deployment to GitHub Pages

## Local Development

```bash
npm install
npm run dev -- --port 5173
```

Local URL:

```text
http://127.0.0.1:5173/
```

## Verification

```bash
npm test
npm run build
```

The build step runs Vite and then prerenders the React page into `dist/index.html`, including the JSON-LD schema.

## GitHub Pages Deployment

Pushing to `main` runs `.github/workflows/deploy-pages.yml`.

The workflow:

- installs dependencies with `npm ci`
- runs `npm test`
- builds with `GITHUB_PAGES=true`
- uploads `dist`
- deploys through GitHub Pages

The GitHub Pages URL can be used as a temporary preview before `aidanmarshall.ai` is purchased and connected.

## Domain Launch Steps

1. Buy `aidanmarshall.ai`.
2. Add the domain in the repository's GitHub Pages settings.
3. Add the DNS records GitHub provides.
4. Add `https://aidanmarshall.ai` to Google Search Console.
5. Submit `https://aidanmarshall.ai/sitemap.xml`.
6. Use URL Inspection after DNS and deployment are live.
7. Validate the homepage with Google's Rich Results Test.
