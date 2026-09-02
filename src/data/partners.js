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
