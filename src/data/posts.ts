export type Block =
  | { type: 'p'; html: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'img'; src: string; alt: string; caption?: string }
  | { type: 'gallery'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'video'; id: string; title: string }
  | { type: 'cta'; href: string; label: string }

export type Post = {
  slug: string
  title: string
  date: string // ISO
  category: string
  excerpt: string
  cover?: string
  coverAlt?: string
  location?: string
  tags?: string[]
  blocks: Block[]
}

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

export const posts: Post[] = [
  {
    slug: 'nfl-in-paris-sport-is-global-culture-is-universal',
    title: 'NFL in Paris: Sport Is Global. Culture Is Universal.',
    date: '2026-11-10',
    category: 'International',
    location: 'Paris, France',
    tags: ['NFL Paris', 'Saints', 'PSG', 'Steelers'],
    excerpt:
      'The NFL’s arrival in Paris was more than a game. It was a historic moment that brought sport, fashion, art, entertainment and culture together on an international stage.',
    blocks: [
      {
        type: 'p',
        html: 'The NFL’s arrival in Paris was more than a game. It was a historic moment that brought sport, fashion, art, entertainment and culture together on an international stage.',
      },
      { type: 'h2', text: 'A first for France' },
      {
        type: 'p',
        html: 'On Sunday, October 25, 2026, the Pittsburgh Steelers and New Orleans Saints met at the Stade de France, the <a href="https://www.tsn.ca/nfl/article/nfl-eyes-big-debut-in-paris-as-steelers-saints-game-comes-amid-security-concerns/" target="_blank" rel="noreferrer">first NFL regular-season game ever played in France</a>. The league built a full week around it, including an NFL House and fan events across the city, and the game aired free-to-air on French television.',
      },
      {
        type: 'p',
        html: 'For the league, Paris was about more than the 82,000-seat stadium. It was a chance to meet a new audience on its own terms, through the city’s fashion, music and football culture.',
      },
      { type: 'h2', text: 'Saints x PSG: two cities, one fleur-de-lis' },
      {
        type: 'p',
        html: 'The most visible cultural crossover was the <a href="https://www.neworleanssaints.com/news/new-orleans-saints-paris-saint-germain-partnership-nfl-france-psg-merchandise-collection" target="_blank" rel="noreferrer">Saints x Paris Saint-Germain partnership</a>. Built around the fleur-de-lis, a symbol that belongs to both New Orleans and France, it paired a capsule collection developed with Fanatics with a week of fan, community and cultural events.',
      },
      {
        type: 'p',
        html: 'PSG’s own <a href="https://www.psg.fr/en/content/pr_nfl_football_is_football" target="_blank" rel="noreferrer">“Football is football” collection</a> added Nike-made NFL jerseys in Red and Blue and Monogram editions, plus an original piece of music and a free talk at the NFL House. It treated football as a shared starting point for athletes, musicians and creators in the city.',
      },
      { type: 'h2', text: 'Jeff Hamilton x NFL x Casa Blanca' },
      {
        type: 'p',
        html: 'Fashion had its own moment in the Jeff Hamilton x NFL x Casa Blanca event, a reminder that football and style have long shared a language.',
      },
      { type: 'h2', text: 'An exclusive moment you haven’t seen yet' },
      {
        type: 'p',
        html: 'There was also an exclusive event produced by BG Sports Enterprises Inc. during the week, and it hasn’t been shared publicly until now. Follow along for a first look.',
      },
      { type: 'h2', text: 'Where sport and culture meet' },
      {
        type: 'p',
        html: 'From the Saints x PSG collaboration to the fashion events and everything in between, Paris showed how sport keeps creating chances for cultural exchange and connection. It was a historic moment for the NFL, and another sign of how closely sports and global culture are now intertwined.',
      },
      { type: 'p', html: '<strong>Sport is global. Culture is universal.</strong>' },
      {
        type: 'p',
        html: '<strong>Sources:</strong> <a href="https://www.tsn.ca/nfl/article/nfl-eyes-big-debut-in-paris-as-steelers-saints-game-comes-amid-security-concerns/" target="_blank" rel="noreferrer">TSN</a> · <a href="https://www.neworleanssaints.com/news/new-orleans-saints-paris-saint-germain-partnership-nfl-france-psg-merchandise-collection" target="_blank" rel="noreferrer">New Orleans Saints</a> · <a href="https://www.psg.fr/en/content/pr_nfl_football_is_football" target="_blank" rel="noreferrer">Paris Saint-Germain</a>',
      },
    ],
  },
  {
    slug: 'emsculpt-neo-athlete-recovery-longevity-lounge-x-games-aspen-2026',
    title: 'Recovery at Altitude: Inside the Emsculpt Neo Athlete Recovery & Longevity Lounge at X Games Aspen 2026',
    date: '2026-11-10',
    category: 'Activations',
    location: 'Aspen, CO',
    tags: ['X Games', 'BTL', 'Emsculpt Neo', 'Recovery'],
    excerpt:
      'A look back at the BTL Emsculpt Neo Athlete Recovery & Longevity Lounge, which BGSE Inc. produced during X Games Aspen 2026.',
    cover: '/images/blog/xgames-aspen/1.webp',
    coverAlt: 'Dr. Jonathan Schoeff with an athlete receiving an Emsculpt Neo treatment in the Athlete Recovery & Longevity Lounge at X Games Aspen',
    blocks: [
      {
        type: 'p',
        html: 'As winter settles in and the snow season gets going, we’re looking back at one of our favorite activations: the BTL Emsculpt Neo Athlete Recovery &amp; Longevity Lounge, which BGSE Inc. produced during X Games Aspen 2026.',
      },
      { type: 'h2', text: 'A private reset space in the middle of competition week' },
      {
        type: 'p',
        html: 'X Games Aspen is built around big air, big crowds and big days of competition. Between those days, athletes need somewhere quiet to step off the mountain. That was the idea behind the Athlete Recovery &amp; Longevity Lounge, an invite-only space created exclusively for X Games athletes and presented by BTL’s Emsculpt Neo, an official X Games partner.',
      },
      {
        type: 'p',
        html: 'The lounge ran Friday, January 23 through Sunday, January 25, from 10:00 AM to 5:30 PM each day, in the Capitol Room at the St. Regis Hotel &amp; Spa in Aspen, Colorado. Athletes could stop by, reset and recover between competition days in a private, athlete-first environment, with Emsculpt Neo treatments designed to support muscle recovery, strength and performance.',
      },
      {
        type: 'p',
        html: 'BGSE Inc. produced the activation from concept through execution. Our goal was simple: make it easy for athletes to say yes, and make the space feel as considered as the athletes who walked through it.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/xgames-aspen/2.webp', alt: 'Dr. Jonathan Schoeff with Birk Ruud during an Emsculpt Neo treatment in the lounge', caption: 'Dr. Jonathan Schoeff with Birk Ruud' },
          { src: '/images/blog/xgames-aspen/3.webp', alt: 'Dr. Jonathan Schoeff talking with Lucas Foster during an Emsculpt Neo treatment', caption: 'Dr. Jonathan Schoeff with Lucas Foster' },
          { src: '/images/blog/xgames-aspen/5.webp', alt: 'Lucas Foster resting during an Exomind treatment', caption: 'Lucas Foster experiencing Exomind' },
        ],
      },
      { type: 'h2', text: 'The athletes we hosted' },
      { type: 'p', html: 'We were proud to welcome nine athletes into the lounge over the weekend:' },
      {
        type: 'ul',
        items: [
          'Lucas Foster',
          'Kenny Stills (NFL)',
          'Dane Menzies',
          'Jason Wolle',
          'Darcy Sharpe',
          'Jamie Anderson',
          'Tyler Nicholson',
          'Luca Harrington',
          'Birk Ruud',
        ],
      },
      { type: 'p', html: 'Thank you to each of them for taking time out of a packed competition schedule to stop in.' },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/xgames-aspen/7.webp', alt: 'Lucas Foster with Brittany Gilman at the lounge', caption: 'Lucas Foster and Brittany Gilman' },
          { src: '/images/blog/xgames-aspen/8.webp', alt: 'Jamie Anderson with Brittany Gilman at the lounge', caption: 'Jamie Anderson and Brittany Gilman' },
          { src: '/images/blog/xgames-aspen/9.webp', alt: 'Dane Menzies, Luca Harrington and Brittany Gilman at the Athlete Recovery & Longevity Lounge', caption: 'Dane Menzies, Luca Harrington and Brittany Gilman' },
          { src: '/images/blog/xgames-aspen/6.webp', alt: 'Birk Ruud on the treatment table in the lounge', caption: 'Birk Ruud' },
        ],
      },
      { type: 'h2', text: 'Why activations like this work' },
      {
        type: 'p',
        html: 'The best brand moments at major sporting events meet athletes where they already are. At X Games, that means giving them something useful during the hours between runs, in a setting that respects their time and privacy. A recovery lounge does that, and it lets a partner like BTL show up as a genuine part of the athlete experience.',
      },
      {
        type: 'p',
        html: 'That’s the approach we bring to every project at BGSE: build the experience around the athlete first, and the brand story follows.',
      },
      {
        type: 'p',
        html: 'Planning an activation for the winter season or beyond? <a href="/contact">Get in touch with BGSE Inc.</a> and let’s talk about what we can build together.',
      },
    ],
  },
  {
    slug: 'brittany-gilman-releases-new-sports-business-book',
    title: 'Brittany Gilman releases “No Stilettos on the Field”',
    date: '2026-04-29',
    category: 'News',
    excerpt:
      'After nearly two decades in the business of professional sports, BGSE and BPOP List CEO Brittany Gilman announces the release of her book, No Stilettos on the Field: Power, Politics and Pressure Inside the Business of Professional Sports.',
    cover: '/images/blog/book/cover.webp',
    coverAlt: 'Cover of No Stilettos on the Field by Brittany Gilman',
    blocks: [
      {
        type: 'p',
        html: 'After nearly two decades in the business of professional sports, BGSE and BPOP List CEO Brittany Gilman announces the release of her book, <em>No Stilettos on the Field: Power, Politics and Pressure Inside the Business of Professional Sports</em>. Available now.',
      },
      { type: 'img', src: '/images/blog/book/brittany.webp', alt: 'Brittany Gilman' },
      {
        type: 'p',
        html: 'The book is “an unfiltered look behind the curtain of an industry defined by power, pressure, politics, and performance.” It draws from real experiences: working with elite athletes, navigating complex relationships, and evolving alongside a rapidly changing global sports landscape.',
      },
      {
        type: 'p',
        html: 'Positioned as part memoir and part playbook, Gilman created the work to help athletes, professionals, and sports industry enthusiasts understand how the sector actually functions, and how to navigate it strategically.',
      },
      {
        type: 'p',
        html: 'The book covers athlete mindset, brand building, social media impact, NIL considerations, and the expanding intersection of sports, culture, and entertainment.',
      },
      { type: 'cta', href: 'https://amzn.to/4tF5OjW', label: 'Buy the book' },
    ],
  },
  {
    slug: 'olympic-athlete-recovery-experience',
    title: 'Olympic Athlete Recovery Experience',
    date: '2025-12-14',
    category: 'Activations',
    location: 'Beverly Hills, CA',
    excerpt:
      'Inside the Emsculpt Neo Olympic snowboard recovery experience: performance meets innovation with Shaun White, JJ Thomas, Zoe Kalapos and Brittany Gilman.',
    cover: '/images/blog/recovery/4.webp',
    coverAlt: 'Group photo at the Emsculpt Neo Olympic recovery experience',
    blocks: [
      { type: 'h2', text: 'Inside the Emsculpt Neo Olympic Snowboard Recovery Experience: Performance Meets Innovation' },
      {
        type: 'p',
        html: 'At BGSE Inc., we are always exploring innovative ways to support athletes beyond competition, from performance and recovery to brand-aligned experiences that genuinely add value. Recently, we produced a private <strong>Emsculpt Neo recovery activation</strong> bringing together elite snowboard athletes and industry leaders for a hands-on experience focused on muscle recovery, strength, and longevity.',
      },
      {
        type: 'p',
        html: "The activation featured snowboard icons Shaun White, JJ Thomas, Zoe Kalapos and BGSE's own Brittany Gilman, all of whom experienced Emsculpt Neo firsthand as part of a curated recovery and wellness session.",
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/recovery/1.webp', alt: 'Dr. A and Shaun White at the Emsculpt Neo recovery experience' },
          { src: '/images/blog/recovery/2.webp', alt: 'JJ Thomas at the Emsculpt Neo recovery experience' },
          { src: '/images/blog/recovery/3.webp', alt: 'Olympic snowboarder Zoe Kalapos at the Emsculpt Neo recovery experience' },
          { src: '/images/blog/recovery/5.webp', alt: 'Group photo at the Emsculpt Neo Olympic recovery experience' },
        ],
      },
      { type: 'h3', text: 'A Modern Approach to Athletic Recovery' },
      {
        type: 'p',
        html: 'Emsculpt Neo is a non-invasive treatment that combines radio frequency heat with high-intensity electromagnetic energy to stimulate deep muscle contractions while targeting fat reduction. For high-performance athletes, this dual approach supports muscle engagement, recovery, and overall conditioning, all without downtime.',
      },
      {
        type: 'p',
        html: 'During the activation, each participant received a personalized treatment, allowing them to experience how Emsculpt Neo can complement rigorous training schedules and recovery protocols. The session created space for conversation around performance optimization, injury prevention, and how technology continues to reshape modern athletic care.',
      },
      { type: 'h3', text: 'A Shared Experience Across Disciplines' },
      {
        type: 'p',
        html: 'What made the activation especially impactful was the diversity of experience in the room. From Olympic champions to next-generation athletes and business leaders in sport, the session fostered organic dialogue around wellness, recovery, and the evolving needs of elite competitors.',
      },
      {
        type: 'p',
        html: 'JJ Thomas, Shaun White, and Zoe Kalapos each brought their own perspectives shaped by years at the highest levels of competition. The shared experience reinforced a key theme: recovery is no longer optional. It is a strategic advantage.',
      },
      { type: 'h3', text: 'Where Performance, Wellness, and Brand Alignment Intersect' },
      {
        type: 'p',
        html: 'For BGSE Inc., this activation exemplified how meaningful brand experiences can live at the intersection of sports performance, wellness innovation, and authentic storytelling. Rather than a traditional endorsement model, the experience allowed athletes to engage with the technology in a real, tangible way, creating genuine connection and long-term value.',
      },
      {
        type: 'p',
        html: "As the sports landscape continues to evolve, experiences like this highlight the importance of investing in athlete wellness while creating thoughtful, aligned partnerships that resonate both on and off the field. We're excited to continue building moments that prioritize performance, recovery, and innovation, and to collaborate with brands pushing the future of sports forward.",
      },
      { type: 'p', html: '<em>Photos by Mike Dawsy.</em>' },
    ],
  },
  {
    slug: 'kellyn-acosta-joins-bgse',
    title: "BGSE Inc. welcomes US Men's National Team soccer star Kellyn Acosta to the family",
    date: '2025-12-13',
    category: 'News',
    excerpt:
      "BGSE Inc. is proud to announce that U.S. Men's National Team and Major League Soccer veteran Kellyn Acosta has joined the BGSE family.",
    cover: '/images/blog/acosta-joins/1.webp',
    coverAlt: 'Kellyn Acosta',
    blocks: [
      {
        type: 'p',
        html: "BGSE Inc. is proud to announce that U.S. Men's National Team and Major League Soccer veteran Kellyn Acosta has joined the BGSE family. A proven competitor at the highest levels of the game, Acosta brings leadership, discipline, and versatility that extend well beyond his performance on the field.",
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/acosta-joins/3.webp', alt: 'Kellyn Acosta' },
          { src: '/images/blog/acosta-joins/4.webp', alt: 'Kellyn Acosta' },
          { src: '/images/blog/acosta-joins/5.webp', alt: 'Kellyn Acosta' },
          { src: '/images/blog/acosta-joins/2.webp', alt: 'Kellyn Acosta' },
        ],
      },
      {
        type: 'p',
        html: 'Off the pitch, Acosta founded the <a href="https://www.kellynacostafoundation.org/" target="_blank" rel="noreferrer">Kellyn Acosta Foundation</a>, which focuses on raising awareness and funds for disadvantaged and disabled youth in local communities. He believes soccer can unify communities and help educate the leaders of tomorrow.',
      },
      {
        type: 'p',
        html: "Together, BGSE and Acosta will develop his athlete brand across media, fashion, lifestyle, purpose-driven initiatives, and global opportunities as the sport continues to grow in the U.S. and internationally.",
      },
      {
        type: 'p',
        html: 'BGSE specializes in building athlete brands through strategic partnerships, storytelling, and cultural alignment. Our approach with Kellyn will amplify his voice, expand his presence across key markets, and create partnerships that feel authentic, intentional, and impactful.',
      },
      { type: 'p', html: 'Welcome to the family, Kellyn.' },
    ],
  },
  {
    slug: 'kellyn-acosta-the-chicago-bulls-unite-for-a-culture-forward-jersey-swap',
    title: 'Kellyn Acosta & the Chicago Bulls unite for a culture-forward jersey swap',
    date: '2025-11-16',
    category: 'Culture',
    location: 'Chicago, IL',
    excerpt:
      'At the intersection of sport, culture, and global influence, the jersey swap between USMNT and Chicago Fire star Kellyn Acosta and members of the Chicago Bulls was a moment of authentic connection.',
    cover: '/images/blog/acosta-bulls/1.webp',
    coverAlt: 'Kellyn Acosta and Dalen Terry exchange jerseys',
    blocks: [
      {
        type: 'p',
        html: 'At the intersection of sport, culture, and global influence, moments of authentic connection stand out, and the recent jersey swap between USMNT and Chicago Fire star Kellyn Acosta and members of the Chicago Bulls was exactly that.',
      },
      {
        type: 'p',
        html: "As one of the most respected figures in American soccer, Acosta continues to elevate not only his presence on the pitch but also his impact across the broader sports landscape. This jersey swap symbolizes more than a simple exchange. It represents the growing crossover between football (soccer) and basketball, and the global cultural currency shared by both communities.",
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/acosta-bulls/2.webp', alt: 'Kellyn Acosta at the United Center' },
          { src: '/images/blog/acosta-bulls/3.webp', alt: 'Kellyn Acosta courtside at the Chicago Bulls game' },
          { src: '/images/blog/acosta-bulls/4.webp', alt: 'Kellyn Acosta and Andre Franco with Chicago Bulls players' },
          { src: '/images/blog/acosta-bulls/6.webp', alt: 'Kellyn Acosta holding a Chicago Bulls jersey' },
        ],
      },
      {
        type: 'p',
        html: "Hosted in Chicago on Monday, November 10th, the moment brought together two powerhouse athletic worlds, highlighting Acosta's rising profile and the Bulls' ongoing engagement with top athletes beyond the NBA. Jersey swaps have become an international symbol of mutual respect, camaraderie, and cultural unity, and this exchange underscores Acosta's strong influence both domestically and abroad.",
      },
      {
        type: 'p',
        html: 'Acosta exchanged jerseys with Chicago Bulls player Dalen Terry, and was accompanied by his teammate Andre Franco, who swapped jerseys with Noa Essengue.',
      },
      {
        type: 'p',
        html: 'Acosta sat courtside with Michelob Ultra for their “Mic’ed Up Moment” next to BGSE CEO and international sports agent Brittany Gilman.',
      },
      { type: 'img', src: '/images/blog/acosta-bulls/5.webp', alt: 'Kellyn Acosta and Brittany Gilman courtside' },
      {
        type: 'p',
        html: 'For brands, fans, and cultural tastemakers, these touchpoints reflect the new era of sport: one where athletes transcend their game, connect with new communities, and build bridges across leagues and continents. Kellyn Acosta continues to embody that evolution, and this Bulls collaboration is yet another example of the resonance he brings to the global sports conversation.',
      },
      {
        type: 'p',
        html: 'At BGSE, we are proud to help drive forward moments that spotlight the convergence of culture, sport, and storytelling. This jersey swap is one small chapter in a much larger narrative, and there is more to come.',
      },
    ],
  },
  {
    slug: 'odell-beckham-jr-frinds-monaco-grand-prix-party',
    title: 'Odell Beckham Jr. FRI&NDS Monaco Grand Prix Party',
    date: '2025-08-18',
    category: 'Events',
    location: 'Monaco',
    excerpt:
      "OBJ's FRI&NDS yacht soirée: art, music and purpose at the 2025 Monaco Grand Prix.",
    cover: '/images/blog/obj-monaco/hero.webp',
    coverAlt: 'Odell Beckham Jr. at the FRI&NDS Monaco Grand Prix party',
    blocks: [
      { type: 'h2', text: "OBJ's FRI&NDS Yacht Soirée: Art, Music & Purpose at Monaco Grand Prix 2025" },
      {
        type: 'p',
        html: 'On Friday, May 23rd, as Formula 1 arrived on the French Riviera, Odell Beckham Jr. hosted an invitation-only yacht gathering that went far beyond the typical motorsport celebration. The FRI&NDS soirée combined culture, artistic expression and community-focused purpose into one evening on the water.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/obj-monaco/12.webp', alt: 'Guests aboard the FRI&NDS yacht in Monaco' },
          { src: '/images/blog/obj-monaco/14.webp', alt: 'FRI&NDS Monaco Grand Prix party' },
          { src: '/images/blog/obj-monaco/13.webp', alt: 'Odell Beckham Jr. with guests in Monaco' },
          { src: '/images/blog/obj-monaco/1.webp', alt: 'Odell Beckham Jr. in Monaco' },
        ],
      },
      { type: 'h3', text: 'A Cultural Gathering with a Cause' },
      {
        type: 'p',
        html: 'The event brought together athletes, artists, influencers and business leaders, with guests including Devin Booker, Starino and Chanel Iman, a true cross-section of sport and entertainment.',
      },
      { type: 'h3', text: 'Art Meets Philanthropy' },
      {
        type: 'p',
        html: "Lisbon's Underdogs Gallery presented a curated exhibit, and street artist Vhils created a concrete piece auctioned for charity, with proceeds directed to Iminente's Bairros Project, supporting education and social development in Portuguese communities.",
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/obj-monaco/2.webp', alt: 'Press coverage of the FRI&NDS Monaco event' },
          { src: '/images/blog/obj-monaco/3.webp', alt: 'Press coverage of the FRI&NDS Monaco event' },
          { src: '/images/blog/obj-monaco/5.webp', alt: 'Press coverage of the FRI&NDS Monaco event' },
          { src: '/images/blog/obj-monaco/7.webp', alt: 'Press coverage of the FRI&NDS Monaco event' },
        ],
      },
      { type: 'h3', text: 'The Soundtrack of Identity' },
      {
        type: 'p',
        html: 'DJ HoneyLuv and the collective Paperwater carried the evening, while Spanish concept artist Fran Dmenchi offered complimentary tattoo sessions, an interactive experience merging visual and personal expression.',
      },
      {
        type: 'quote',
        text: "It's not about getting to the top of the mountain, but how many people you bring with you.",
        cite: 'Odell Beckham Jr.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/obj-monaco/10.webp', alt: 'FRI&NDS Monaco Grand Prix party' },
          { src: '/images/blog/obj-monaco/11.webp', alt: 'FRI&NDS Monaco Grand Prix party' },
          { src: '/images/blog/obj-monaco/15.webp', alt: 'Press coverage of the FRI&NDS Monaco event' },
          { src: '/images/blog/obj-monaco/16.webp', alt: 'Press coverage of the FRI&NDS Monaco event' },
        ],
      },
    ],
  },
  {
    slug: 'new-orleans-saints-chris-olave-visits-psg-during-paris-fashion-week',
    title: 'New Orleans Saints’ Chris Olave visits PSG during Paris Fashion Week',
    date: '2024-08-28',
    category: 'International',
    location: 'Paris, France',
    tags: ['Chris Olave', 'PSG', 'Saints'],
    excerpt:
      'In June 2024 during Paris Fashion Week, BGSE worked with the Saints and PSG to facilitate a collaboration with star WR Chris Olave.',
    cover: '/images/blog/olave-psg/hero.webp',
    coverAlt: 'Chris Olave at Parc des Princes',
    blocks: [
      {
        type: 'p',
        html: 'In June 2024 during Paris Fashion Week, BGSE worked with the Saints and PSG to facilitate a collaboration with star WR Chris Olave. Olave had the opportunity to visit Parc des Princes, getting a private tour and experiencing first-hand the VIP treatment.',
      },
      {
        type: 'p',
        html: 'Olave toured the stadium and locker room, created lots of behind-the-scenes content, and even threw and kicked around a few footballs.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/blog/olave-psg/1.webp', alt: 'Chris Olave seated in the PSG dugout' },
          { src: '/images/blog/olave-psg/2.webp', alt: 'Chris Olave at Parc des Princes' },
          { src: '/images/blog/olave-psg/3.webp', alt: 'Chris Olave in the PSG locker room' },
          { src: '/images/blog/olave-psg/4.webp', alt: 'Chris Olave on the pitch at Parc des Princes' },
        ],
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/home/g11.webp', alt: 'Chris Olave holding a football on the pitch' },
          { src: '/images/home/g14.webp', alt: 'Saints helmet on the PSG crest in the dressing room' },
          { src: '/images/home/g10.webp', alt: 'Chris Olave in the PSG dugout' },
          { src: '/images/home/g13.webp', alt: 'Chris Olave in the Parc des Princes tunnel' },
        ],
      },
    ],
  },
  {
    slug: 'brittany-gilman-amy-christophers-covid-19-sports',
    title: 'Brittany Gilman joins award-winning presenter Amy Christophers to discuss COVID-19 and its effects on sports worldwide',
    date: '2020-04-01',
    category: 'Media',
    excerpt:
      'Our CEO had an insightful chat with award-winning presenter Amy Christophers about the effects of COVID-19 on sports, athletes and the business across the world.',
    cover: yt('FNEkWwYpgA0'),
    coverAlt: 'Brittany Gilman and Amy Christophers interview',
    blocks: [
      {
        type: 'p',
        html: 'The COVID-19 pandemic is affecting the world, halting daily life and challenging each one of us to adapt. Sports across the globe have come to a standstill and many question when and if they will ever resume normalcy.',
      },
      {
        type: 'p',
        html: 'Our CEO and sports agent <a href="https://www.instagram.com/BGSport" target="_blank" rel="noreferrer">Brittany Gilman</a> had a very insightful chat with award-winning presenter <a href="https://www.instagram.com/thatsportsspice/" target="_blank" rel="noreferrer">Amy Christophers</a> (“That Sports Spice”) about the effects of COVID-19 on sports, the individual athletes and the business across the world.',
      },
      { type: 'video', id: 'FNEkWwYpgA0', title: 'What is the future of sport? How Coronavirus is affecting sport, USA vs UK. Part 1' },
    ],
  },
  {
    slug: 'jermon-bushrod-interview',
    title: 'Jermon Bushrod on SB Nation Radio',
    date: '2020-03-01',
    category: 'Media',
    excerpt:
      'Retired 13-year NFL veteran and Super Bowl champion Jermon Bushrod joined The Main Event on SB Nation Radio to discuss retirement, the new CBA proposal, healthcare for players and more.',
    cover: yt('_c4WdxrSh2k'),
    coverAlt: 'Jermon Bushrod interview',
    blocks: [
      {
        type: 'p',
        html: 'Retired 13-year NFL veteran and Super Bowl champion Jermon Bushrod joined The Main Event on SB Nation Radio to discuss retirement, the new CBA proposal, healthcare for players, franchise tags and more on the reality of the NFL.',
      },
      { type: 'video', id: '_c4WdxrSh2k', title: 'Jermon Bushrod SB Nation Interview, Feb 2020' },
    ],
  },
  {
    slug: 'super-bowl-liv',
    title: 'Super Bowl LIV: the BGSE wrap',
    date: '2020-02-25',
    category: 'Events',
    location: 'Miami, FL',
    tags: ['Super Bowl', 'Kayla Harrison', 'Jermon Bushrod', 'Kamaru Usman'],
    excerpt:
      "Super Bowl is always one of our favorite work weeks of the year. It's nonstop and exciting, full of media appearances, gifting suites, red carpets and the biggest athletes and celebrities from all over the globe.",
    cover: '/images/home/home-3.webp',
    coverAlt: 'Super Bowl week media row',
    blocks: [
      {
        type: 'p',
        html: "Super Bowl is always one of our favorite work weeks of the year. It's nonstop and exciting. Full of media appearances, gifting suites, red carpets, familiar faces and laced with the biggest and brightest athletes and celebrities from all over the globe. Then you have Miami. An entirely different vibe!",
      },
      {
        type: 'p',
        html: "We've been working Super Bowls for 14 years. What does that mean? We host talent, creating itineraries for them which include media appearances, interviews, red carpets and access to all the VIP events.",
      },
      {
        type: 'p',
        html: 'This year we hosted some unique talent including newly crowned PFL champion Kayla Harrison and Super Bowl champion and two-time Pro Bowler Jermon Bushrod. We also prepared itineraries for two-time UFC welterweight world champion Kamaru Usman and PFL champion Lance Palmer through our client Dominance.',
      },
      {
        type: 'p',
        html: 'We had a very busy day with Jermon Bushrod, our long-time friend and client of over 10 years, doing a media tour. Recently retired after 13 years, Bushrod hosts a very successful and entertaining podcast, <a href="https://linktr.ee/bamshow" target="_blank" rel="noreferrer">The Bush and Mee Show</a>.',
      },
      {
        type: 'p',
        html: "One of our favorite things to do for our clients is to provide access to the most exclusive and best events during Super Bowl week. This year was top notch, with an array of creative venues, musical artists and celebrities. We even got to see J-Lo walking around the Sports Illustrated party.",
      },
      { type: 'h3', text: 'Events we provided access to' },
      {
        type: 'ul',
        items: [
          'Glazerpalooza',
          'Pretty Little Thing Gift Lounge',
          'Celebrity South Beach Bowl',
          'NFLPA VIP Party',
          'EA Sports',
          'Rolling Stone',
          'Giuseppe Zanotti x Swae Lee cocktail reception',
          'Barstool Sports Party',
          'Ochocinco Celebrity Super Slam',
          "Shaq's Fun House",
          'Big Game Kickoff',
          'Adidas Gifting Suite',
          'Rosenhaus Welcome To Miami Kickoff',
          'Leather and Laces',
          'Bootsy on the Water',
          'DirecTV',
          'Leigh Steinberg Party',
          'iHeartRadio Big Game Kickoff',
          'All Star Celebrity Basketball Game',
          'Sports Illustrated',
          'Gronk Beach Party',
          'AT&T Super Saturday Night',
          'Maxim Party',
        ],
      },
      {
        type: 'p',
        html: "Overall it was a fantastic week! We're very grateful to all our clients for trusting BG Sports with their Super Bowl experience.",
      },
    ],
  },
  {
    slug: 'brittany-gilman-on-the-nat-coombs-show-on-espn',
    title: 'Brittany Gilman on The Nat Coombs Show on ESPN',
    date: '2019-11-18',
    category: 'Media',
    location: 'London, England',
    excerpt:
      'BG Sports CEO and international sports agent Brittany Gilman was featured on The Nat Coombs Show on ESPN, discussing the global sports business, NFL prospects, soccer and representing athletes as a woman in the industry.',
    blocks: [
      {
        type: 'p',
        html: 'Located in London, England, BG Sports CEO and international sports agent Brittany Gilman was featured on The Nat Coombs Show on ESPN. During the interview she addressed topics spanning the global sports business landscape, NFL prospects, soccer, and her perspective on representing athletes as a woman in the sports agent field.',
      },
      { type: 'quote', text: 'You have to move with the changing times and be innovative.', cite: 'Brittany Gilman' },
      {
        type: 'cta',
        href: 'https://play.acast.com/s/thenflshow/http%3A%2F%2Fwww.espn.com%2Fespnradio%2Fpodcast%3Fid%3D28072294',
        label: 'Listen to the interview',
      },
    ],
  },
  {
    slug: 'bgse-ceo-brittany-gilman-on-talk-sport-uk',
    title: 'Brittany Gilman on talkSPORT UK',
    date: '2019-11-11',
    category: 'Media',
    location: 'London, England',
    excerpt: 'BG Sports CEO Brittany Gilman joined host Will Gavin on Extra Time on talkSPORT UK.',
    blocks: [
      {
        type: 'p',
        html: 'BG Sports CEO Brittany Gilman had the pleasure of being on Extra Time with host Will Gavin on talkSPORT UK.',
      },
      { type: 'cta', href: 'https://talksport.com/radio/listen-again/1573261200/1573266600/', label: 'Listen again on talkSPORT' },
    ],
  },
  {
    slug: 'bg-sports-uk-hosting-olivier-giroud',
    title: 'BG Sports UK: hosting Olivier Giroud',
    date: '2019-11-02',
    category: 'International',
    location: 'London, England',
    tags: ['Chelsea', 'NFL UK'],
    excerpt:
      'For the third year in a row, BGSE hosted a high-profile footballer and facilitated an introduction and jersey swap with an American football player at Wembley.',
    cover: '/images/services/international.webp',
    coverAlt: 'Jersey swap at Wembley Stadium',
    blocks: [
      {
        type: 'p',
        html: 'For the third year in a row, BGSE hosted a high-profile footballer and facilitated an introduction and jersey swap with an American football player. BGSE was proud to host Chelsea superstar and French world champion Olivier Giroud for the October 27th Bengals vs. Rams game at Wembley.',
      },
      {
        type: 'p',
        html: 'BGSE also hosted client The Kess Group throughout the week, bringing them to the game VIP and to the Chelsea vs. Manchester United game on Wednesday, October 30th.',
      },
      {
        type: 'p',
        html: 'We love putting together superstars, and introducing Todd Gurley to Olivier was a lot of fun. The two met in the locker room post-game on Sunday, October 27th, 2019.',
      },
    ],
  },
  {
    slug: 'ufc-welterweight-world-champion-kamaru-usman-espys-2019',
    title: 'UFC Welterweight World Champion Kamaru Usman at the 2019 ESPYS',
    date: '2019-07-23',
    category: 'Events',
    location: 'Los Angeles, CA',
    tags: ['ESPYS', 'UFC', 'Kamaru Usman'],
    excerpt: 'BG Sports hosts its first UFC fighter for the 2019 ESPY Awards.',
    cover: '/images/portfolio/p04.webp',
    coverAlt: 'Kamaru Usman and Brittany Gilman on the ESPYS red carpet',
    blocks: [
      { type: 'h3', text: 'BG Sports hosts its first UFC fighter for the 2019 ESPY Awards' },
      {
        type: 'p',
        html: 'Several months after Usman dominated Tyron Woodley (Saturday, March 2nd, 2019) to become the UFC welterweight champion of the world, BG Sports was proud to host the champion for the 2019 ESPY Awards. The week was full of events including celebrity gifting suites, parties and red carpets.',
      },
      { type: 'video', id: '63Zl6Gblktc', title: 'Behind the scenes on the red carpet with Kamaru Usman' },
      {
        type: 'p',
        html: 'Usman attended the famous GBK Celebrity Gifting Suite in Beverly Hills, and the red carpet at the ESPYS was hot per usual with celebs and media everywhere. Usman did many interviews including ESPN, DISH Nation, TMZ and more.',
      },
      { type: 'img', src: '/images/portfolio/p06.webp', alt: "İlkay Gündoğan, Brittany Gilman and Kamaru Usman at The Players' Tribune party", caption: "Manchester City star İlkay Gündoğan, Brittany Gilman and Kamaru Usman at The Players' Tribune party, July 9th, 2019" },
    ],
  },
  {
    slug: 'bgse-espys-2019-wrap-hosting-manchester-city-fc-champion-ilkay-gundogan',
    title: 'ESPYS 2019 wrap: hosting Manchester City champion İlkay Gündoğan',
    date: '2019-07-17',
    category: 'Events',
    location: 'Los Angeles, CA',
    tags: ['ESPYS', 'Manchester City', 'Fashion'],
    excerpt:
      'This year we had the privilege of hosting a European superstar footballer, İlkay Gündoğan, for ESPYS week, ending with a spot on Esquire’s best-dressed list.',
    cover: '/images/portfolio/p03.webp',
    coverAlt: 'Ilhan Gündoğan, İlkay Gündoğan and Brittany Gilman at the 2019 ESPY Awards',
    blocks: [
      {
        type: 'p',
        html: "The second Wednesday in July. You could say it's the equivalent to the first Monday in May? Perhaps not, but we always enjoy ESPYS week and this year we had the privilege of hosting a European superstar footballer, İlkay Gündoğan. İlkay is a German professional footballer who plays as a midfielder for Premier League club Manchester City and the Germany national team.",
      },
      {
        type: 'p',
        html: 'He is also a champion, of many things. He won the Premier League and EFL Cup in 2018 and 2019, in addition to winning the FA Cup in 2019.',
      },
      { type: 'img', src: '/images/portfolio/p03.webp', alt: 'Ilhan Gündoğan, İlkay Gündoğan and Brittany Gilman at the 2019 ESPY Awards', caption: 'Ilhan Gündoğan (agent), İlkay Gündoğan and Brittany Gilman (CEO, BGSE) at the 2019 ESPY Awards' },
      {
        type: 'p',
        html: "The Players' Tribune party was, per usual, one of the best events of the week. The event was star-studded, with NFL, NBA and even Derek Jeter. There was a live performance by YG with the stage in the middle of the room, an intimate performance where you were almost on stage.",
      },
      {
        type: 'p',
        html: 'The ESPYS landed on Wednesday, July 10th this year. İlkay shone bright on the red carpet, making his arrival right behind NBA superstar Dwight Howard. The football fans came out for İlkay and he did many interviews including ESPN International, DISH Nation, ESPN and more.',
      },
      { type: 'video', id: 'j02AlUFI57Q', title: 'İlkay Gündoğan on the red carpet at the 2019 ESPY Awards' },
      {
        type: 'p',
        html: 'To top everything off, <a href="https://www.esquire.com/style/mens-fashion/g28351647/espy-awards-2019-red-carpet-best-dressed-men/?slide=10" target="_blank" rel="noreferrer">Esquire Magazine</a> named İlkay one of the top 10 best dressed.',
      },
      { type: 'img', src: '/images/portfolio/p05.webp', alt: 'İlkay Gündoğan on the ESPYS red carpet', caption: 'Credit: Getty Images' },
    ],
  },
  {
    slug: 'mayweather-wins-2nd-annual-50k-charity-challenge',
    title: 'Mayweather has the last laugh: Team Mayweather wins the 2nd annual 50K Charity Challenge by 40 points',
    date: '2019-07-16',
    category: 'Events',
    location: 'Los Angeles, CA',
    tags: ['ESPYS', 'The Kess Group'],
    excerpt:
      'ESPYS wrap: top moments from the 2019 50K Charity Challenge celebrity basketball game at UCLA’s Pauley Pavilion, co-produced by The Kess Group.',
    blocks: [
      { type: 'h3', text: 'Co-produced by The Kess Group' },
      {
        type: 'p',
        html: 'The annual ESPYS celebration returned with its signature multi-day lineup of exclusive events, red carpets and celebrity appearances. For the second consecutive year, BGSE client The Kess Group partnered to produce the <a href="https://50kcharitychallenge.com/" target="_blank" rel="noreferrer">50K Charity Challenge</a>, a celebrity basketball game hosted by Nick Cannon and DJ Felli Fel, pitting Team Floyd Mayweather against Team Gronk. Musical performances came from DaBaby and Ty Dolla $ign. UCLA’s Pauley Pavilion hosted the event on Monday, July 8th, launching ESPYS week.',
      },
      {
        type: 'p',
        html: 'The competition benefited multiple charitable causes with a minimum $50,000 contribution, and complimentary tickets supported youth programs, hospitals, public-service personnel, veterans and community organizations. The Monster Energy-sponsored event drew Julio Jones, Deshaun Watson, Rob Gronkowski, OBJ, Snoop Dogg, Nick Cannon, Ja Rule, Val Kilmer and many more.',
      },
      { type: 'h3', text: 'Team rosters' },
      {
        type: 'ul',
        items: [
          'Team Mayweather: Floyd Mayweather (captain), Eric Dickerson (coach), Chris Johnson (assistant coach), Nick Cannon, Terrell Owens, Roddy Ricch, Joe Haden, Pacman Jones, Cappie Pondexter, Michael Blackson, J’Leon Love, P-Reala, Natalie Nunn, Don Benjamin, Shiggy',
          'Team Gronk: Rob Gronkowski (captain), Kyle Kuzma (coach), Rashad Jennings, Cuttino Mobley, Nyjah Huston, Jarvis Landry, Yung Pinch, Jimmie Allen, Colton Underwood, Eric Bigger, Jenna Johnson, Chris Gronkowski, Dan Gronkowski, Bone Collector, Errol Spence Jr.',
        ],
      },
      {
        type: 'p',
        html: 'The evening’s defining moment came when Mayweather went one-on-one against Bone Collector and hit the floor, a clip that circulated widely online. In the end Team Mayweather prevailed by 40 points and Mayweather earned MVP honors.',
      },
      {
        type: 'quote',
        text: 'Wealth is something that is established. Rich is something that’s short.',
        cite: 'Floyd Mayweather, to TMZ after the game',
      },
    ],
  },
  {
    slug: 'jermon-bushrod-shares-heartbreaking-journey',
    title: 'Jermon Bushrod shares a heartbreaking journey',
    date: '2019-05-11',
    category: 'News',
    tags: ['Jermon Bushrod', 'Saints'],
    excerpt:
      'The Ed Block Courage Award winner discussed the death of his daughter, Jordyn Lynn, with Zach Gelb on CBS Sports Radio.',
    blocks: [
      {
        type: 'p',
        html: 'NFL offensive lineman Jermon Bushrod was named the Saints’ Ed Block Courage Award winner in December, after he and his wife endured <a href="https://people.com/parents/jermon-bushrod-wins-courage-award-after-baby-girl-dies/" target="_blank" rel="noreferrer">the loss of their one-week-old daughter</a> in October. The Ed Block Courage Award is given annually to a player from each NFL team who has persevered through adversity.',
      },
      {
        type: 'p',
        html: 'Bushrod’s wife, Jessica, gave birth to their daughter, Jordyn Lynn, who suffered from Wolf-Hirschhorn Syndrome. Jordyn Lynn was born October 11 and passed away October 18. Despite the loss, Bushrod remained with the Saints, helping them win four of their last five games to clinch a second straight NFC South title.',
      },
      {
        type: 'p',
        html: 'Bushrod dropped by The Zach Gelb Show on CBS Sports Radio to discuss his family’s emotional journey, thank the Saints for their support and offer hope to listeners.',
      },
      { type: 'quote', text: "God's not going to put us through anything that we can't handle. We're going to be better because of this.", cite: 'Jermon Bushrod' },
      {
        type: 'p',
        html: 'For more information on Bushrod’s 10th annual Visualize and Rize charity weekend, visit <a href="https://www.visualizeandrize.org" target="_blank" rel="noreferrer">VisualizeandRize.org</a>.',
      },
      { type: 'video', id: 'ET6zscFIekY', title: 'BG Sports at the 2018 Visualize and Rize Celebrity Golf Tournament' },
    ],
  },
  {
    slug: 'tracy-porter-european-branding-tour',
    title: 'Tracy Porter has a knack for fashion: a European branding tour to end 2018',
    date: '2019-01-10',
    category: 'International',
    location: 'London · Amsterdam · Milan',
    tags: ['Tracy Porter', 'Fashion'],
    excerpt:
      'A 12-day tour through London, Amsterdam and Milan built around fashion, new partnerships, media appearances and collaborations for the nine-year NFL veteran.',
    cover: yt('Zl6KFRg-WhM'),
    coverAlt: 'Tracy Porter with A Star Barbers in London',
    blocks: [
      {
        type: 'p',
        html: 'Tracy Porter has always had an eye for fashion. A nine-year NFL veteran and CEO/founder of the <a href="http://PhreshStart.org" target="_blank" rel="noreferrer">Phresh Start Foundation</a>, Porter has been meticulously picking out his outfits since he was a kid.',
      },
      { type: 'quote', text: "Growing up we didn't have much, but my appearance and what I wore always were important to me.", cite: 'Tracy Porter, in Amsterdam' },
      {
        type: 'p',
        html: 'Porter, who signed with BGSE in 2017, expressed his great interest in doing more in the international fashion world. Thus, BGSE embarked on a mission to create exactly what Porter desired: international opportunities that would open Porter to new markets and expand his reach. The 12-day tour began in early December 2018 in London, then Amsterdam, Milan, and ended back in London.',
      },
      {
        type: 'p',
        html: 'The tour had a fashion focus and included an exclusive boutique launch in Soho, London, where Porter attended the Lab Nine launch alongside UK influencer Sarah Mulindwa and designer Mason Smillie. He also attended the Dior holiday fashion party on New Bond Street, dressed to impress in Balmain, Burberry and Louis Vuitton.',
      },
      {
        type: 'p',
        html: 'In Amsterdam, Porter met former football star Michael Chopra and the exclusive celebrity designer <a href="https://www.instagram.com/ssdsusudio/" target="_blank" rel="noreferrer">Susudio</a>, an Amsterdam-based brand whose private clientele includes Floyd Mayweather, Rich Homie Quan, Tyson Beckford, YG and French Montana.',
      },
      {
        type: 'p',
        html: 'Next was Milan, where Porter met with Versace for a private tour of the Versace mansion, a sneak peek of the 2019 pre-fall collection fresh off the New York runway, and a private fitting with several stylists. A quick 22-hour turnaround and Porter was back in London for media opportunities with the NFL pod and a collaboration with celebrity barber A-Star Barbers.',
      },
      { type: 'video', id: 'Zl6KFRg-WhM', title: 'A Star Barbers and NFL player Tracy Porter play football' },
      { type: 'p', html: 'For more on Tracy Porter visit <a href="http://www.LyfeofTP.com" target="_blank" rel="noreferrer">LyfeofTP.com</a>.' },
    ],
  },
  {
    slug: 'antoine-bethea-bet-on-yourself',
    title: 'Antoine Bethea announces his first book, “Bet On Yourself: Inside the Mind of the Ultimate Underdog”',
    date: '2018-11-08',
    category: 'News',
    tags: ['Antoine Bethea', 'Arizona Cardinals'],
    excerpt:
      'The inside story of how a 5-foot-11 walk-on with zero scholarship offers became a Super Bowl champion and three-time Pro Bowler.',
    cover: yt('WCZgEeLLp3w'),
    coverAlt: 'Antoine Bethea Bet on Yourself book promo',
    blocks: [
      {
        type: 'p',
        html: 'He was too short, they said. Too light, they thought. By the time National Signing Day rolled around in February 2002, not a single Division 1 or Division 2 school had offered Antoine Bethea a football scholarship.',
      },
      {
        type: 'p',
        html: "At 5 feet 11 and 170 pounds, Bethea did not fit the mold of a college middle linebacker. But what those colleges couldn't measure was how much he wanted to succeed. Bethea attended Howard University and walked onto the team, determined to earn a scholarship. His bet on himself paid off, despite a series of setbacks and no shortage of doubters, as this ultimate underdog grew into a Super Bowl champion and three-time Pro Bowler thanks to seven core lessons he shares in this book.",
      },
      { type: 'ul', items: ['No Excuses, No Explanations', 'Take Slights Personally & Never Get Complacent', 'Stand For What You Believe In'] },
      { type: 'video', id: 'WCZgEeLLp3w', title: 'Antoine Bethea "Bet on Yourself" Book Promo' },
      {
        type: 'quote',
        text: 'If me, a 5-foot-nothing middle linebacker with zero college scholarship offers, can go on to play 13 years in the NFL, then you can also make your dreams come true, whatever they are, as long as you learn how to bet on yourself.',
        cite: 'Antoine Bethea',
      },
      { type: 'cta', href: 'http://www.AntoineBethea.com', label: 'AntoineBethea.com' },
    ],
  },
  {
    slug: 'jeremy-kerley-buffalo-bills-launches-dym-denim',
    title: 'Jeremy Kerley, Buffalo Bills, launches DYM Denim',
    date: '2018-08-31',
    category: 'Brand Launch',
    tags: ['Jeremy Kerley', 'Fashion'],
    excerpt:
      'After two years of development, Jeremy Kerley partnered with BG Sports Enterprises to introduce his DYM Denim collection.',
    cover: yt('ml_0fRF3sIc'),
    coverAlt: 'DYM Denim launch',
    blocks: [
      {
        type: 'p',
        html: 'After two years of development, Buffalo Bills wide receiver Jeremy Kerley partnered with BG Sports Enterprises to introduce his DYM Denim collection. The name references his three children, Dae’Shon, Y’manni and Ma’liyah. Kerley collaborated with BGSE President Brittany Gilman and LA-based clothing designer Bakar Bah to create the line.',
      },
      {
        type: 'p',
        html: 'The streetwear collection emphasizes quality and comfort, offering men’s jeans and shirts alongside women’s dresses and denim. The line launched in August 2018 with limited men’s black and stonewash denim releases.',
      },
      { type: 'quote', text: 'Your style is an expression of yourself. I created DYM to incorporate style but also be made for real life.', cite: 'Jeremy Kerley' },
      { type: 'video', id: 'ml_0fRF3sIc', title: 'NFL Star Jeremy Kerley DYM Denim Launch' },
      { type: 'video', id: 'Vo5F3t6PP4g', title: 'Jeremy Kerley DYM Denim launch party' },
    ],
  },
  {
    slug: 'ex-professional-athletes-perspective-sports-business-brittany-gilman',
    title: "An ex-professional athlete's perspective on the sports business",
    date: '2018-02-09',
    category: 'Media',
    excerpt:
      'Our CEO Brittany Gilman on “The Fixxx” on Dash Radio: sports business, families in sports, Colin Kaepernick, politics and more.',
    blocks: [
      {
        type: 'p',
        html: 'For those who don’t know, our CEO Brittany Gilman was a professional snowboarder for many years. She was also a strength and conditioning coach for USC Football and Auburn University Olympic Sports. BG Sports was established in 2007 as a sports marketing agency and has grown tremendously since, working with professional athletes in the NFL, boxing, Olympic sports and more.',
      },
      {
        type: 'p',
        html: 'Gilman gives a unique perspective on current events in our society, in the world of sports and sports business. Check out this interview on “The Fixxx” on Dash Radio, hosted by Nick Hamilton and Jason Fields. Topics include sports business, families in sports, Colin Kaepernick, politics and so much more.',
      },
      { type: 'cta', href: 'https://soundcloud.com/thefixxx', label: 'Listen on SoundCloud' },
    ],
  },
  {
    slug: 'bgse-ceo-brittany-featured-front-office-sports',
    title: 'Brittany Gilman featured in Front Office Sports',
    date: '2018-02-07',
    category: 'Media',
    excerpt: 'From the halfpipe to the boardroom: how Brittany Gilman has built an agency from the ground up.',
    blocks: [
      {
        type: 'p',
        html: 'Front Office Sports profiled BGSE CEO Brittany Gilman: “From the Halfpipe to the Boardroom: How Brittany Gilman Has Built an Agency From the Ground Up.”',
      },
      {
        type: 'cta',
        href: 'https://frntofficesport.com/from-the-halfpipe-to-the-boardroom-how-brittany-gilman-has-built-an-agency-from-the-ground-up/',
        label: 'Read the feature',
      },
    ],
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))

/** Earlier stories from the BGSE archive (2013–2020), titles and dates only. */
export const archive: { title: string; date: string }[] = [
  { title: 'From Athlete To Entrepreneur: 5 Work Ethic Lessons We Can Learn From Athletes', date: '2020-04-14' },
  { title: 'Tracy Porter predicts former team Chicago Bears’ role in NFL Playoffs', date: '2019-01-09' },
  { title: 'Congratulations Client Antoine Bethea, 2018 Cardinals Team Captain', date: '2018-09-05' },
  { title: 'Antoine Bethea, Pride, Joy and Happiness', date: '2018-07-30' },
  { title: 'Jeremy Kerley could prove a smart signing for Buffalo Bills', date: '2018-07-30' },
  { title: "Bills' Kerley uses what's important to him to keep from veering off course", date: '2018-06-14' },
  { title: 'NFL Veteran Antoine Bethea says the most important thing he’s learned is to pay attention to details', date: '2018-04-19' },
  { title: 'BG Sports CEO Brittany Gilman on SB Nation Radio “Sports Bosses”', date: '2018-02-07' },
  { title: 'Jeremy Kerley on the DA Show on CBS', date: '2018-02-07' },
  { title: "New York Jets' Jeremy Kerley on Fantasy BFFs", date: '2018-01-29' },
  { title: 'Miami Dolphins’ Jermon Bushrod on Fantasy Frenzy', date: '2018-01-29' },
  { title: 'Jeremy Kerley NFL Football and Cheer Camp 2017', date: '2017-04-23' },
  { title: 'Jeremy Kerley stellar in 49ers debut', date: '2016-09-14' },
  { title: 'Antoine Bethea very strong in Monday Night Football comeback', date: '2016-09-14' },
  { title: 'Antoine Bethea 2nd annual AB41 Turkey Drive', date: '2015-11-16' },
  { title: 'Antoine Bethea AB41 Training Camp Challenge', date: '2015-08-05' },
  { title: 'Antoine Bethea inducted into 2015 MEAC Hall of Fame', date: '2015-03-14' },
  { title: 'RB Darren McFadden acquired by Cowboys', date: '2015-03-14' },
  { title: 'BG Sports welcomes Tarell Brown', date: '2015-02-25' },
  { title: 'BGSE NFL Combine Gifting Suite recap', date: '2015-02-25' },
  { title: 'BGSE Super Bowl XLIX Gifting Suite recap', date: '2015-02-11' },
  { title: 'Congrats to Super Bowl XLIX champion Jonathan Casillas', date: '2015-02-06' },
  { title: 'BG Sports Celebrity Gifting Suite in honor of Super Bowl XLIX', date: '2015-01-21' },
  { title: 'Antoine Bethea and Kam Chancellor charity memorabilia raffle', date: '2015-01-21' },
  { title: 'Antoine Bethea named 49ers Team MVP', date: '2014-12-25' },
  { title: "Antoine Bethea's Turkey Drive", date: '2014-12-04' },
  { title: "Jeron Johnson's Just Give Food & Shoe Drive", date: '2014-12-02' },
  { title: 'Darren McFadden cover photo contest', date: '2014-11-18' },
  { title: 'Recap: BGSE & The PowerHouse Agency host inaugural Trendsetters Gifting Suite', date: '2014-11-08' },
  { title: 'New England Patriots land great talent in Casillas', date: '2014-11-05' },
  { title: 'BGSE Give Back Project ft. Jermon Bushrod', date: '2014-11-04' },
  { title: 'BG Sports CEO talks NFL on “Thursday Night Tailgate”', date: '2014-10-14' },
  { title: 'BG Sports CEO Brittany Gilman featured on “Shifting Work Podcast”', date: '2014-10-14' },
  { title: 'Jermon Bushrod featured on debut episode of Comcast SportsNet Original', date: '2014-10-07' },
  { title: 'Jonathan Casillas POV 52 Radio Show', date: '2014-10-04' },
  { title: "Antoine Bethea Mic'd Up against the Eagles", date: '2014-10-01' },
  { title: "Antoine Bethea named NFC Defensive Player of the Week", date: '2014-10-01' },
  { title: 'MLS midfielder/forward strikes deal with Pro-Tec Athletics', date: '2014-09-24' },
  { title: "Seahawks' Jeron Johnson's ten favorite things to do in Seattle", date: '2014-09-12' },
  { title: 'Jonathan Casillas “POV 52” radio show and clothing line launch', date: '2014-09-05' },
  { title: 'BGSE welcomes Seattle Seahawks Super Bowl champion Jeron Johnson to the family', date: '2014-08-23' },
  { title: 'The official Trendsetters Suite video in honor of the ESPYS', date: '2014-08-15' },
  { title: 'BGSE welcomes Antoine Bethea of the San Francisco 49ers to the family', date: '2014-07-26' },
  { title: '2014 Trendsetters Celebrity Gifting Experience in honor of the ESPYS', date: '2014-07-11' },
  { title: "Jonathan Casillas' Forward Progress Camp", date: '2014-05-31' },
  { title: 'BGSE CEO co-hosts “The Radio Show” with Michelle Joy Phelps, Lindsay McCormick and Radio Rahim', date: '2014-05-31' },
  { title: 'Jermon Bushrod’s 5th annual “Visualize and Rize” Celebrity Football Camp', date: '2014-05-16' },
  { title: 'Jermon Bushrod’s 4th annual “Visualize and Rize” Celebrity Charity Golf Tournament', date: '2014-05-16' },
  { title: 'Buccaneers’ Jonathan Casillas chats with 1League', date: '2014-05-16' },
  { title: 'Jonathan Casillas at the New Brunswick Celebrity Basketball Game', date: '2014-03-29' },
  { title: 'Darren McFadden re-signs with the Raiders', date: '2014-03-12' },
  { title: 'Jonathan Casillas re-signs with the Buccaneers', date: '2014-03-12' },
  { title: 'Will Allen re-signs with the Steelers', date: '2014-03-12' },
  { title: "Behind the scenes of Darren McFadden's commercial shoot for Soldier Sports", date: '2014-03-04' },
  { title: 'BGSE clients & happenings during Super Bowl XLVIII', date: '2014-02-21' },
  { title: 'Roman Harper baking beignets with NFL Network', date: '2013-12-17' },
  { title: 'Steelers’ Will Allen in the December issue of Pittsburgh Sports Report', date: '2013-12-09' },
  { title: 'Columbus Alive! “Things We Love” featuring Steelers’ Will Allen', date: '2013-12-02' },
  { title: 'Darren McFadden photoshoot', date: '2013-11-30' },
  { title: 'BG Sports Pre-ESPYS Celebrity Charity Pool Party', date: '2013-05-29' },
  { title: 'Sneak peek at Chad “Ochocinco” Johnson’s C.O.85 Timepieces', date: '2013-05-28' },
]
