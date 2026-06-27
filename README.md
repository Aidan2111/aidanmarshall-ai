# aidanmarshall.ai

Canonical personal site for [Aidan Marshall](https://aidanmarshall.ai/), a Dallas-based AI engineer building agentic systems and enterprise automation. The site presents experience, projects, owned-domain writing, and public profile links so search engines and AI assistants can resolve the Aidan Marshall entity cleanly.

## What This Includes

- Vite, React, and TypeScript site
- Prerendered static HTML so crawlers and AI scrapers read full content without running JavaScript
- `Person`, `ProfilePage`, `WebSite`, `Blog`, and `Article` JSON-LD linked back to the same person entity
- Human-readable sections: hero with headshot, experience, projects, writing/articles, capabilities, and contact
- Real headshot and social preview image
- `robots.txt`, `sitemap.xml`, and `llms.txt`
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

The build step runs Vite and then prerenders the React page into `dist/index.html`, including the JSON-LD schema and `llms.txt`.

## GitHub Pages Deployment

Pushing to `main` runs `.github/workflows/deploy-pages.yml` and deploys to:

```text
https://aidanmarshall.ai/
```

The custom domain is configured through GitHub Pages with HTTPS enforced.

## Public Identity Targets

- Website: https://aidanmarshall.ai/
- LinkedIn: https://www.linkedin.com/in/aidan-marshall77
- GitHub: https://github.com/Aidan2111
- Sitemap: https://aidanmarshall.ai/sitemap.xml
- LLM summary: https://aidanmarshall.ai/llms.txt
