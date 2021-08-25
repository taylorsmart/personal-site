import {
  MailIcon,
  CalendarIcon,
  PencilIcon,
  SupportIcon,
} from '@heroicons/react/outline'
import content from './about-me/about-me-content'


const sitemap = [
  // {
  //   'page':'About',
  //   'key':1,
  //   'primaryLink':'/about',
  //   'subLinks':[],
  //   'keyArticles': []
  // },
  {
    'page':'Engineering',
    'key':3,
    'primaryLink':'/newsLetter?newsType=eng',
    'subLinks':
      [
        {
          name: 'Engineering Blog',
          description: 'Notes on my path to become a better engineer.',
          href: '/newsLetter?newsType=eng',
          icon: PencilIcon,
        },
        // {
        //   name: 'Projects',
        //   description: 'A handful of projects I\'ve worked on.',
        //   href: '#',
        //   icon: SupportIcon,
        // },
      ],
    'keyArticles': [
      { id: 'eng-1', name: 'Aysnchronous Behavior in Javascript', href: '/newsLetter/engineering/eng1?newsType=eng' },
      { id: 'eng-2', name: 'Integrating Next.js with tailwind css', href: '/newsLetter/engineering/eng2?newsType=eng' },
      { id: 'eng-3', name: 'My lessons teaching JavaScript', href: '/newsLetter/engineering/eng3?newsType=eng' },
    ]
  },
  {
    'page':'Product',
    'key':2,
    'primaryLink':'/newsLetter?newsType=prd',
    'subLinks':
      [
        {
          name: 'Product Blog',
          description: 'Product analysis with a behavioral science twist.',
          href: '/newsLetter?newsType=prd',
          icon: PencilIcon,
        },
    ],
    'keyArticles': [
      { id: 'prd1', name: 'Boost your conversion rate', href: '/newsLetter/product/prd1?newsType=prd' },
      { id: 'prd-2', name: 'How to use search engine optimization to drive traffic to your site', href: '/newsLetter/product/prd2?newsType=prd' },
      { id: 'prd-3', name: 'Improve your customer experience', href: '/newsLetter/product/prd3?newsType=prd' },
    ]
  },
  {
    'page':'Contact',
    'key':4,
    'primaryLink':content.links.calendly,
    'subLinks': [
      // {
      //   name: 'Email',
      //   description: 'Send me an email.',
      //   href: '#',
      //   icon: MailIcon,
      // },
      {
        name: 'Book a Meeting',
        description: 'Schedule a meeting to chat with me directly.',
        href: 'https://calendly.com/taylorsmart/30-minute-chat',
        icon: CalendarIcon,
      },
    ],
    'keyArticles': []
  }
]

export default sitemap