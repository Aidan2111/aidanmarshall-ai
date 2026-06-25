# Aidan Marshall Entity Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local Vite/React site for `aidanmarshall.ai` that acts as Aidan Marshall's canonical AI engineering entity homepage with crawlable content, schema, sitemap, robots file, and tests.

**Architecture:** Keep public identity data in `src/content.ts`, derive metadata and JSON-LD in `src/seo.ts`, compose the page in focused React components, and test crawler-facing guarantees with Vitest. Static files in `public/` provide sitemap and robots coverage for deployment.

**Tech Stack:** Vite, React, TypeScript, Vitest, Testing Library, jsdom, CSS.

---

## File Structure

- Create `package.json`: scripts and dependencies for Vite, React, TypeScript, Vitest, and Testing Library.
- Create `index.html`: root HTML shell with canonical metadata placeholders handled by React.
- Create `vite.config.ts`: Vite + React + Vitest jsdom config.
- Create `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript config.
- Create `public/robots.txt`: allow crawlers and point to sitemap.
- Create `public/sitemap.xml`: root URL for `https://aidanmarshall.ai/`.
- Create `src/content.ts`: canonical profile, links, roles, projects, writing, proof stack, and deployment checklist.
- Create `src/seo.ts`: `buildProfilePageSchema`, `siteTitle`, `siteDescription`, and metadata constants.
- Create `src/App.tsx`: page composition.
- Create `src/App.css`: responsive visual system.
- Create `src/main.tsx`: React bootstrap and metadata injection.
- Create `src/content.test.ts`: content safety and entity tests.
- Create `src/seo.test.ts`: structured-data tests.
- Create `src/App.test.tsx`: visible content rendering tests.

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/App.css`

- [ ] **Step 1: Create package and build configuration**

Add scripts:

```json
{
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: `package-lock.json` is created and dependencies install successfully.

- [ ] **Step 3: Verify empty scaffold builds**

Run: `npm run build`

Expected: TypeScript and Vite complete without errors.

---

### Task 2: Content Model With Failing Tests

**Files:**
- Create: `src/content.ts`
- Create: `src/content.test.ts`

- [ ] **Step 1: Write failing content tests**

Tests must assert:

- `profile.name` is `Aidan Marshall`.
- canonical URL is `https://aidanmarshall.ai/`.
- location is Dallas, TX.
- LinkedIn is `https://www.linkedin.com/in/aidan-marshall77`.
- GitHub is `https://github.com/Aidan2111`.
- public content does not contain Tampa, phone number, or personal email.
- focus areas include AI, open source, and LinkedIn writing.

- [ ] **Step 2: Run tests and verify RED**

Run: `npm test -- src/content.test.ts`

Expected: FAIL because `src/content.ts` does not exist.

- [ ] **Step 3: Implement content model**

Add profile, roles, projects, writing, proof stack, and deployment checklist exactly from the approved spec.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test -- src/content.test.ts`

Expected: PASS.

---

### Task 3: Structured Data With Failing Tests

**Files:**
- Create: `src/seo.ts`
- Create: `src/seo.test.ts`

- [ ] **Step 1: Write failing schema tests**

Tests must assert:

- schema `@type` is `ProfilePage`.
- schema `@id` is `https://aidanmarshall.ai/#profile`.
- `mainEntity.@type` is `Person`.
- `mainEntity.@id` is `https://aidanmarshall.ai/#person`.
- `mainEntity.sameAs` includes LinkedIn and GitHub.
- schema includes Dallas, SMU Cox, PwC (C2H Brooksource), and AI skills.
- every schema skill comes from visible content.

- [ ] **Step 2: Run tests and verify RED**

Run: `npm test -- src/seo.test.ts`

Expected: FAIL because `src/seo.ts` does not exist.

- [ ] **Step 3: Implement schema builder and metadata constants**

Build JSON-LD from `profile` and keep title/description exported for metadata injection.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test -- src/seo.test.ts`

Expected: PASS.

---

### Task 4: Page Rendering With Failing Tests

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`
- Create: `src/App.test.tsx`

- [ ] **Step 1: Write failing render tests**

Tests must assert visible rendering of:

- `Aidan Marshall`
- Dallas-based AI engineer positioning
- LinkedIn and GitHub links
- PwC (C2H Brooksource)
- IBM
- open-source project section
- LinkedIn writing section
- proof stack items
- no Tampa, phone number, or personal email

- [ ] **Step 2: Run tests and verify RED**

Run: `npm test -- src/App.test.tsx`

Expected: FAIL because the page is still a placeholder.

- [ ] **Step 3: Implement React page**

Compose sections from `content.ts`; inject JSON-LD and metadata in `main.tsx`.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test -- src/App.test.tsx`

Expected: PASS.

---

### Task 5: SEO Static Files And Styling

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Modify: `src/App.css`
- Modify: `index.html`

- [ ] **Step 1: Add static crawl files**

`robots.txt` must allow all crawlers and point to `https://aidanmarshall.ai/sitemap.xml`.

`sitemap.xml` must include `https://aidanmarshall.ai/`.

- [ ] **Step 2: Add responsive styling**

Implement a serious high-trust portfolio style with white or near-white background, black text, restrained cyan/blue accents, clean cards for repeated items, and responsive layouts that do not overflow on mobile.

- [ ] **Step 3: Run full verification**

Run:

```bash
npm test
npm run build
```

Expected: both pass.

---

### Task 6: Local Browser Verification

**Files:**
- No code files unless visual QA finds a defect.

- [ ] **Step 1: Start dev server**

Run: `npm run dev -- --port 5173`

Expected: Vite serves at `http://127.0.0.1:5173/`.

- [ ] **Step 2: Inspect generated HTML output**

Run: `npm run build` and inspect `dist/index.html`.

Expected: root app shell is present; sitemap and robots copied into `dist/`.

- [ ] **Step 3: Verify browser page**

Open `http://127.0.0.1:5173/`, confirm first viewport, section flow, links, and mobile layout are readable.

---

## Self-Review

Spec coverage:

- New folder, Vite/React, entity content, Dallas-only location, no public phone/email, LinkedIn/GitHub links, resume-backed roles, open-source and writing sections, schema, sitemap, robots, tests, build, and local server are covered.

Placeholder scan:

- The plan contains no TBD, TODO, or unspecified implementation tasks.

Type consistency:

- `profile`, `roles`, `projects`, `writing`, `proofStack`, and `buildProfilePageSchema` are the stable names used across tasks.
