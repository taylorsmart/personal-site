import {
  githublogo,
  linkedin,
  github,
  twitter,
  aws,
  bootstrap,
  css,
  docker,
  express,
  gcp,
  html,
  javascript,
  jest,
  materialUI,
  mongo,
  node,
  npm,
  postgres,
  react,
  typescript,
  webpack,
  beaker,
  cube,
  mobile,
  template,
  users,
  viewBoard,
  support,
  fire,
  planning,
  userAdd,
} from '../../../public/assets/logos';
import {
  MailIcon,
} from '@heroicons/react/outline'
import calendarIcon from '../../../public/assets/images/calendarIcon.svg'

const content = {
  'name':'Taylor Smart',
  'avatar':'/assets/images/profileImage.svg',
  'links':{
    'linkedin':'https://www.linkedin.com/in/taylor-smart/',
    'linkedinIcon':linkedin,
    'github':'https://github.com/taylorsmart',
    'githubIcon':githublogo,
    'twitter':'https://twitter.com/Taylor__Smart',
    'twitterIcon':twitter,
    'calendly':'https://calendly.com/taylorsmart/30-minute-chat',
    'calendlyIcon':calendarIcon
  },
  skills:[
    {
      'key':'sk-1',
      'skillName':'Front End',
      'skillList':[
        {
          'key':'fe-1',
          'name':'JavaScript',
          'image':javascript,
        },
        {
          'key':'fe-2',
          'name':'TypeScript',
          'image':typescript,
        },
        {
          'key':'fe-3',
          'name':'React',
          'image':react,
        },
        {
          'key':'fe-4',
          'name':'MaterialUI',
          'image':materialUI,
        },
        {
          'key':'fe-5',
          'name':'Bootstrap',
          'image':bootstrap,
        },
        {
          'key':'fe-6',
          'name':'CSS',
          'image':css,
        },
        {
          'key':'fe-7',
          'name':'HTML',
          'image':html,
        }
      ],
    },
    {
      'key':'sk-2',
      'skillName':'Back End',
      'skillList':[
        {
          'key':'be-1',
          'name':'Node.js',
          'image':node
        },
        {
          'key':'be-2',
          'name':'AWS',
          'image':aws
        },
        {
          'key':'be-3',
          'name':'MongoDB',
          'image':mongo
        },
        {
          'key':'be-4',
          'name':'PostgreSQL',
          'image':postgres
        },
        {
          'key':'be-5',
          'name':'Express',
          'image':express
        },
        {
          'key':'be-6',
          'name':'Docker',
          'image':docker
        },
        {
          'key':'be-7',
          'name':'Jest',
          'image':jest
        }
      ],
    },
    {
      'key':'sk-3',
      'skillName':'Product',
      'skillList':[
        {
          'key':'pm-1',
          'name':'Agile Methodology',
          'image':viewBoard
        },
        {
          'key':'pm-2',
          'name':'Roadmap Planning',
          'image':planning
        },
        {
          'key':'pm-3',
          'name':'User Analytics',
          'image':users
        },
        {
          'key':'pm-4',
          'name':'Wireframing',
          'image':template
        },
        {
          'key':'pm-5',
          'name':'Behavioral Science',
          'image':beaker
        },
        {
          'key':'pm-6',
          'name':'User Testing',
          'image':userAdd
        },
        {
          'key':'pm-7',
          'name':'Risk Mitigation',
          'image':fire
        }
      ],
    }
  ],
  'projectList':[
    {
      'key':'pj-1',
      'name':'Personal Site',
      'link':'https://github.com/taylorsmart/personal-site',
      'image':'/assets/images/personal-site-image.svg',
      'penLink':null,
      'shortDesc':'This site uses Javascript, Next.js, and tailwindcss. It required a deep understanding of both the tailwind framework & the rendering procedure for Next.js in order to construct it appropriately. '
    },
    {
      'key':'pj-2',
      'name':'E-Commerce Backend',
      'link':'https://github.com/SDC-Team-Snowed-In/project-catwalk',
      'image':'/assets/images/next-level-backend.svg',
      'penLink':null,
      'shortDesc':'Developing the backend for the Next-Level Ecommerce showcases my abilities with Node.js, PostgreSQL, and Express.  The frontend for this site was legacy code and we were tasked with meeting challenging user demands for speed and api efficiency.'
    },
    {
      'key':'pj-3',
      'name':'nVision Nutrition',
      'link':'https://github.com/Nvision-Nutrition/nvision',
      'image':'/assets/images/nvision.svg',
      'penLink':null,
      'shortDesc':'This fullstack, mobile-first, application was developed using React, Next.js, and Bootstrap.  I worked with a team of developers to create an application for our clients daughter to help her better track her caloric intake in a childishly fun & appealing way.'
    }
  ]
}

export default content