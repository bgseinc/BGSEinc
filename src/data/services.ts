export type Service = {
  slug: string
  title: string
  short: string
  image: string
  imageAlt: string
  featured?: boolean
  intro?: string
  body?: string[]
  bullets?: { title?: string; items: string[] }
  quote?: { text: string; cite: string }
}

export const services: Service[] = [
  {
    slug: 'brand-development',
    title: 'Brand Development',
    featured: true,
    image: '/images/services/brand-development.webp',
    imageAlt: 'New Orleans Saints wide receiver Chris Olave seated in the Paris Saint-Germain dugout',
    short:
      'We craft and elevate authentic athlete and sports brands through strategy, storytelling, events, collaborations and design, building a powerful identity that connects with fans, partners and global markets.',
    intro:
      'From one-off campaigns to multi-level global strategies, BGSE specializes in developing and implementing customized and evolving strategies.',
    body: [
      "In order to guarantee success, it is imperative for all brands regardless of the industry to do everything possible to elevate and distinguish the brand. The reputation of an athlete or company's brand is crucial in determining the success and longevity of one's career. It is imperative to build an attractive brand that is positive and powerful from day one. At BG we focus on developing unique, personalized strategies that achieve all objectives. We create opportunities for your brand to grow through the appropriate outlets and activities.",
      'Our athlete and celebrity clients are given the understanding that they as an individual are their own business. Clients are taught the skills of marketable networking, innovative thinking and the importance of recognizing their values and core competencies in which their abilities are best highlighted. The window of opportunity for a professional athlete can be broadened by their commitment to brand development during their professional career.',
      'We make it our responsibility to build a positive image for our clients, set them apart from their peers and competitors, and increase the possibilities for success. Our goal is to teach our clients how to develop relationships, market themselves, network, and set themselves up for individual success in their career for the present and the future.',
    ],
    bullets: {
      title: 'What it covers',
      items: [
        'Brand identity development and athlete branding',
        'Digital and social media strategy',
        'Sponsorship and partnership activation',
        'Content creation and marketing',
        'Event branding and management',
      ],
    },
    quote: {
      text: 'You need to position yourself as a force to be reckoned with in the industry. Your brand needs to be independent, brilliant, and influential.',
      cite: 'Brittany Gilman, CEO, BG Sports Enterprises Inc.',
    },
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    featured: true,
    image: '/images/services/marketing.webp',
    imageAlt: 'Athlete holding a Union Jack football on the Wembley pitch during an NFL London game',
    short:
      'Comprehensive sports marketing and sponsorship strategy, connecting athletes, teams and events with brands to drive visibility, engagement and revenue.',
    intro:
      'From brand alignment and endorsement deals to partnership activations, event sponsorships and campaign execution, we deliver customized solutions that maximize value in the competitive sports landscape.',
    body: [
      'Our individualized marketing strategies combine traditional methods with innovative techniques. Our unique and fluid approach incorporates all levels of marketing. We develop revenue streams through new-age techniques and focus on relationship development.',
      'For our athlete and celebrity clients, we focus on teaching them the business. We create opportunities and utilize all options, maximizing marketing potential through endorsements, sponsorships, events and other creative outlets.',
      "Our Marketing & PR programs are created in parallel to our client's short-term, long-term and post-career goals. We take a very competitive approach to each marketing strategy, focusing on opportunities both on and off the field and in the community. Each strategy is customized to reflect our client's most attractive characteristics and unique abilities. We saturate all markets to create brand awareness and, most importantly, develop opportunities outside of their sport and beyond their athletic career.",
    ],
    quote: {
      text: 'Learning how to market yourself, network, develop relationships, discern the value of your abilities and your image… all set yourself up for success in the present and future.',
      cite: 'Brittany Gilman, CEO, BG Sports Enterprises Inc.',
    },
  },
  {
    slug: 'media-and-public-relations',
    title: 'Media & Public Relations',
    featured: true,
    image: '/images/portfolio/p05.webp',
    imageAlt: 'İlkay Gündoğan on the ESPYS red carpet, named best dressed by Esquire',
    short:
      'With a global PR network, our customized PR strategies expand brand awareness, build credibility, strengthen reputations and facilitate opportunity.',
    intro:
      'We combine media relations, strategic storytelling and innovative communication tactics to generate impactful coverage, enhance visibility and cultivate trust with fans, partners and stakeholders across global markets.',
    body: [
      'A strong public persona and professional reputation are crucial for achieving success for any business. The public perception of any brand or individual impacts every aspect of the brand. Leveraging media effectively serves as a powerful tool for managing and cultivating any brand. We prioritize positive, impactful and strategic press. With longstanding global synergistic relationships spanning decades, we possess the efficiency and access to open doors that few can match.',
      "Our expertise extends to crafting PR campaigns tailored to any event, strategy, individual or launch. Our targeted, multi-level campaigns are built around client objectives and market strategy. In today's digital empire it is imperative to stay relevant, consistently deliver the right message to your audience and continue to expand your brand. BGSE seeks to create and maintain a positive image, share desired brand messaging while increasing visibility, Q-value and marketability.",
      'With a presence in both London and Los Angeles, the global hubs of entertainment, BGSE bridges nations and networks, amplifying our effectiveness. Our extensive network encompasses strong relationships across the sports, entertainment, music and corporate sectors, granting access to strategic media partnerships, VIP events, sporting events, award ceremonies, cameo opportunities, television productions, film projects, music ventures, technology and other exclusive opportunities for our clientele.',
      'Whether you seek the limelight or prefer a more understated approach, BGSE collaborates closely with each client to cultivate and execute a compelling public persona, generate excitement and invigorate your brand.',
    ],
    bullets: {
      title: 'Our PR services include',
      items: [
        'Strategic press placement across all mediums: television, radio, print, digital',
        'Distinct saturation of specific industry media (sports, entertainment, consumer, etc.)',
        'Unique brand-development media opportunities',
        'Consistent Q-value growth',
        'Buzz monitoring and damage control',
        'Media tours and press junkets',
        'Specific PR campaigns for events, projects and announcements',
        'Situational, strategized PR campaigns',
      ],
    },
  },
  {
    slug: 'digital-branding',
    title: 'Digital Branding',
    image: '/images/services/digital-branding.webp',
    imageAlt: 'Athlete recording content for TikTok at Super Bowl LVII',
    short:
      "Digital branding and social media is the leading, most effective way to develop, manage, grow and influence a brand, its audience and its position within popular culture and the marketplace.",
    intro:
      'We custom-create strategies for our clients at any stage to maximize organic growth, engagement and partnership opportunity.',
    body: [
      'The technological shift to digital media and branding is now full-circle. All brands, personalities and companies must have an online presence to survive and be most efficient. Managing a digital footprint has become essential.',
      "Your digital brand's power is limitless, limited only by the creativity of the thinkers and dreamers who are managing it.",
    ],
    bullets: {
      title: 'Services include',
      items: [
        'Website development and management',
        'SEO',
        'Implementation of unique digital branding strategies to elicit maximum revenue-generating opportunities',
        'Consistent development of aggressive and creative techniques',
        'Social media management and organic platform expansion',
        'Fan-interaction activities interlaced with corporate sponsorships',
        'Digital platform utilization for brand development',
      ],
    },
  },
  {
    slug: 'digital-advertising-with-pro-athletes',
    title: 'Digital Advertising with Pro Athletes',
    image: '/images/services/digital-advertising.webp',
    imageAlt: 'Athletes on stage at a Dominance MMA press conference',
    short:
      'An easy and cost-effective way to associate with professional athletes is through digital advertising and social media collaborations.',
    intro:
      'BGSE will create a solution and strategy for your brand based upon your objectives, budget and target market.',
    body: [
      'With a roster of more than 600 athletes and personalities across the NFL, global football, UFC, boxing, Olympic sport, basketball and NIL, we match brands with the right voices and build campaigns that land with real audiences.',
    ],
  },
  {
    slug: 'leadership-community-relations',
    title: 'Leadership & Community Relations',
    image: '/images/services/community-relations.webp',
    imageAlt: 'Athlete shopping with children during a community giveback event',
    short:
      'We design and implement initiatives and events that connect athletes, brands and organizations with the communities they serve.',
    intro:
      'By fostering authentic engagement through events, partnerships and outreach programs, we help strengthen trust, build lasting relationships and create meaningful impact beyond the game.',
    body: [
      'BG recognizes the importance of setting a good example and being a respected leader in the community. We also understand that for a person to be a leader, they must first serve others. We work closely with our clients to help create more opportunities to serve their communities.',
      '"To whom much is given, much is required." At BG Sports we believe in this principle. We are here to help our clients assume that responsibility as a leader in the community and create long-lasting positive impressions in the lives of everyone. BGSE can add value to existing events and strategies and foster partnerships and exposure.',
    ],
    bullets: {
      title: 'Ways we help clients give back',
      items: [
        'Charity events: auctions, fundraisers, galas, golf tournaments, camps and special events',
        'Volunteer work',
        'Foundation development and maintenance',
        'Leadership conferences',
        'Motivational speaking engagements',
      ],
    },
  },
  {
    slug: 'international-branding-strategy',
    title: 'International Branding Strategy',
    image: '/images/services/international.webp',
    imageAlt: 'Jersey swap between a Premier League footballer and an NFL player at Wembley Stadium',
    short:
      'The international business of sports continues to gain momentum and clout. BGSE specializes in developing multi-level branding strategies that tap into new markets and opportunity.',
    intro:
      'BGSE aids professional teams to expand their global footprint through tailored branding and market-entry strategies.',
    body: [
      'From identifying growth markets to developing localized campaigns, partnerships and fan-engagement initiatives, we provide the insights and execution needed to build lasting international presence, strengthen commercial opportunities and connect authentically with fans worldwide.',
      'Regardless of whether a brand is a concept waiting for development or a century-old business looking to implement modern-day strategies, BG works closely with your brand to develop, launch and identify discrepancies in the current business model. We create customized corporate development strategies that provide solutions and implement innovative techniques that elevate and distinguish the brand, producing consistent expansion and success.',
    ],
    bullets: {
      title: 'Corporate consulting & strategic business development',
      items: [
        'Corporate and small-business strategic development',
        'Business consulting and mentoring',
        'Creative brainstorming, idea exploration, development and project execution',
        'Brand development, marketing, public relations and digital branding',
        'Community relations',
        'Mentor programs and internships',
      ],
    },
    quote: {
      text: 'Our business is business. Everything in life in some way, shape or form relates to business. Our goal is to provide and assist our clients in anything they need to develop, execute and turn their ideas and dreams into reality.',
      cite: 'BGSE',
    },
  },
  {
    slug: 'post-career-planning',
    title: 'Post-Career Planning',
    image: '/images/home/g4.webp',
    imageAlt: 'Brittany Gilman with a client during Super Bowl week',
    short:
      'The transition from professional sports into the business world can be challenging. Very few athletes get to choose when their athletic career comes to an end.',
    intro:
      'With over 20 years of experience, BGSE works with each client to identify and prepare post-career business while in the league, and helps retired players discover the next chapter.',
    body: [
      'Even if an athlete has a long, successful career in professional sports, they still have to support themselves after it is all said and done. At BG we incorporate the concept of "planting seeds now for growth in the future" to help make this transition as positive and as smooth as possible.',
      'We encourage our clients to be creative and provide the support and resources to gain knowledge and experience in new industries and endeavors. We develop our strategies to integrate these goals, which results in consistent growth.',
      'Through the transition we help our clients find exactly what they are looking for in terms of employment, living accommodations, family support, financial planning, business launching and more.',
    ],
  },
  {
    slug: 'events',
    title: 'Events',
    image: '/images/services/events.webp',
    imageAlt: "Rolling Stone coverage of Odell Beckham Jr.'s FRI&NDS Monaco Grand Prix event",
    short:
      'We are a full-service global event production agency. From concept to completion, we deliver world-class event experiences that capture attention and elevate brands on the global stage.',
    intro:
      "Our team manages every detail, from creative design, sponsorships and talent integration to logistics, media and on-site execution. Whether it's an intimate activation or a large-scale international production, we provide end-to-end solutions that engage audiences, amplify visibility and leave a lasting impact.",
    body: [
      'BG offers full-service event production and execution. We have the abilities, experience, knowledge and network to produce a successful and unforgettable event. Our professional and devoted staff specializes in organizing and executing any and all types of events: charity events, galas, golf tournaments, football camps, parties, launches, retreats and more.',
    ],
    bullets: {
      title: 'Services include',
      items: [
        'Custom event plan development and execution',
        'Venue negotiations and booking',
        'Promotional material: sponsorship deck, one-sheet, fliers, save-the-date',
        'Sponsorships',
        'PR campaign, press placement and outreach',
        'Social media and digital promotion',
        'Talent booking',
        'On-site event coordination and execution',
        'Logistics, support and relationship maintenance',
      ],
    },
  },
  {
    slug: 'experiences',
    title: 'Experiences',
    image: '/images/services/experiences.webp',
    imageAlt: 'Athlete and Brittany Gilman seated front row at a fashion week show',
    short:
      'Access to unique and exclusive experiences globally in sports, fashion, business and entertainment. We create your itinerary and offer on-the-ground assistance, opening up your world and elevating your brand like never before.',
    intro:
      'Experiences include the F1 Grand Prix, Cannes Film Festival, Paris Fashion Week, London Fashion Week, Milan Fashion Week, Art Basel, the ESPYS, global VIP events and many more.',
    body: [
      'Our reach spans the U.S.A. and Europe, and we will soon also offer experiences in the UAE.',
    ],
  },
  {
    slug: 'management',
    title: 'Management',
    image: '/images/services/management.webp',
    imageAlt: 'Athlete and Brittany Gilman at a media appearance',
    short:
      'Your career, amplified. We handle the business so you can focus on performance, from securing endorsements and building your brand to navigating contracts, media and global opportunities.',
    intro:
      'Our hands-on, strategic approach unlocks your full potential on and off the field, planting seeds for the future while managing the present.',
    body: [
      'We are about efficiency, progression and communication. Trust in this business is difficult to come by. We pride ourselves on two decades of building with our clients on and off the field.',
    ],
  },
  {
    slug: 'white-label-services',
    title: 'White Label Services',
    image: '/images/services/white-label.webp',
    imageAlt: 'Two athletes exchanging jerseys on the field after a match',
    short:
      'We seamlessly integrate into your team, filling in the gaps with customized, behind-the-scenes support.',
    intro:
      'From branding and marketing to event execution and partnership development, our white-label solutions allow agencies, teams and organizations to expand capabilities and deliver world-class results, all under your own brand.',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
