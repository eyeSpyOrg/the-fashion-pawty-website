# INTEGRATIONS.md — Phase 2: Stripe, HubSpot, GA4, Printify

Read together with CLAUDE.md. Every integration must preserve the Phase 1
guarantees: WCAG 2.2 AA, Lighthouse 90+, and zero secrets in the repo.

---

## 0. The architecture decision (make this first)

This foundation builds to **static HTML**. Static sites cannot hold API
secrets. Each integration therefore uses one of three patterns:

| Pattern | Needs a server? | Use for |
|---|---|---|
| **A. Client-safe embed** | No | GA4, HubSpot tracking + forms, Stripe Payment Links / Buy Buttons |
| **B. Build-time fetch** | No (runs in CI) | Printify product catalog → static pages |
| **C. Server endpoint** | Yes (SSR adapter or serverless fn) | Stripe Checkout Sessions, Printify order creation, webhooks |

**Hosting decides what's possible:**
- **GitHub Pages** = static only → Patterns A + B only.
- **AWS Amplify Hosting** (GitHub-connected, same as eyecosystems.com) =
  supports Astro SSR → all three patterns. **Recommended.** Keep GitHub as
  source of truth; Amplify auto-deploys `main` after the quality gate passes.

Rule of thumb: **stay on Patterns A + B as long as you can.** Every site can
launch Phase 2 with zero servers. Add Pattern C only when you need custom
checkout flows or in-domain Printify ordering.

---

## 1. Stripe (payments / donations)

### Recommended: Payment Links + Buy Buttons (Pattern A)
For donations (Eye Spy Foundation) and simple product sales, Stripe Payment
Links need **no backend, no PCI scope beyond SAQ A, no JS on your page**:

```astro
<!-- A plain link. Fastest page, fully accessible, zero script weight. -->
<a class="btn btn--primary" href="https://donate.stripe.com/XXXX">
  Donate $25
</a>
```

- Create one Payment Link per amount/tier + one "customer chooses amount" link.
- Enable Apple Pay/Google Pay, receipts, and recurring (monthly giving) in the
  Payment Link settings — all no-code.
- Add UTM params to links so GA4/HubSpot attribute the donation source.

### When you outgrow that: Checkout Sessions (Pattern C)
Custom carts, dynamic amounts, or Printify fulfillment need a server endpoint
that creates a Checkout Session with the **secret key** and a webhook handler
that verifies `stripe-signature`. On Amplify: add `@astrojs/node` (or the
Amplify adapter) and create `src/pages/api/checkout.ts` + `api/stripe-webhook.ts`.

### Hard rules
- `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` live ONLY in Amplify/Actions
  env vars. Publishable key (`pk_...`) is the only Stripe string allowed in code.
- Never build a custom card form. Stripe-hosted pages only (Checkout/Payment
  Links) — keeps you in SAQ A and keeps the payment UI accessible (Stripe's
  hosted checkout is WCAG-audited; a DIY form won't be).
- Test mode end-to-end (`4242 4242 4242 4242`) before flipping live keys.
- Nonprofit note: apply for Stripe's discounted nonprofit rate for the
  Foundation before processing live donations.

---

## 2. HubSpot (marketing / CRM)

Two separate concerns — track and capture:

### Tracking script (Pattern A, consent-gated)
The HubSpot tracking code is a cookie-setting analytics script → it loads only
after consent, via `Analytics.astro` (already wired). Set the portal ID in
`site.js` → `integrations.hubspotPortalId`.

### Forms: native forms → HubSpot Forms Submission API (Pattern A)
**Do not use the embedded HubSpot form widget.** It injects an iframe/styled
form that fails brand styling, adds ~100KB of JS, and has recurring
accessibility problems. Instead, HubSpot's Forms Submission API accepts POSTs
from the browser with **no secret required** — perfect for static sites:

```
POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

Use the provided `HubSpotForm.astro`: a fully accessible native form
(visible labels, error text wired with aria-describedby, focus management)
that submits to that endpoint and passes the `hutk` tracking cookie so
submissions link to the visitor's HubSpot record.

Setup per site: create the form in HubSpot (Marketing → Forms → set as
"raw HTML/API"), copy the form GUID into the component usage.

### Hard rules
- Private App tokens (`pat-...`) are server-side only — never in front-end
  code. The Submission API above is the only HubSpot call allowed client-side.
- Every form field name must match the HubSpot property internal name exactly.

---

## 3. Google Analytics 4 (Pattern A, consent-gated)

- GA4 loads through `Analytics.astro` **only after consent**, with
  **Google Consent Mode v2** defaults set to `denied` before any tag loads
  (required for EU traffic, harmless otherwise).
- Set the measurement ID in `site.js` → `integrations.ga4Id`.
- The script is injected `async` post-consent, so Lighthouse performance is
  unaffected for the first paint and unconsented visitors load zero analytics.
- Track meaningful events, not everything: `donate_click`, `form_submit`
  (also forwarded from HubSpotForm), `outbound_shop_click`.
- Link GA4 ↔ Google Search Console after launch.

---

## 4. Printify (products)

Decision matrix — pick per site:

| Option | Effort | Where checkout happens | When to choose |
|---|---|---|---|
| **Pop-Up Store on subdomain** (shop.thefashionpawty.com) | ~1 hour, zero code | Printify-hosted | Launch fast; catalog changes often; you accept their checkout UX |
| **Build-time catalog + Payment Links** (Patterns B+A) | Medium | Stripe | Products on YOUR domain (SEO + brand), stable catalog, manual fulfillment trigger |
| **Full API integration** (Pattern C) | High | Stripe → auto Printify order | Only when volume justifies it |

### The middle path (recommended when you want products in-domain)
1. **Build time:** a script fetches the catalog from the Printify API
   (`PRINTIFY_API_TOKEN` as a CI env var — it never reaches the browser) and
   writes `src/data/products.json`.
2. Astro renders static product pages from that JSON — each gets `Product`
   schema (price, availability, image) for rich results, which a Printify
   pop-up subdomain can never give you.
3. Each product's buy button is a Stripe Payment Link.
4. **Sync:** a Printify `product:updated` webhook (or a manual "Run workflow"
   button) triggers the GitHub Action → rebuild → Amplify deploy. Catalog
   stays fresh without a server.
5. Fulfillment starts manual (Stripe email → place Printify order); automate
   with a webhook function only if order volume demands it.

---

## 5. Consent banner (required by GA4 + HubSpot)

`ConsentBanner.astro` (provided) is a keyboard-operable, focus-managed,
non-blocking banner: Accept / Decline, persisted choice, and it fires the
`a11y-consent-granted` event that `Analytics.astro` listens for. Declined =
zero third-party scripts load. Revisitable via the "Privacy choices" footer link.

---

## 6. GitHub → production pipeline

- **Branch protection on `main`:** PRs only, quality gate (build + html-validate
  + Pa11y + Lighthouse budgets) required to merge.
- **Amplify** connected to the repo, auto-deploy on `main`. Preview
  deployments on PRs for visual/manual a11y review.
- **Secrets** (`STRIPE_SECRET_KEY`, `PRINTIFY_API_TOKEN`, HubSpot private app
  token if ever needed) live in GitHub Actions secrets + Amplify env vars.
  `.env` is gitignored; `.env.example` documents every variable with no values.
- Enable GitHub **secret scanning + push protection** on all three repos —
  it blocks a Stripe key from ever being committed.

---

## Phase 2 definition of done (per integration)

- [ ] No secret appears in the repo (`git grep -iE "sk_live|pat-|pk_live"` clean; pk_live allowed only in site.js/env)
- [ ] Lighthouse performance still ≥90 with scripts consent-gated
- [ ] Keyboard-only pass through consent banner, forms, and checkout entry points
- [ ] Form errors announced (aria-describedby + focus moved to first error)
- [ ] GA4 DebugView shows events; HubSpot contact created from a test submission
- [ ] Stripe test-mode transaction completed end-to-end before live keys
- [ ] Product pages (if any) pass the Rich Results test for Product schema
