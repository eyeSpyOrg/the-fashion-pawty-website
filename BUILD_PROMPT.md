# Claude Code Build Prompt — The Fashion PAWty

Paste everything below the line into Claude Code from the repo root,
AFTER the file placement (see SETUP.md) is done.

---

Read CLAUDE.md, INTEGRATIONS.md, BRAND.md, and PAGE_COPY.md before doing anything.
BRAND.md is the source of truth for design values; PAGE_COPY.md is the source of
truth for words. Where BRAND.md conflicts with CLAUDE.md standards, CLAUDE.md wins.

Build the full Fashion PAWty site. Work in this order and run the test suite at the end.

## 1. Configuration
Fill `src/config/site.js` from BRAND.md § 2.3 exactly:
- url: https://thefashionpawty.com (no www)
- integrations.ga4Id: "G-G5XJTT1PX2"
- integrations.hubspotPortalId: "" (leave empty for now)
- nav + footerNav per BRAND.md § 2.4

## 2. Design tokens
Apply BRAND.md § 2.1 colors and § 2.2 fonts to `src/styles/global.css`.
- Self-host Baloo 2 (600,700) for headings and Nunito Sans (400,600,700) for body
  via @fontsource, font-display: swap.
- After applying, WRITE A SCRIPT that computes the real WCAG contrast ratio for
  every pair in § 2.1 and prove they pass (text ≥4.5:1, UI/borders ≥3:1). Print
  the table. Do not eyeball it.
- Gold #E0A82E is a HIGHLIGHT ONLY — never text or button-text color.

## 3. Brand assets (already in place — see ASSET_INVENTORY.md)
- Favicon: generate `public/favicon.svg` from `public/assets/logos/icon-color.svg`
  (dog-in-sunglasses icon). Replace the template placeholder.
- Header logo: `public/logo.svg` (horizontal color). Must have real alt text.
- High-contrast theme logo: `public/logo-high-contrast.svg`.
- OG image: create `public/og-default.jpg` at exactly 1200x630, <300KB, using the
  logo on brand background. Verify dimensions after creating.
- Patterns (`public/assets/patterns/`) — the signature motif. Use as subtle CSS
  backgrounds at LOW OPACITY, never behind body text:
  - `pattern-fullcolor-light.svg` → homepage hero background (very low opacity)
  - `pattern-teal-light.svg` → alternating light section bands
  - `pattern-gold-on-teal.svg` → footer or a dark accent band
  - `pattern-white-on-black.svg` → any dark section
  Each pattern SVG is ~90KB; if any page's Lighthouse performance drops below 90,
  rasterize/optimize that pattern and report what you changed.

## 4. Pages
Build every page in BRAND.md § 2.4 using BaseLayout, with copy from PAGE_COPY.md:
/, /tickets, /sponsors, /beneficiaries, /schedule, /venue, /merch, /faq, /contact,
plus the template's /accessibility, /privacy, /404.
- Exactly one h1 per page; headings never skip levels.
- Homepage: YouTube sizzle reel section = "coming soon" placeholder block for now
  (no embed yet, but leave the accessible-embed structure ready to drop the URL in).
- /sponsors: build the six real tiers from BRAND.md § 2.9 as cards with prices.
  Each "Sponsor" button href="https://stripe.com" for now — add a clear
  `{/* TODO: replace with real Stripe Payment Link */}` comment on each so they're
  easy to find later. Photo Booth renders as a thank-you card (Lions Club of
  Jacksonville Beach), NOT purchasable.
- /tickets: $30 PAWty Pass, button href="https://stripe.com" with the same TODO.
- /merch: links out to https://shop.thefashionpawty.com
- /schedule: the six confirmed run-of-show blocks from BRAND.md.

## 5. Schema
- Event schema on /, /tickets, /schedule, /venue: startDate 2026-09-26T16:00:00-04:00,
  endDate 2026-09-26T19:00:00-04:00, location Happy Brew + full PostalAddress,
  offers price 30 USD with the ticket URL, organizer Eye Spy Foundation.
- FAQPage on /faq and the homepage FAQ section (via the FAQ component so visible
  content and schema come from the same array).
- Skip VideoObject until the real YouTube URL exists — note that in a TODO.
- Extract all JSON-LD from dist/ and validate it parses and has required properties.

## 6. Voice check (hard requirement)
Grep the built output. These must return ZERO matches in site copy:
`impaired`, `visually impaired`, `handicapped`, `the blind`, `BVI`, `low-vision`
(hyphenated). Correct term is "blind and low vision community" — no hyphen.
Report the grep results.

## 7. Test and report
Run: `npm run build`, `npx html-validate "dist/**/*.html"`, `npm run test:a11y`,
`npm run test:lighthouse`. Report actual numbers. Anything you could not run in
this environment, say so explicitly — do not assume it passed.

Then give me a short list of every TODO/placeholder left in the codebase.
