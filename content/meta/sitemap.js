import {
  MailIcon,
  CalendarIcon,
  PencilIcon,
  SupportIcon,
} from '@heroicons/react/outline'
import content from './about-me/about-me-content'


const sitemap = [
  {
    'page':'About',
    'key':1,
    'primaryLink':'/about',
    'subLinks':[],
    'keyArticles': []
  },
  {
    'page':'Engineering',
    'key':3,
    'primaryLink':'/engineering/home',
    'subLinks':
      [
        {
          name: 'Engineering Blog',
          description: 'Notes on my path to become a better engineer.',
          href: '/newsLetter?newsType=eng',
          icon: PencilIcon,
        },
        {
          name: 'Projects',
          description: 'A handful of projects I\'ve worked on.',
          href: '#',
          icon: SupportIcon,
        },
      ],
    'keyArticles': [
      { id: 'eng-1', name: 'Using MongoDB efficiently', href: '#' },
      { id: 'eng-2', name: 'Integrating Next.js with tailwind css', href: '#' },
      { id: 'eng-3', name: 'My lessons teaching JavaScript', href: '#' },
    ]
  },
  {
    'page':'Product',
    'key':2,
    'primaryLink':'/product/home',
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
      { id: 'prd1', name: 'Boost your conversion rate', href: '/product?id=prd-1' },
      { id: 'prd-2', name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
      { id: 'prd-3', name: 'Improve your customer experience', href: '#' },
    ]
  },
  {
    'page':'Contact',
    'key':4,
    'primaryLink':content.links.calendly,
    'subLinks': [
      {
        name: 'Email',
        description: 'Send me an email.',
        href: '#',
        icon: MailIcon,
      },
      {
        name: 'Book a Meeting',
        description: 'Schedule a meeting to chat with me directly.',
        href: '#',
        icon: CalendarIcon,
      },
    ],
    'keyArticles': []
  }
]

export default sitemap