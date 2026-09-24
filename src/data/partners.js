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
];

export const PARTNERS = [
  {
    id: 'jacksonville-river-city-lions-club',
    name: 'Jacksonville River City Lions Club',
    tier: 'Best in Show',
    sponsoredArea: 'Fashion Show Runway',
    blurb:
      'Jacksonville River City Lions Club serves the First Coast through vision programs, youth initiatives, and humanitarian outreach guided by the Lions motto "We Serve." They are the Best in Show and Fashion Show Runway sponsor of The Fashion PAWty.',
    logo: '/images/partners/jacksonville-river-city-lions-club-logo.webp',
    href: '/partners/jacksonville-river-city-lions-club/',
    buttonText: 'Meet Jacksonville River City Lions Club',
    website: 'https://e-clubhouse.org/sites/jacksonville_river_city/',
  },
  {
    id: 'the-community-foundation-for-northeast-florida',
    name: 'The Community Foundation for Northeast Florida',
    tier: 'Top Dog',
    sponsoredArea: 'Music Stage',
    blurb:
      'The Community Foundation for Northeast Florida connects donors with high-impact nonprofits across the First Coast — including a Small Organization Grant that helped Eye Spy Foundation bring The Fashion PAWty to life.',
    logo: '/images/partners/community-foundation-nefl-logo.webp',
    href: '/partners/the-community-foundation-for-northeast-florida/',
    buttonText: 'Meet the Community Foundation',
    website: 'https://www.jaxcf.org/',
  },
  {
    id: 'southern-glazers-wine-and-spirits',
    name: 'Southern Glazers Wine and Spirits',
    tier: 'Top Dog',
    sponsoredArea: 'MockTAIL Bar',
    blurb:
      'Southern Glazers Wine and Spirits graciously donated Ritual Whiskey, Tequila, and Bourbon in-kind to power a delicious MockTAIL Bar experience at The Fashion PAWty.',
    logo: '/images/partners/southern-glazers-logo.webp',
    href: '/partners/southern-glazers-wine-and-spirits/',
    buttonText: 'Meet Southern Glazers',
    website: 'https://www.southernglazers.com/',
  },
  {
    id: 'eye-spy-community',
    name: 'Eye Spy Community',
    tier: 'Top Dog',
    sponsoredArea: 'Chow Down Station',
    blurb:
      'The Eye Spy Community — friends, family, advocates, business owners, and supporters from near and far — is feeding the heart of The Fashion PAWty through the Chow Down Station, keeping volunteers, dog handlers, vendors, and PAWty goers fueled all day.',
    logo: '/images/partners/eye-spy-community-logo.webp',
    href: '/partners/eye-spy-community/',
    buttonText: 'Meet Eye Spy Community',
    website: 'https://eyespyfoundation.org',
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
    id: 'jacksonville-beaches-lions-club',
    name: 'Jacksonville Beaches Lions Club',
    tier: 'PAWty Animal',
    sponsoredArea: 'Merch Shop',
    blurb:
      'Jacksonville Beaches Lions Club has served the First Coast since 1938 through vision programs, hearing assistance, and community outreach. They are the Merch Shop sponsor of The Fashion PAWty.',
    logo: '/images/partners/jacksonville-beaches-lions-club-logo.webp',
    href: '/partners/jacksonville-beaches-lions-club/',
    buttonText: 'Meet Jacksonville Beaches Lions Club',
    website: 'https://jaxbeachlions.org/',
  },
  {
    id: 'smith-eye-associates',
    name: 'Smith Eye Associates',
    tier: 'PAWty Animal',
    sponsoredArea: 'Photo Wall',
    blurb:
      "Smith Eye Associates is an optometry practice in Ponte Vedra Beach caring for families across St. Johns County. They are the Photo Wall sponsor of The Fashion PAWty.",
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
  {
    id: 'jacksonville-arlington-lions-club',
    name: 'Jacksonville Arlington Lions Club',
    tier: 'PAWty Animal',
    sponsoredArea: 'DJ PAWty',
    blurb:
      'Jacksonville Arlington Lions Club has served the First Coast since 1938 through vision programs, hearing assistance, and community outreach. They are the DJ PAWty sponsor of The Fashion PAWty, keeping the energy up with music and shoutouts all event long.',
    logo: '/images/partners/jacksonville-arlington-lions-club-logo.webp',
    href: '/partners/jacksonville-arlington-lions-club/',
    buttonText: 'Meet Jacksonville Arlington Lions Club',
    website: 'https://e-clubhouse.org/sites/jacksonvillearlington/',
  },
  {
    id: 'walmart-spark-for-good',
    name: 'Walmart Spark for Good',
    tier: 'PAWty Animal',
    sponsoredArea: 'Sensory Games',
    blurb:
      'Walmart Spark for Good connects communities with the causes they care about — and two Northeast Florida Walmart Supercenters are bringing their giving spirit to the Sensory Games station at The Fashion PAWty.',
    logo: '/images/partners/walmart-spark-for-good-logo.webp',
    href: '/partners/walmart-spark-for-good/',
    buttonText: 'Meet Walmart Spark for Good',
    website: 'https://www.walmart.com/nonprofits',
    stores: [
      {
        name: 'Jacksonville Atlantic Blvd Supercenter',
        url: 'https://www.walmart.com/store/5054-jacksonville-fl',
      },
      {
        name: 'Macclenny Supercenter',
        url: 'https://www.walmart.com/store/1205-macclenny-fl',
      },
    ],
  },
];
