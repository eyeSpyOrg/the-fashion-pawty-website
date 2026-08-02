# A11Y Web Foundation

An accessibility-first, SEO/AEO-optimized website starter. Clone it for every
new build (EyeSpyFoundation.org, EyeSpy.org, The Fashion Pawty, …) and start
from a base that is already WCAG 2.2 AA structured, schema-complete, and gated
by automated tests targeting WAVE 0 errors and Lighthouse 90+.

## What's inside

| Layer | What you get |
|---|---|
| **Accessibility** | Skip link, landmarks, focus-visible system, 44px targets, reduced-motion support, contrast-safe tokens, accessible mobile nav, and a floating Accessibility Bar (text size, high contrast, text spacing, reduce motion, underline links) with pre-paint persisted preferences |
| **SEO** | `SEO.astro` (title template, meta description, canonical, OG, Twitter), auto sitemap, robots.txt, clean 404, noindex control |
| **Schema** | Organization + WebSite @graph site-wide; drop-in Breadcrumb, FAQ, and Article components where visible content and JSON-LD generate from the same data |
| **AEO** | Answer-first page patterns, FAQ component with FAQPage schema, `llms.txt` |
| **Testing** | Pa11y CI (axe + HTML_CS, WCAG2AA), Lighthouse CI with hard budgets (a11y ≥95, SEO ≥90), GitHub Actions quality gate on every push/PR |
| **System** | `CLAUDE.md` — build standards Claude follows automatically in every session |

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

## Per-project setup

Everything site-specific lives in **`src/config/site.js`** — identity, schema
data, navigation, socials. Follow the "New-site checklist" at the bottom of
`CLAUDE.md`.

## Quality gate

```bash
npm run build
npm run test:a11y        # requires: npx astro preview --port 4321 (separate terminal)
npm run test:lighthouse
```

CI runs the same gate on every push — regressions can't ship silently.

## Structure

```
src/
  config/site.js           ← single source of truth (edit this per project)
  layouts/BaseLayout.astro ← every page uses this
  components/
    SEO.astro, SkipLink, Header, Footer, AccessibilityBar, Breadcrumbs, FAQ
    schema/                ← JsonLd, Organization, Breadcrumb, FAQ, Article
  pages/                   ← index, about, accessibility statement, 404
  styles/global.css        ← WCAG-enforcing tokens & defaults
public/                    ← robots.txt, llms.txt, favicon
tests/                     ← pa11yci.json, lighthouserc.json
.github/workflows/         ← quality gate
CLAUDE.md                  ← the standards system
```

## References

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/patterns/
- Google structured data: https://developers.google.com/search/docs/appearance/structured-data
- llms.txt: https://llmstxt.org
