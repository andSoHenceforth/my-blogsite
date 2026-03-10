import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'light',
    text: 'Light'
  },
 {
    name: 'dark',
    text: 'Dark'
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'about me!',
      link: '/about-me'
    },
    {
      text: 'resume',
      link: '/assets/resume.pdf'
    },
    {
      text: 'my projects',
      link: '/projects'
    },
    {
      text: 'various interests',
      children: [
        {text: 'travelling',
         link: '/travelling'
        },
        {text: 'creative writing',
          link: '/creative-writing'
        },
        {text: 'watching',
           link: '/watching'
        },
        {text: 'reading',
           link: '/reading'
        },
        {text: 'cooking',
           link: '/cooking'
        }  
      ]
    }
  ]
}

export const footer: FooterConfig = {
  /**
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
  */
}

export const date: DateConfig = {
  locales: 'en-UK',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
