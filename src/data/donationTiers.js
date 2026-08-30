/**
 * Shared donation level data for /donate and /pawtners — one pooled list
 * (no org grouping, no org name on individual cards) so the two pages
 * never drift on amounts, descriptions, or bullets — only level titles
 * (levels 2-4) and CTA verbs vary by page tone.
 *
 * PLACEHOLDER: every stripeUrl below points at the same temporary link so
 * the pages can be built and tested end-to-end. Before launch, swap each
 * one for its own real per-level Stripe Payment Link.
 */
export const STRIPE_PLACEHOLDER = 'https://buy.stripe.com/7sY3cugtO6NrdVV8jcejK01';

export const trustLinks = {
  leaderDogs: { label: 'Leader Dogs for the Blind', url: 'https://www.leaderdog.org/' },
  eyeSpy: { label: 'Eye Spy Foundation', url: 'https://eyespy.org' },
};

export const levels = [
  {
    id: 'puppy-pawty',
    priceLabel: '$20',
    titleDonate: 'Puppy PAWty',
    titlePawtners: 'Puppy PAWty',
    description: 'A treat and a toy go a long way for a future guide dog puppy in training.',
    bullets: [
      'A treat for training rewards',
      'A toy for playtime and bonding',
      'Helps build confidence early in training',
    ],
    ctaDonate: 'Give $20',
    ctaPawtners: 'Join for $20',
    imageAlt: 'Placeholder — a puppy playing with a toy and treat photo goes here',
    stripeUrl: STRIPE_PLACEHOLDER,
  },
  {
    id: 'support-a-volunteer',
    priceLabel: '$30',
    titleDonate: 'Support a Volunteer',
    titlePawtners: 'Fuel a Volunteer',
    description: "Fashion PAWty runs on the people who show up to make it happen — this covers one volunteer's night, start to finish.",
    bullets: [
      'A meal for the night',
      'Mocktails included',
      'An official volunteer shirt',
      'Keeps the PAWty running smoothly',
    ],
    ctaDonate: 'Give $30',
    ctaPawtners: 'Join for $30',
    imageAlt: 'Placeholder — a Fashion PAWty volunteer in an event shirt photo goes here',
    stripeUrl: STRIPE_PLACEHOLDER,
  },
  {
    id: 'pawty-pass-pair',
    priceLabel: '$60',
    titleDonate: 'PAWty Pass Pair',
    titlePawtners: 'Pass It On',
    description: 'Two full passes mean someone in the blind and low vision community — and a guest — get to experience the whole night together.',
    bullets: [
      'Admission for two',
      'Food and mocktails included',
      'A doggie bag to take home',
      'A night of connection and community',
    ],
    ctaDonate: 'Give $60',
    ctaPawtners: 'Join for $60',
    imageAlt: 'Placeholder — two Fashion PAWty passes photo goes here',
    stripeUrl: STRIPE_PLACEHOLDER,
  },
  {
    id: 'navigator-support',
    priceLabel: '$90',
    titleDonate: 'Navigator Support',
    titlePawtners: 'Guided Independence',
    description: 'One-on-one navigation support helps someone move through the world with more confidence and independence.',
    bullets: [
      'Personalized, one-on-one guidance',
      'Builds everyday confidence',
      'Direct, hands-on support',
    ],
    ctaDonate: 'Give $90',
    ctaPawtners: 'Join for $90',
    imageAlt: 'Placeholder — a guide dog and handler walking together photo goes here',
    stripeUrl: STRIPE_PLACEHOLDER,
  },
  {
    id: 'make-your-own-impact',
    priceLabel: 'Any Amount',
    titleDonate: 'Make Your Own Impact',
    titlePawtners: 'Make Your Own Impact',
    description: 'Every dollar counts — choose the amount that feels right, and it goes straight into the shared pool.',
    bullets: [
      'Choose any amount',
      '100% goes toward the mission',
      'Every gift makes a difference',
    ],
    ctaDonate: 'Give Your Amount',
    ctaPawtners: 'Join With Your Amount',
    imageAlt: 'Placeholder — a paw print and heart photo goes here',
    stripeUrl: STRIPE_PLACEHOLDER,
  },
];
