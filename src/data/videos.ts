export type Video = { id: string; title: string; tag?: string }

/** BGSE YouTube channel: https://www.youtube.com/@Bgseinc */
export const channelUrl = 'https://www.youtube.com/@Bgseinc'

export const featuredVideo: Video = { id: '5mv0pndwJOE', title: 'BGSE', tag: 'Agency reel' }

export const videos: Video[] = [
  { id: '5mv0pndwJOE', title: 'BGSE', tag: 'Agency reel' },
  { id: 'cvfR1Y8d5-8', title: 'BG Sports Enterprises Inc.', tag: 'Agency' },
  { id: 'FBV2Ug6y0Sk', title: 'BPOP in space', tag: 'BPOP' },
  { id: '-DTxFNr61Bc', title: 'BPOP Super Bowl Pre-Launch Party & Sean Weatherspoon Foundation Benefit', tag: 'Events' },
  { id: '63Zl6Gblktc', title: 'Kamaru Usman, UFC Welterweight World Champion, ESPYS 2019', tag: 'ESPYS' },
  { id: 'j02AlUFI57Q', title: 'İlkay Gündoğan on the red carpet at the 2019 ESPY Awards', tag: 'ESPYS' },
  { id: '3xqZDMlukzM', title: 'İlkay Gündoğan at the 2019 ESPY Awards, red carpet', tag: 'ESPYS' },
  { id: '_c4WdxrSh2k', title: 'Jermon Bushrod SB Nation Interview, Feb 2020', tag: 'Media' },
  { id: 'U4IuV6gGMCk', title: 'Jermon Bushrod Side Hustle', tag: 'Media' },
  { id: 'Zl6KFRg-WhM', title: 'A Star Barbers and NFL player Tracy Porter play football', tag: 'International' },
  { id: 'ml_0fRF3sIc', title: 'NFL Star Jeremy Kerley DYM Denim Launch', tag: 'Brand launch' },
  { id: 'Vo5F3t6PP4g', title: 'Jeremy Kerley DYM Denim launch party', tag: 'Brand launch' },
  { id: 'cRQ-jTBiGgk', title: 'DYM', tag: 'Brand launch' },
  { id: 'WCZgEeLLp3w', title: 'Antoine Bethea "Bet on Yourself" Book Promo', tag: 'Brand launch' },
  { id: 'yWudnfWWvaY', title: 'Antoine Bethea highlight video', tag: 'Talent' },
  { id: 'ET6zscFIekY', title: 'BG Sports at the 2018 Visualize and Rize Celebrity Golf Tournament', tag: 'Community' },
  { id: 'rOAT0M_jIwY', title: 'NFL Draft 2016, behind the scenes with Ezekiel Elliott', tag: 'Talent' },
  { id: 'tnsq572RxP4', title: 'Phresh Start Foundation Holiday Drop 2017', tag: 'Community' },
  { id: 'UEpFIBzTFSU', title: 'Phresh Start Foundation Holiday Carnival 2017', tag: 'Community' },
  { id: 'UNTRQWPb7Pw', title: 'BGSE ESPYS Celebrity Gifting Suite Highlight Video 2015', tag: 'ESPYS' },
  { id: 'nNn0gSA47Y0', title: '2014 Celebrity Gifting Suite in honor of the ESPY Awards', tag: 'ESPYS' },
  { id: 'eON3syVvOTI', title: 'Trendsetters Red Carpet ESPYS Suite 2014', tag: 'ESPYS' },
  { id: 'BzDTv2lUBnE', title: 'SPKD GO 6', tag: 'Content' },
]

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
export const ytUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`
