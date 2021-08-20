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
  CalendarIcon,
} from '@heroicons/react/outline'

const content = {
  'name':'Taylor Smart',
  'avatar':'/assets/images/profileImage.svg',
  'links':{
    'linkedin':'linkedin link',
    'linkedinIcon':linkedin,
    'github':'github link',
    'githubIcon':githublogo,
    'twitter':'twitter link',
    'twitterIcon':twitter,
    'calendly':'/calendly',
    'calendlyIcon':twitter
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
      'name':'Name of Project',
      'link':'link to project',
      'image':'/assets/images/TS.svg',
      'penLink':null,
      'shortDesc':'this is a short description'
    },
    {
      'key':'pj-2',
      'name':'Name of Project2',
      'link':'link to project2',
      'image':'/assets/images/TS.svg',
      'penLink':null,
      'shortDesc':'this is a short description'
    },
    {
      'key':'pj-3',
      'name':'Name of Project3',
      'link':'link to project3',
      'image':'/assets/images/TS.svg',
      'penLink':null,
      'shortDesc':'this is a short description'
    }
  ]
}

export default content