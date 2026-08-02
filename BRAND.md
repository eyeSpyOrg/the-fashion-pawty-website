# BRAND.md — The Fashion PAWty

> One file, two halves. Part 1 is brand strategy (who we are, how we sound).
> Part 2 is the web implementation spec — every field maps directly to a
> variable in `src/styles/global.css` or `src/config/site.js`, so Claude can
> apply the brand mechanically and verify it against WCAG.
>
> This file is read alongside CLAUDE.md in every session. Where BRAND.md and
> CLAUDE.md conflict (e.g., a brand color pair below 4.5:1 contrast),
> **CLAUDE.md wins** — adjust the brand value, never the standard.
>
> Palette derived from the official logo (Jaguars-style teal/gold/black);
> every pair is WCAG-verified — see 2.1.

---

## Part 1 — Brand Core

### Overview
The Fashion PAWty is a playful, family-friendly dog fashion show and community
celebration in Jacksonville, Florida — "A Navigation Celebration." Hosted by the
Eye Spy Foundation, the afternoon of mocktails, music, games, merch, and a doggie
fashion show down the orange carpet raises funds for the blind and low vision
community and for Leader Dogs for the Blind. Guide dogs — the working dogs at the
heart of the mission — are woven into the brand and the event itself.

### Category
- Community fundraising celebration / dog fashion show event.

### One-Sentence Description
The Fashion PAWty is a Jacksonville dog fashion show and community celebration
hosted by the Eye Spy Foundation, benefiting the blind and low vision community
and Leader Dogs for the Blind.

### Primary Tagline
**A Navigation Celebration**

### Secondary Sayings (sprinkle, don't overuse)
- Let's PAWty
- Paws for Purpose — (the moment a handler and dog pause together on the runway)
- Style. Paws. Purpose.

### Homepage Headline
Strut for a More Accessible World

### Homepage Subheadline
Join The Fashion PAWty on Saturday, September 26 at Happy Brew for a doggie
fashion show down the orange carpet, mocktails, games, and music — all benefiting
the blind and low vision community.

### Mission
To turn a joyful, dog-centered community celebration into meaningful support for
accessibility, guide dogs, and the blind and low vision community.

### Fundraising Goal
$25,000 — framed positively ("help us reach $25,000 for the blind and low vision
community"), never as a guilt-driven ask.

### The Event (feeds Event schema + pages)
- **What:** "A Navigation Celebration" — doggie fashion show on the orange carpet
  (lined with tailgate chairs), plus mocktails, games, music, and merch.
- **When:** Saturday, September 26, 2026, 4:00–7:00 PM ET.
- **Where:** Happy Brew, 3200 Hendricks Ave, Jacksonville, FL 32207.
- **Benefiting:** Eye Spy Foundation and Leader Dogs for the Blind (a portion of
  proceeds to Leader Dogs; Eye Spy is sponsoring one Leader Dogs puppy).
- **Tickets:** $30 — includes entry to the show, food, and mocktails.
- **Marketing kickoff:** August 1, 2026.

### Run of Show (confirmed — feeds /schedule + Event schema sub-events)
- **4:00 PM — PAWty Kickoff:** Doors open; mocktails, vendors, games, photo ops.
- **4:30 PM — Live Music:** Settle in for the soundtrack to the celebration.
- **5:15 PM — Mission Moment:** Short spotlight on Eye Spy Foundation & Leader Dogs.
- **5:30 PM — Runway Show:** Four-legged models strut the orange carpet for independence.
- **6:45 PM — Best in Show Awards:** Crowd favorites, applause, final celebration.
- **7:00 PM — PAWty Concludes:** Thank you for supporting accessibility, mobility, and freedom.

### How Eye Spy Welcomes People (voice anchor)
Eye Spy greets everyone with a hug or a handshake — warm, personal, human. That
spirit should come through on the site: welcoming, never clinical. Eye Spy helps
the blind and low vision community navigate community resources so they can live
a better low vision lifestyle. ("Low vision lifestyle" is an intentional
signature phrase — use it.)

### Audience
- Families, dog lovers, and local supporters who want a fun afternoon with a
  clear purpose, easy $30 ticketing, and a welcoming, accessible experience.
- Sponsors, vendors, and community partners who want visible local impact, brand
  exposure through a named party area, and a simple way to join the mission.

### Voice & Tone
- Voice adjectives: playful, welcoming, mission-driven, bright, clear — never corporate.
- We say: **blind and low vision community**; low vision lifestyle; accessibility;
  guide dogs; service dogs; navigate/navigation; sponsors; community partners;
  dog lovers; families.
- **We NEVER say** (hard rule — grep before deploy): impaired, visually impaired,
  handicapped, "the blind," disabled as a noun, suffering from, pity language,
  or the abbreviation "BVI." Replace with "blind and low vision community."
- Reading level: conversational, 7th–8th grade.

### What It Is Not
Not a luxury fashion brand site, a generic pet marketplace, or a cluttered
fundraising portal. Never overly cute, inaccessible, visually noisy, guilt-driven,
or vague about what the event is, who it helps, and how to join.

### Key Facts (feeds llms.txt + FAQ schema)
- Event brand: The Fashion PAWty — "A Navigation Celebration"
- Presented by: Eye Spy Foundation (nonprofit)
- Also benefiting: Leader Dogs for the Blind
- Location: Happy Brew, 3200 Hendricks Ave, Jacksonville, FL 32207
- Date/time: Saturday, September 26, 2026, 4:00–7:00 PM ET
- Tickets: $30 (entry + food + mocktails), via Eye Spy Stripe
- Goal: raise $25,000
- Contact: team@eyespy.org, (844) 222-8848
- Merch: shop.thefashionpawty.com (Printify, live)

---

## Part 2 — Web Implementation Spec

### 2.1 Color tokens → `global.css`
Derived from the official logo. **All pairs WCAG-verified** (text ≥4.5:1,
UI/borders ≥3:1) against the warm-white background.

| Token | Hex | Role | Verified |
|---|---|---|---|
| `--color-bg` | `#FBFAF7` | Page background (warm white) | — |
| `--color-surface` | `#FFFFFF` | Cards, panels, footer | — |
| `--color-text` | `#141414` | Body text (wordmark black) | 17.65:1 ✓ |
| `--color-text-muted` | `#4A4A4A` | Secondary text | 8.49:1 ✓ |
| `--color-accent` | `#0E5C6E` | Links, buttons (deep teal) | 7.25:1 ✓; white-on-accent 7.57:1 ✓ |
| `--color-accent-hover` | `#0A4653` | Hover state | 9.99:1 ✓ |
| `--color-focus` | `#B47800` | Focus ring (deep gold) | 3.58:1 ✓ |
| `--color-border` | `#828F98` | Borders, dividers | 3.18:1 ✓ |

**Brand color usage rules:**
- **Teal `#0E5C6E`** = primary action color (links, buttons).
- **Gold is a highlight only.** The bright logo gold `#E0A82E` (the paw) is 2.05:1
  on white — MUST NOT be text or button-text color. Use it for the orange-carpet
  motif, dividers, icon fills, decorative accents; use `#B47800` when gold must
  carry a focus ring.
- Black + warm white + teal carry readable structure; gold + the icon pattern
  (bones, bowties, glasses, paws, palms) carry personality.
- High-contrast theme (a11y bar): keep foundation defaults — they exceed all ratios.

### 2.2 Typography → `global.css`
| Slot | Typeface | Weights | Source |
|---|---|---|---|
| Display (headings) | Baloo 2 | 600, 700 | @fontsource/baloo-2 |
| Body | Nunito Sans | 400, 600, 700 | @fontsource/nunito-sans |

- Self-host via `@fontsource/*`, `font-display: swap`. Max 2 families, ≤4 weights.
- Baloo 2 = rounded, fun, dog-friendly headings; Nunito Sans = highly readable body.

### 2.3 Identity → `site.js`
| Field | Value |
|---|---|
| `name` | The Fashion PAWty |
| `legalName` | Eye Spy Foundation |
| `url` | https://thefashionpawty.com |
| `titleTemplate` | `%s \| The Fashion PAWty` |
| `description` | The Fashion PAWty is a Jacksonville dog fashion show on Sep 26 at Happy Brew, benefiting the blind and low vision community and Leader Dogs. |
| `orgType` | Organization (event carried by Event schema, see 2.7) |
| `email` / `telephone` | team@eyespy.org / +1-844-222-8848 |
| `address` | Happy Brew, 3200 Hendricks Ave, Jacksonville, FL 32207, US |
| `socials` | Instagram @eyespyorg · Facebook: Eye Spy Foundation |

### 2.4 Navigation & pages
| Nav label | Route | Purpose |
|---|---|---|
| Home | / | Sizzle reel (YouTube), event overview, $30 ticket CTA, mission, $25K goal |
| Tickets | /tickets | $30 ticket (entry + food + mocktails) → Eye Spy Stripe pay button |
| Sponsors | /sponsors | Named party areas to sponsor (see 2.9); pay buttons when priced |
| Beneficiaries | /beneficiaries | Eye Spy Foundation + Leader Dogs for the Blind |
| Schedule | /schedule | Run of show, 4–7 PM (confirmed — see § Run of Show) |
| Venue | /venue | Happy Brew — address, map, parking, accessibility |
| Merch | /merch | Links out to shop.thefashionpawty.com (Printify, live) |
| FAQ | /faq | Tickets, dogs, parking, accessibility, timing, what's included |
| Contact | /contact | team@eyespy.org + inquiry form |

Footer nav: Accessibility Statement, Privacy, Contact.

### 2.5 Imagery & logo
- Logo: `/public/logo.svg` (full color) + `/public/logo-high-contrast.svg` (the
  black-and-white version) for the high-contrast theme.
- Icon pattern (paws, bones, bowties, glasses, palms): decorative background motif,
  used sparingly, never behind body text.
- OG image: `/public/og-default.jpg`, 1200×630, <300KB (logo banner works).
- **First-year image policy (IMPORTANT):**
  - Use **AI-generated images only for atmosphere and objects** — orange carpet,
    mocktails, paw/bone motifs, abstract festive scenes, the venue vibe.
  - Use **real Eye Spy repository images for any actual people or guide dogs.**
    Do NOT generate AI images of people who appear blind or low vision, or of
    service dogs in vests — for an accessibility nonprofit, fabricated images of
    the community it serves is an authenticity risk. Real people = real photos.
  - Mark all placeholder/AI imagery for replacement with real event photos after Sep 26.
- **Brand asset inventory (received — place in /public/assets/):**
  - `fashionpawty-logos_full-logo-color.png` — dog + wordmark, full color (primary logo)
  - `fashionpawty-logos_wordmark-color.png` — wordmark only, full color
  - Pattern colorways (icon motif: guide dog, bones, bowties, glasses, palms, paws):
    `pattern-fullcolorlight` / `pattern-fullcolordark` / `pattern-tealongold` /
    `pattern-goldonteal` / `pattern-goldlight` / `pattern-teallight` / `pattern-BW`.
    Convert the primary logos to SVG for crisp scaling; export a black-and-white
    logo variant for `logo-high-contrast.svg`. Patterns stay PNG (raster) but
    should be used as CSS backgrounds at low opacity, never behind body text.
  - Confirmed accent gold in assets reads ~#E0A82E (highlight only — see 2.1).
- **Alt-text convention:** describe the dog, outfit, and action. When a service
  dog or guide-dog vest is visible, name it — the vests carry the mission and
  must never be reduced to a generic "dog."

### 2.6 Motion & personality
- Motion level: playful — always behind `prefers-reduced-motion` and the a11y-bar toggle.
- **Signature element:** the "orange carpet" — a gold runway line / dotted trail
  guiding the eye between sections, echoing both the fashion-show runway and the
  navigation/wayfinding theme of the guide-dog mission.

### 2.7 Schema types this site uses
- Organization + WebSite (automatic, site-wide).
- [x] **Event** — on /, /tickets, /schedule, /venue. Include name, startDate
  (2026-09-26T16:00:00-04:00), endDate (…T19:00:00-04:00), eventStatus, location
  (Happy Brew + full PostalAddress), offers (price 30, priceCurrency USD,
  availability, url → ticket link), organizer (Eye Spy Foundation), description.
- [x] **VideoObject** — homepage sizzle reel (name, description, thumbnailUrl,
  uploadDate, embedUrl → YouTube). Embed must not autoplay with sound; captions on.
- [x] **FAQPage** — /faq and the homepage FAQ section.
- [ ] Product — NOT on-site. Merch lives on the Printify subdomain (its own markup).
- [ ] Article — none in phase 1.

### 2.8 Integrations (Phase 2, see INTEGRATIONS.md)
| Integration | Enabled? | Approach |
|---|---|---|
| GA4 | Yes | Measurement ID `G-XXXXXXXXXX` (add real ID), consent-gated |
| HubSpot | Planned | Portal + form GUID for Contact / sponsor inquiry |
| Stripe | Yes | Eye Spy Stripe account. **$30 ticket** = one Payment Link/pay button. **Sponsor areas** = one pay button per priced area (added as prices are set). Stripe-hosted checkout, no server. |
| Printify | Yes | Pop-up store at shop.thefashionpawty.com (live). `/merch` links out. |
| YouTube | Yes | Sizzle reel embed on homepage (privacy-enhanced nocookie domain, no autoplay-with-sound, captions). |

### 2.9 Sponsorship tiers (the /sponsors page)
Real tiers with set prices — each maps to a Stripe pay button on the Eye Spy
account. Two columns: PAW-ty Sponsors (experience areas) and Vendor Sponsors.
Every tier includes: welcome goodie bag, station signage, social media + email
placement, and VIP seating for 2. Frame the page around the $25K goal.

**PAW-ty Sponsor Tiers**
| Tier | Price | Package | Includes |
|---|---|---|---|
| Best in Show | $500 | Gold | Main PAW-ty sponsor on all print + digital assets; Runway (Orange Carpet) sponsor |
| Top Dog | $200 | Silver | Sponsor's choice of one: Music Stage, Mock-Tail Bar, or Chow-Down Station |
| Bark-star | $100 | Bronze | Sponsor's choice of one station: DJ PAWty, Bone Up Station, Photo Booth, Merch Shop, or Sensory Games |

**Vendor Sponsor Tiers**
| Tier | Price | Package | Includes |
|---|---|---|---|
| Dog House | $200 | Gold | BYOT (bring your own tent) + setup on the back lawn to engage with all the PAWty people |
| PAW-parazzi | $100 | Silver | Shout-out on social media and emails |
| PAWty Animal | $50 | Bronze | PAWty Pass ticket + tailgate chair |

**Claimed / not for sale:**
- **Photo Booth — Lions Club of Jacksonville Beach.** Show as a thank-you.

Note: the printed sponsor sheet and flyer QR use "FashionPAWty.org" and the
phrase "low-vision individuals." For the WEBSITE, follow the voice rules
(§ Voice & Tone) and canonical domain thefashionpawty.com. Flag any print/web
mismatch to the team but don't replicate the print wording on the site.

---

## Sign-off checklist (before first deploy)
- [ ] Every Part 2 value transferred into code, no placeholders left
- [ ] Contrast pairs verified (computed above — recheck if any hex changes)
- [ ] Voice: grep returns zero for impaired / visually impaired / handicapped / "the blind" / BVI
- [ ] Event schema validates in Google Rich Results Test (date, location, $30 offer)
- [ ] VideoObject valid; YouTube embed has captions and no autoplay-with-sound
- [ ] $30 ticket pay button live from /tickets and homepage
- [ ] Photo Booth shown as Lions Club-claimed; other areas in inquiry state
- [ ] Merch button → shop.thefashionpawty.com
- [ ] AI imagery limited to atmosphere/objects; real photos for people/guide dogs; all marked for post-event replacement
- [ ] llms.txt + FAQ updated from Key Facts
- [ ] logo.svg + logo-high-contrast.svg + og-default.jpg in /public
- [ ] `npm test` green
