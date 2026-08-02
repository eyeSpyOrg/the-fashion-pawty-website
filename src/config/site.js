/**
 * SITE CONFIG — SINGLE SOURCE OF TRUTH
 * =====================================
 * The Fashion PAWty — "A Navigation Celebration"
 * Values from BRAND.md § 2.3 / § 2.4. Edit here, never inline in pages.
 */

export const SITE = {
  // ── Identity ──────────────────────────────────────────────
  name: 'The Fashion PAWty',
  legalName: 'Eye Spy Foundation',
  url: 'https://thefashionpawty.com',
  titleTemplate: '%s | The Fashion PAWty',
  description:
    'The Fashion PAWty is a Jacksonville dog fashion show and community celebration on Sep 26 at Happy Brew, benefiting the blind and low vision community and Leader Dogs.',
  locale: 'en_US',
  language: 'en',

  // ── Organization schema (schema.org/Organization) ─────────
  orgType: 'Organization',
  // PNG, not SVG: the vector exports from the .ai file were unusable
  // (mislabeled colorways / a brand sheet) — see the build report.
  logo: '/logo.png',
  foundingDate: '2025',
  email: 'team@eyespy.org',
  telephone: '+1-844-222-8848',
  address: {
    streetAddress: '3200 Hendricks Ave',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32207',
    addressCountry: 'US',
  },
  // Social profiles — all Eye Spy Foundation, handle @eyespyorg.
  // `icon` maps to an inline SVG in Footer.astro. Used for footer links
  // AND Organization schema sameAs.
  // NOTE: handles assumed @eyespyorg per brief — confirm each URL resolves.
  socials: [
    { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/eyespyorg' },
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/eyespyorg' },
    { label: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@eyespyorg' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/eyespyorg' },
    { label: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@eyespyorg' },
    { label: 'X', icon: 'x', url: 'https://x.com/eyespyorg' },
  ],

  // ── Default social sharing image ───────────────────────────
  ogImage: '/og-default.jpg',

  // ── Event facts (feeds Event schema + pages — one source) ──
  event: {
    name: 'The Fashion PAWty — A Navigation Celebration',
    startDate: '2026-09-26T16:00:00-04:00',
    endDate: '2026-09-26T19:00:00-04:00',
    venueName: 'Happy Brew',
    ticketPrice: '30',
    ticketUrl: 'https://thefashionpawty.com/tickets/',
    description:
      'A doggie fashion show down the orange carpet with mocktails, games, music, and merch — benefiting the blind and low vision community and Leader Dogs for the Blind.',
  },

  // ── Navigation (drives Header + Footer) ────────────────────
  // Tickets & Merch are surfaced as the header "Get Tickets" / "Buy Merch"
  // buttons, so they are not repeated as nav links.
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Sponsors', href: '/sponsors/' },
    { label: 'Beneficiaries', href: '/beneficiaries/' },
    { label: 'Schedule', href: '/schedule/' },
    { label: 'Venue', href: '/venue/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
  ],
  // Shop URL reused by the header "Buy Merch" button
  shopUrl: 'https://shop.thefashionpawty.com',
  footerNav: [
    { label: 'Accessibility Statement', href: '/accessibility/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Contact', href: '/contact/' },
  ],

  // ── Phase 2 integrations (see INTEGRATIONS.md) ─────────────
  // Only PUBLIC identifiers belong here. Secrets go in env vars.
  integrations: {
    ga4Id: 'G-G5XJTT1PX2',
    hubspotPortalId: '',
    stripePublishableKey: '',
  },
};
