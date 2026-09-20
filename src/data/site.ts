export const site = {
  name: 'BG Sports Enterprises Inc.',
  shortName: 'BGSE',
  tagline: 'International Sports Branding Agency',
  slogan: 'Creating Opportunities Beyond The Game.',
  founded: 2007,
  hubs: ['Los Angeles', 'London'],
  url: 'https://bgseinc.com',
  // TODO: confirm the inbox that should receive contact-form messages.
  contactEmail: 'info@bgseinc.com',
  // Optional: point this at a form backend (Formspree, Basin, Netlify Forms, etc.).
  // When undefined the contact form falls back to the visitor's email client.
  formEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined,
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/bgsportsentinc', icon: 'instagram' },
    { label: 'X (Twitter)', href: 'https://twitter.com/BGSportsEntInc', icon: 'x' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bg-sports', icon: 'linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com/BGSportsEnterprises', icon: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Bgseinc', icon: 'youtube' },
  ] as const,
  nav: [
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/portfolio' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
}

export type SocialIcon = (typeof site.socials)[number]['icon']

export const stats = [
  { value: '2007', label: 'Founded by a former pro snowboarder' },
  { value: '600+', label: 'Athletes, teams, brands & personalities' },
  { value: 'LA · LDN', label: 'Global hubs in Los Angeles and London' },
  { value: '20', label: 'Super Bowl weeks worked, and counting' },
]

export const arenas = [
  'NFL',
  'Premier League',
  'Serie A',
  'MLS',
  'UFC',
  'Olympics',
  'NIL',
  'ESPYS',
  'Super Bowl',
  'Cannes',
  'Monaco Grand Prix',
  'Paris Fashion Week',
  'Milan Fashion Week',
  'London Fashion Week',
  'Art Basel',
  'F1',
]

export const pillars = [
  {
    n: '01',
    title: 'Global Events',
    text: 'Full-service production from concept to completion, from intimate activations to large-scale international productions.',
  },
  {
    n: '02',
    title: 'Worldwide Experiences',
    text: 'Curated access across sport, fashion, business and entertainment: F1, Cannes, fashion weeks, Art Basel, the ESPYS and more.',
  },
  {
    n: '03',
    title: 'International Brand Strategy',
    text: 'Multi-level strategies that open new markets for athletes and help teams expand their global footprint.',
  },
  {
    n: '04',
    title: 'Public Relations',
    text: 'A global PR network built over two decades, positioning brands and delivering the right message to the right audience.',
  },
]
