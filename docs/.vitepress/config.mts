import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Data Platform',
  description: 'Documentation for the Data Platform',
  base: '/DataPlatform/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Platform', link: '/platform/overview' },
      { text: 'Stories', link: '/stories/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Platform',
        items: [
          { text: 'Overview', link: '/platform/overview' }
        ]
      },
      {
        text: 'Stories',
        items: [
          { text: "Children's Stories", link: '/stories/' },
          { text: 'The Day Data City Got Organized', link: '/stories/data-city-got-organized' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    search: {
      provider: 'local'
    }
  }
})
