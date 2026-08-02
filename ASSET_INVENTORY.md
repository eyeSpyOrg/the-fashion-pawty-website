# Fashion PAWty — Extracted Brand Assets

All logos and patterns pulled from your two AI files, converted to clean SVG
(true vector — crisp at any size), and given meaningful names.

## Logos (public/assets/logos/)
| File | What it is |
|---|---|
| logo-full-color.svg | Dog-in-sunglasses + "FASHION PAWTY" wordmark, full color (stacked) |
| logo-horizontal-color.svg | Full color, horizontal (dog + bowtie + wordmark) — **used as /public/logo.svg** |
| logo-badge-color.svg | Circular badge/lockup version, full color |
| logo-full-black.svg | Stacked logo, all black — **used as /public/logo-high-contrast.svg** |
| logo-full-white.svg | Stacked logo, all white (for dark backgrounds) |
| wordmark-color.svg | "FASHION PAWTY" text only, full color |
| wordmark-black.svg / wordmark-white.svg | Wordmark only, black / white |
| icon-color.svg | Dog-in-sunglasses icon only, full color (great for favicon/social avatar) |
| icon-black.svg / icon-white.svg | Icon only, black / white |

## Patterns (public/assets/patterns/)
The repeating icon motif (guide dog, bones, bowties, glasses, palms, paws) in 8 colorways:
| File | Colorway | Good for |
|---|---|---|
| pattern-fullcolor-light.svg | Multicolor on white | Light section backgrounds |
| pattern-fullcolor-dark.svg | Multicolor on black | Dark hero / footer |
| pattern-teal-light.svg | Teal on white | Subtle light background |
| pattern-gold-light.svg | Gold on white | Subtle light background |
| pattern-teal-on-gold.svg | Teal on gold | Accent band |
| pattern-gold-on-teal.svg | Gold on teal | Accent band |
| pattern-white-on-black.svg | White on black | Dark section |
| pattern-gold-dark.svg | Gold on dark | Dark accent |

## Placement in the repo
- public/logo.svg + public/logo-high-contrast.svg (already set from the above)
- public/assets/logos/ — all logo variants
- public/assets/patterns/ — all pattern colorways
- Keep the original .ai files in /brand-assets/ (editable masters, not web-served)

## Note for the build
Patterns are ~90KB SVG each. Use them as low-opacity CSS backgrounds, never
behind body text (contrast). Claude Code can further optimize or rasterize any
pattern that proves heavy on a given page.
