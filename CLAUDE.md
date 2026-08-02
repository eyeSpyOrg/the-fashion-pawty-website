# CLAUDE.md — Website Build Standards

This file is read by Claude (Claude Code, Cowork, or chat) at the start of every
session in this repo. **Every rule below is non-negotiable.** If a request would
violate one, flag it and propose a compliant alternative.

## The stack

Astro 5 + Tailwind 4 (via `@tailwindcss/vite`), static output, TypeScript strict.
All site identity lives in `src/config/site.js` — never hardcode the org name,
URL, nav, or contact info anywhere else.

## Accessibility — WCAG 2.2 AA minimum

1. **Every page uses `BaseLayout.astro`.** It provides the skip link, landmarks,
   `<main id="main-content">`, SEO meta, Organization schema, and the
   Accessibility Bar. Never build a page outside it.
2. **Exactly one `<h1>` per page.** Headings descend in order (h1→h2→h3);
   never skip levels going down. Never choose a heading tag for its size —
   style with CSS.
3. **Color contrast:** ≥4.5:1 for normal text, ≥3:1 for large text (24px+/18.7px bold)
   and UI components/borders. All tokens in `global.css` already comply —
   when rebranding, verify every new pair with a contrast checker before committing.
4. **Never convey information by color alone.** Pair color with text,
   underline, icon, or weight.
5. **Focus:** never `outline: none` without an equal-or-better replacement.
   The global `:focus-visible` rule is the floor.
6. **Targets:** interactive elements ≥44×44px (spec minimum is 24px; we use 44).
7. **Images:** every `<img>` has `alt`. Meaningful images get a description of
   function/content; decorative images get `alt=""`. Never "image of…".
8. **Forms:** every input has a visible `<label>` (placeholder is not a label).
   Errors use `aria-invalid="true"`, text that names the fix, and
   `aria-describedby` linking the input to its error.
9. **Motion:** any animation must respect `prefers-reduced-motion` (global CSS
   already handles this) and the a11y-bar override. No autoplaying video with
   sound, no flashing >3 times/second, ever.
10. **Viewport:** never add `maximum-scale` or `user-scalable=no`.
11. **Custom widgets:** follow the WAI-ARIA Authoring Practices pattern exactly
    (https://www.w3.org/WAI/ARIA/apg/patterns/). Prefer native elements
    (`<details>`, `<dialog>`, `<button>`) over ARIA re-implementations.
    First rule of ARIA: don't use ARIA if HTML can do it.
12. **Language:** `lang` on `<html>`; `lang` on any inline foreign-language text.
13. Use "blind and low-vision" — the abbreviation "BVI" is prohibited in all copy.

## SEO

- **Title:** ≤60 chars before the template suffix, unique per page, keyword near front.
- **Meta description:** 145–160 chars, primary keyword in the first 50, written
  as a compelling answer (pulls double duty for AEO).
- **One canonical per page** — handled by `SEO.astro`; never add a second.
- **URLs:** lowercase, hyphenated, trailing slash, no dates unless news.
- Internal links use descriptive anchor text — never "click here" / "read more"
  without context.
- New public pages are auto-included in the sitemap; thin/utility pages get
  `noindex={true}` on BaseLayout.
- **NAP consistency:** name/address/phone render only from `site.js` so they
  can never drift between footer, contact page, and schema.
- Before launch: confirm NO stray `noindex` on indexable pages
  (`grep -r "noindex" src/pages`), robots.txt Sitemap URL updated, and the
  domain verified in Google Search Console.

## Structured data (schema.org, Google guidelines)

- All JSON-LD renders through `src/components/schema/JsonLd.astro`.
- `OrganizationSchema` (Organization + WebSite @graph) ships on every page via
  BaseLayout. Set `orgType` in site.js (`NGO` for nonprofits, `LocalBusiness`
  when there's a physical service location).
- Use `BreadcrumbSchema` only alongside visible `Breadcrumbs`; `FAQSchema` only
  via the `FAQ` component (schema and visible content generate from the same
  array — Google requires markup to match visible content).
- Add per-page types when relevant: `Article` (posts), `Event`, `Product`,
  `Service`, `VideoObject`. Reference: https://developers.google.com/search/docs/appearance/structured-data
- Validate any new schema at https://search.google.com/test/rich-results
  before merging.

## AEO (answer engine optimization)

- **Answer-first writing:** the first paragraph under any heading directly
  answers the heading's implied question in 1–3 sentences, then elaborates.
- Every site gets an FAQ section/page using the `FAQ` component with
  self-contained answers that make sense out of context.
- Maintain `/public/llms.txt` with key pages and facts.
- Headings phrased as questions where natural ("How does verification work?")
  — they map to voice/AI queries.
- Keep robots.txt permissive to AI crawlers unless the client decides otherwise.

## Performance (Lighthouse 90+)

- Images: modern formats, explicit `width`/`height` (prevents layout shift),
  `loading="lazy"` below the fold, hero images `fetchpriority="high"`.
- Fonts: self-host, `font-display: swap`, preload only the primary weight.
- No client-side JS frameworks for static content — Astro islands only where
  interactivity is real.
- Third-party scripts (analytics, HubSpot) load with `defer`/`async` or
  after consent; never render-blocking.

## Definition of done — run before every deploy

```bash
npm run build          # must succeed with zero warnings
npm run test:a11y      # Pa11y: axe + HTML_CS, WCAG2AA, zero errors
npm run test:lighthouse # a11y ≥95, SEO ≥90, best practices ≥90
```

Plus manual checks: full keyboard-only pass (tab through every page —
can you see focus and reach everything?), one screen-reader pass
(VoiceOver/NVDA) on new templates, WAVE browser extension showing 0 errors,
and 200% browser zoom with no loss of content or function.

## New-site checklist (cloning this foundation)

1. `cp -r` the foundation → new repo, `npm install`
2. Edit `src/config/site.js` completely (identity, orgType, nav, socials)
3. Replace `favicon.svg`, add `og-default.jpg` (1200×630) and `logo.svg`
4. Update `public/robots.txt` sitemap URL + `public/llms.txt`
5. Rebrand tokens in `global.css` — verify every contrast pair
6. Write the accessibility statement honestly for this project
7. Run the full Definition of Done
8. Post-launch: Search Console verification, submit sitemap, rich-results test
   on one page of each schema type

## Phase 2 — integrations (Stripe, HubSpot, GA4, Printify)

Full spec: `INTEGRATIONS.md`. Non-negotiables when working on integrations:

1. **No secrets in the repo, ever.** Secret keys/tokens live in GitHub Actions
   secrets and Amplify env vars only. `.env` is gitignored; `.env.example`
   documents variables with empty values.
2. **Third-party scripts load only after consent** through `Analytics.astro` +
   `ConsentBanner.astro`. Never paste a gtag/HubSpot snippet directly into a page.
3. **Never build a custom credit-card form.** Stripe-hosted surfaces only
   (Payment Links, Buy Buttons, Checkout).
4. **Never embed the HubSpot form widget.** Use `HubSpotForm.astro`
   (native accessible form → Forms Submission API).
5. Prefer serverless-free patterns (Payment Links, build-time Printify catalog
   fetch, client-safe Forms API) until a requirement genuinely needs a server
   endpoint — then use Astro server routes on Amplify, never a static host.
6. Any new third-party addition must keep Lighthouse performance ≥90 and pass
   a keyboard-only test of its UI before merge.
