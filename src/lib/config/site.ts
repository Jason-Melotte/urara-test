import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Jason-SvelteKit-Urara Alpha',
  subtitle: 'My first play with SvelteKit',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Jason',
    status: '🌸',
    bio: 'Its Me'
  },
  // themeColor: '#3D4451'
  themeColor: '#F17105'
}
