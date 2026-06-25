# aidanmarshall.ai

Canonical personal entity site for Aidan Marshall, focused on AI systems, enterprise automation, open-source projects, and LinkedIn writing.

## What This Includes

- Vite, React, and TypeScript site
- Prerendered static HTML for crawler and AI-scraper readability
- `ProfilePage` + `Person` JSON-LD for entity disambiguation
- LinkedIn and GitHub `sameAs` links
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
