import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
   
    
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Photography',
      href: "https://rainbowmarks.com/",
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Search',
      href: getPermalink('/search'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: "Chris Hammond's Web Site",
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'AutocrossBlog.com', href: "https://www.autocrossblog.com"},
    { text: 'CollectorOfJack.com', href: "https://www.CollectorOfJack.com"},
    { text: 'RainbowMarks Photography', href: "https://rainbowmarks.com"},
    
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/christoc' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/christoc' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/christoc' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://www.chrishammond.com/"> Chris Hammond</a> · All rights reserved.
  `,
};
