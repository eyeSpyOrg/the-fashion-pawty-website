# Photo Checklist — Fashion PAWty 2026 Gallery

This guide is for the team member adding real photos after the event.

---

## Step 1 — File naming

All files live in: `/public/images/gallery/2026/`

Use the exact filenames already defined in `src/data/gallery2026.js`.
Each section has slots pre-numbered (e.g. `runway-show-01.jpg`).
Add more slots by copying an entry in the data file and incrementing the number.

**Naming rules (already applied to the template slots):**
- Lowercase, hyphenated, no spaces or special characters
- Descriptive slug + sequential number: `runway-show-01.jpg`
- Section prefixes:
  - `runway-show-XX.jpg`
  - `peoples-choice-XX.jpg`
  - `dogs-and-owners-XX.jpg`
  - `behind-the-scenes-XX.jpg`
  - `sponsors-and-venue-XX.jpg`

---

## Step 2 — WebP conversion

Every JPG needs a matching WebP sibling in the same folder.
The `<picture>` element serves WebP to browsers that support it (all modern ones)
and falls back to JPG automatically.

**Convert all JPGs at once (requires `cwebp` from `libwebp`):**

```bash
for f in public/images/gallery/2026/*.jpg; do
  cwebp -q 80 "$f" -o "${f%.jpg}.webp"
done
```

Or use [Squoosh](https://squoosh.app) for individual files (free, browser-based).

Target file sizes: under 200 KB for thumbnails, under 1 MB for full-size.

---

## Step 3 — Image dimensions

Measure actual pixel dimensions of each exported image.
The `width` and `height` attributes in the data file prevent layout shift (CLS).

Standard export size from a phone camera is fine (e.g. 4032×3024).
The grid renders at `minmax(280px, 1fr)` so anything above 1200×800 is plenty.

Recommended: export at **1600×1067** (3:2 ratio) for consistent grid cropping.

---

## Step 4 — Add photos to the data file

Open `src/data/gallery2026.js` and for each photo:

1. Set `src` from `null` to the filename (e.g. `'runway-show-01.jpg'`).
2. Set `width` and `height` to the actual pixel dimensions.
3. Write a descriptive `alt` text and remove the `[NEEDS REVIEW]` prefix.

**Good alt text:**
- Describes what's happening, not just what's in the frame
- Names the subject if visible and relevant ("A golden retriever in a sequined tuxedo…")
- Never starts with "Image of…" or "Photo of…"
- Never just repeats the filename

**Before:**
```js
{ src: null, filename: 'runway-show-01.jpg', width: 1200, height: 800,
  caption: 'Runway Show — Photo 1',
  alt: '[NEEDS REVIEW] A dog in costume walking the Fashion PAWty 2026 runway' }
```

**After:**
```js
{ src: 'runway-show-01.jpg', filename: 'runway-show-01.jpg', width: 4032, height: 2688,
  caption: 'Runway Show — Best in Show winner',
  alt: 'A golden retriever in a sparkly tuxedo jacket accepts the Best in Show ribbon on the Fashion PAWty runway' }
```

Note: `src` and `filename` will be identical for now. The `src` field being non-null
is what switches the card from placeholder to live image mode.

---

## Step 5 — Update the JSON-LD block

The JSON-LD schema auto-generates from `gallery2026.js`, so no manual editing needed.
Once you set real `src` values and alt text in the data file, the schema updates automatically on next build.

Validate after launch: https://search.google.com/test/rich-results

---

## Step 6 — OG image for social sharing

Create a 1200×630 OG image named `og-gallery-2026.jpg` and place it at:

```
/public/images/gallery/2026/og-gallery-2026.jpg
```

This is the preview card image when someone shares the gallery page on social media.
Use a strong hero shot from the runway — ideally the best-dressed dog, full color.

---

## Step 7 — Build and verify

```bash
npm run build
```

Must complete with zero warnings. Then run:

```bash
npm run test:a11y
npm run test:lighthouse
```

After deploy, check:
- All images load (no broken `src` paths)
- Lightbox opens and closes with keyboard (Tab, Enter, Escape)
- Screen reader announces photo alt text in lightbox
- JSON-LD passes rich results test

---

## Step 8 — Alt text review pass

Before launch, do a full alt-text review:
- Search the built HTML for `[NEEDS REVIEW]` — there should be zero results.
- Have someone unfamiliar with the photos read alt text aloud; can they picture the image?

---

## CMS note (if porting to Squarespace / Webflow / etc.)

The current implementation is static Astro. If the site moves to a CMS:

- **Squarespace / Webflow galleries:** Replace the Astro template with the CMS's
  native gallery block. The brand colors, grid CSS, and placeholder styles can be
  copy-pasted into the CMS's custom CSS panel. JSON-LD must be manually embedded
  as a Code Block.

- **PhotoSwipe:** Works in any environment. Load it via CDN `<script>` tag in the
  CMS's custom HTML/head section. Initialize with the same options in the Code Block.

- **Alt text:** Must be entered per-photo in whatever CMS image uploader is used.
  Do not skip it — it's a legal accessibility requirement for a nonprofit site.
