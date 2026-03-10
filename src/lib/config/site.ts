import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'github.com/andSoHenceforth',
  title: 'Allen\'s portfolio website',
  subtitle: '',
  lang: 'en-US',
  description: 'my personal website',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Allen',
    status: '🦖',
    bio: 'Mathematics, Computer Science and Physics student at Monash University',
    metadata: [
      {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/andSoHenceforth'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/andSoHenceforth'
      }
    ]
  },
  themeColor: '#AEC6CF'
}

