/**
 * partners.js — single source of truth for signed sponsors, shared by
 * /sponsor/ (the "Sponsored By" credit on a sold tier), /partners/ (the
 * recognition page), and each partner's own page. No prices here —
 * pricing lives only on /sponsor/ and in Stripe.
 *
 * `tier` must match one of PARTNER_TIER_ORDER on /partners/.
 */

export const PARTNER_TIER_ORDER = [
  'Best in Show',
  'Top Dog',
  'PAWty Animal',
  'Kennel Club',
  'The Doggie Dispatch',
  'PAWty Post',
  'Media Sponsor',
];

export const PARTNERS = [
  {
    id: 'jacksonville-river-city-lions-club',
    name: 'Jacksonville River City Lions Club',
    tier: 'Best in Show',
    sponsoredArea: 'Runway / Orange Carpet',
    blurb:
      'Jacksonville River City Lions Club serves the First Coast through vision programs, youth initiatives, and humanitarian outreach guided by the Lions motto "We Serve." They are the Best in Show and Runway / Orange Carpet sponsor of The Fashion PAWty.',
    logo: '/images/partners/jacksonville-river-city-lions-club-logo.webp',
    href: '/partners/jacksonville-river-city-lions-club/',
    buttonText: 'Meet Jacksonville River City Lions Club',
    website: 'https://e-clubhouse.org/sites/jacksonville_river_city/',
  },
  {
    id: 'mjm-consulting',
    name: 'MJ Mason Consulting',
    tier: 'PAWty Animal',
    sponsoredArea: 'Bone Up Station',
    blurb:
      'MJ Mason Consulting is a disabled woman-owned small business providing strategic marketing, communications, and advisory services — with a perspective shaped by lived experience with blindness and low vision. They are the Bone Up Station sponsor of The Fashion PAWty.',
    logo: '/images/partners/mjm-consulting-logo.webp',
    href: '/partners/mjm-consulting/',
    buttonText: 'Meet MJ Mason Consulting',
    website: 'https://www.linkedin.com/in/meredythsauter/',
  },
  {
    id: 'jacksonville-beach-lions-club',
    name: 'Lions Club Jacksonville Beach',
    tier: 'PAWty Animal',
    sponsoredArea: 'Merch Shop',
    blurb:
      'Lions Club Jacksonville Beach has served the First Coast since 1938 through vision programs, hearing assistance, and community outreach. They are the Merch Shop sponsor of The Fashion PAWty.',
    logo: '/images/partners/jacksonville-beach-lions-club-logo.webp',
    href: '/partners/jacksonville-beach-lions-club/',
    buttonText: 'Meet Lions Club Jacksonville Beach',
    website: 'https://jaxbeachlions.org/',
  },
  {
    id: 'smith-eye-associates',
    name: 'Smith Eye Associates',
    tier: 'PAWty Animal',
    sponsoredArea: 'Photo Booth',
    blurb:
      "Smith Eye Associates is an optometry practice in Ponte Vedra Beach caring for families across St. Johns County. They are the Photo Booth sponsor of The Fashion PAWty.",
    logo: '/images/partners/smith-eye-associates-logo.webp',
    href: '/partners/smith-eye-associates/',
    buttonText: 'Meet Smith Eye Associates',
    website: 'https://www.smitheyeassociates.com/',
    phone: '(904) 280-9000',
    telephone: '+1-904-280-9000',
    address: {
      streetAddress: '120 A1A N #101',
      addressLocality: 'Ponte Vedra Beach',
      addressRegion: 'FL',
      postalCode: '32082',
      addressCountry: 'US',
    },
  },
];
