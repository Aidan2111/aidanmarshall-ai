# Aidan Marshall Entity Showcase Design

## Goal

Build `aidanmarshall.ai` as Aidan Marshall's canonical public entity homepage: a credible AI engineering showcase that helps Google, search systems, and AI crawlers identify the same person across the website, LinkedIn, GitHub, resume-backed experience, open-source projects, and writing.

## Audience

The page serves recruiters, technical peers, enterprise AI contacts, Google Search, structured-data consumers, and AI assistants that summarize public identity from the web.

## Positioning

Primary identity:

- Name: Aidan Marshall
- Domain: `https://aidanmarshall.ai`
- Location: Dallas, TX
- Public profile links:
  - LinkedIn: `https://www.linkedin.com/in/aidan-marshall77`
  - GitHub: `https://github.com/Aidan2111`

Public positioning:

- Dallas-based AI engineer building agentic systems, enterprise automation, and open-source AI tools.
- Current work: Senior Associate Native AI Engineer at PwC through Brooksource.
- Prior work: AI Engineer in IBM's One Microsoft Practice Innovation group.
- Education: Southern Methodist University, Cox School of Business.

The page must not mention Tampa. It must not publish the phone number or personal email from the resume unless Aidan explicitly requests it later.

## Credibility Rules

The site must stay conservative and source-aligned.

- Use only resume-backed claims for employer, role, education, skills, project themes, and certifications.
- Do not invent press, awards, metrics beyond the resume, media appearances, stars, or speaking credentials.
- Keep PwC/Brooksource wording accurate and avoid implying direct full-time PwC employment if the resume says `PwC (C2H Brooksource)`.
- Frame projects as personal/open-source work where links are available, not as commercial proof unless public evidence supports that.
- Treat LinkedIn articles as a writing surface and link to the LinkedIn profile unless specific article URLs are later provided.

## Page Structure

### Header

Minimal navigation:

- Work
- Projects
- Writing
- Proof

Primary external actions:

- LinkedIn
- GitHub

### Hero

Visible first-viewport signal:

- H1: `Aidan Marshall`
- Supporting copy: Dallas-based AI engineer building agentic systems, enterprise automation, and open-source AI tools.
- Detail line: Current Native AI engineering work spans Google ADK, Claude SDK, Harvey AI, Azure OpenAI, MCP, React/TypeScript, and Python.

The hero should feel like a professional source-of-truth page, not a startup landing page or resume PDF clone.

### Entity Summary

Summarize Aidan as one distinct entity:

- Dallas, TX
- AI systems and enterprise automation
- Open-source AI project builder
- LinkedIn writing and GitHub project presence

### Work

Show two roles:

- Senior Associate Native AI Engineer, PwC (C2H Brooksource), Dallas, TX, March 2026 to present
- AI Engineer - One Microsoft Practice Innovation, IBM, Dallas, TX, June 2025 to March 2026

Use short bullets adapted from the resume:

- Agentic AI systems using Google ADK and Claude SDK
- Harvey AI integration into a core product
- AI-assisted development workflows with Cursor, Claude, and Copilot
- Azure OpenAI services and MCP-based orchestration
- Enterprise governance and compliance context

### Projects

Use the resume projects as initial project cards and connect them to GitHub when public URLs are available:

- Autonomous Native AI Mobile Navigation Agent
- Sentiment-Driven Quantitative Carry Trade Model
- AI-Driven Professional Growth and Insights Platform

Also include a GitHub profile callout for `Aidan2111` as the canonical open-source destination.

### Writing

Create a LinkedIn writing section that links to `https://www.linkedin.com/in/aidan-marshall77` and is ready to accept specific article links later. Keep copy honest: `Articles and posts on AI systems, enterprise automation, and practical agentic workflows are published through LinkedIn.`

### Proof Stack

Include:

- Southern Methodist University, Cox School of Business
- Microsoft Agentic AI Solution Architect (AB-100)
- Microsoft AI Engineer (AI-102)
- Microsoft Azure Fundamentals
- Databricks Fundamentals
- GitHub Copilot

### Domain Readiness

The site should include an implementation note or checklist for deployment:

- Buy `aidanmarshall.ai`.
- Deploy the site to a static host.
- Point DNS to the host.
- Add `https://aidanmarshall.ai` to Google Search Console.
- Submit `https://aidanmarshall.ai/sitemap.xml`.
- Use URL Inspection after deployment.
- Validate structured data with Google's Rich Results Test.

## Structured Data

Add JSON-LD on the homepage using `ProfilePage` with a `Person` as `mainEntity`.

Required identity:

- `@context`: `https://schema.org`
- `@type`: `ProfilePage`
- `@id`: `https://aidanmarshall.ai/#profile`
- `url`: `https://aidanmarshall.ai`
- `mainEntity.@type`: `Person`
- `mainEntity.@id`: `https://aidanmarshall.ai/#person`
- `mainEntity.name`: `Aidan Marshall`
- `mainEntity.url`: `https://aidanmarshall.ai`
- `mainEntity.sameAs`:
  - `https://www.linkedin.com/in/aidan-marshall77`
  - `https://github.com/Aidan2111`
- `mainEntity.jobTitle`: `Senior Associate Native AI Engineer`
- `mainEntity.worksFor.name`: `PwC (C2H Brooksource)`
- `mainEntity.homeLocation.name`: `Dallas, TX`
- `mainEntity.alumniOf.name`: `Southern Methodist University, Cox School of Business`
- `mainEntity.knowsAbout`: AI agents, agentic AI architecture, enterprise automation, multi-agent orchestration, Azure OpenAI, Google ADK, Claude SDK, Harvey AI, Model Context Protocol, React, TypeScript, Python, Databricks

All structured-data claims must also appear visibly on the page.

## SEO And Crawlability

Include:

- Canonical link for `https://aidanmarshall.ai/`
- Title: `Aidan Marshall | AI Systems, Agentic Workflows, and Open Source`
- Description focused on Dallas, AI engineering, enterprise automation, open source, and LinkedIn writing.
- Open Graph and Twitter metadata.
- `robots.txt` allowing crawl and pointing to sitemap.
- `sitemap.xml` with the root URL.
- Readable static HTML text after build.

## Visual Direction

Use a clean, serious, high-trust engineering portfolio style:

- White or near-white page background with strong black text.
- Accent color: restrained electric blue or cyan for links and technical highlights.
- No generic AI gradients, floating orbs, fake dashboards, or exaggerated startup styling.
- Dense enough to feel credible, spacious enough to scan.
- Cards only for repeated work/project items, not nested page sections.
- Typography should feel sharp and modern, with restrained scale and no negative letter spacing.

## Technical Direction

Use Vite, React, TypeScript, and Vitest.

Code organization:

- `src/content.ts` owns visible content and entity data.
- `src/seo.ts` derives JSON-LD and metadata from content.
- `src/App.tsx` composes the page.
- `src/App.css` owns styling.
- Tests verify that visible content, metadata, and JSON-LD stay aligned.

## Acceptance Criteria

- The site runs locally in a new folder at `/Users/aidanbothost/Code/aidanmarshall-ai`.
- The page does not mention Tampa.
- The page does not expose phone number or personal email.
- The page visibly includes Dallas, LinkedIn, GitHub, AI focus, open-source focus, LinkedIn writing, current/prior roles, SMU, and proof stack.
- JSON-LD validates structurally as `ProfilePage` with `Person` `mainEntity`.
- `sameAs` includes LinkedIn and GitHub.
- `sitemap.xml` and `robots.txt` exist.
- `npm test` passes.
- `npm run build` passes.
- Local dev server starts and serves the site for browser review.
