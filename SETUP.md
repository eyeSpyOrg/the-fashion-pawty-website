# Setup — thefashionpawty repo

## 1. Final file/folder layout

```
thefashionpawty/
├── BRAND.md                        ← rename BRAND_FashionPAWty.md
├── PAGE_COPY.md                    ← rename PAGE_COPY_FashionPAWty.md
├── ASSET_INVENTORY.md              ← from the asset bundle
├── netlify.toml                    ← NEW (provided)
├── CLAUDE.md                       ← from template
├── INTEGRATIONS.md                 ← from template
├── BRAND_TEMPLATE.md               ← from template (harmless to keep)
├── README.md, package.json, astro.config.mjs, tsconfig.json, .gitignore
├── .env.example
├── brand-assets/                   ← NOT web-served: editable masters
│   ├── fashionpawty-logos.ai
│   └── TheFashionPAWty-Patterns.ai
├── .github/workflows/quality.yml
├── tests/
├── src/
│   ├── components/  layouts/  pages/  styles/  config/
└── public/
    ├── favicon.svg                 ← Claude Code regenerates from icon-color.svg
    ├── logo.svg                    ← horizontal color  (from bundle)
    ├── logo-high-contrast.svg      ← full black        (from bundle)
    ├── og-default.jpg              ← Claude Code creates (1200x630)
    ├── robots.txt, llms.txt
    └── assets/
        ├── logos/                  ← 11 SVGs from bundle
        └── patterns/               ← 8 SVGs from bundle
```

## 2. Where the SVGs go (short answer)

Unzip the asset bundle and copy its folders straight over:
- `public/logo.svg` and `public/logo-high-contrast.svg` → repo `public/` root
- `public/assets/logos/*.svg` (all 11) → repo `public/assets/logos/`
- `public/assets/patterns/*.svg` (all 8) → repo `public/assets/patterns/`
- `brand-assets/*.ai` → repo `brand-assets/` (top level, NOT inside public/)
- `ASSET_INVENTORY.md` → repo root

Terminal shortcut from the unzipped bundle directory:
```bash
cp -R public/. /path/to/thefashionpawty/public/
mkdir -p /path/to/thefashionpawty/brand-assets
cp brand-assets/*.ai /path/to/thefashionpawty/brand-assets/
cp ASSET_INVENTORY.md /path/to/thefashionpawty/
```

## 3. GA4 — do NOT paste the gtag snippet

Your foundation loads GA4 consent-gated through `Analytics.astro`. Pasting the raw
snippet would bypass consent and hurt Lighthouse. Only the ID is needed:

```js
// src/config/site.js
integrations: {
  ga4Id: 'G-G5XJTT1PX2',
  hubspotPortalId: '',
  stripePublishableKey: '',
}
```
(Claude Code does this in step 1 of the build prompt.)

## 4. Netlify connection (do this while the build runs)

1. Netlify → Add new site → Import an existing project → GitHub → pick `thefashionpawty`
2. It auto-detects Astro. Confirm: build command `npm run build`, publish dir `dist`.
   (`netlify.toml` pins these anyway.)
3. Deploy. You'll get a `random-name.netlify.app` URL immediately.
4. Domain: Site settings → Domains → Add custom domain → `thefashionpawty.com`
   - If DNS is at your registrar: add Netlify's records (they show you exactly what).
   - Simplest path: point the domain's nameservers at Netlify DNS.
   - Set the primary domain to the non-www version (`thefashionpawty.com`) so it
     matches the canonical URL in site.js. Netlify auto-redirects www → apex.
5. HTTPS provisions automatically once DNS resolves.
6. Optional: Site settings → Build & deploy → lock the production branch to `main`.

## 5. After the first successful build
- [ ] Replace the Stripe placeholder links (grep for `stripe.com` TODOs)
- [ ] Add the YouTube sizzle reel URL + VideoObject schema
- [ ] Verify GA4 realtime shows a hit (after accepting consent on the live site)
- [ ] Google Search Console: verify domain, submit `sitemap-index.xml`
- [ ] Rich Results Test on `/` (Event) and `/faq` (FAQPage)
- [ ] Manual passes: keyboard-only, 200% zoom, WAVE extension
