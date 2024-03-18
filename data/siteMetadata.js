/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Painterman's Blog",
  author: 'Vyshnav S Deepak',
  headerTitle: 'Painterman',
  description: 'My journey into full-stack development.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https:///painterman.pro',
  siteRepo: 'https://github.com/vyshnavsdeepak/painterman.pro',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'vyshnav.s.deepak@gmail.com',
  github: 'https://github.com/vyshnavsdeepak',
  twitter: 'https://x.com/vyshnavsdeepak',
  linkedin: 'https://www.linkedin.com/in/vyshnavsdeepak',
  locale: 'en-US',
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: '',
  },
}

module.exports = siteMetadata
