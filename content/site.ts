import type { SiteContent } from '@/types'

export const siteContent: SiteContent = {
  profile: {
    name: 'Taylor Smart',
    role: 'Software Engineer + Product Builder',
    location: 'Based in the United States',
    avatar: '/assets/images/profileImagev3.jpg',
    intro: 'I build software to meet user needs.',
    longBio:
      'My background spans engineering, product management, and behavioral science. I like work where the product question and the implementation details have to be solved together.',
    contactLabel: 'Book a Conversation',
    links: {
      calendly: 'https://calendly.com/taylorsmart/30-minute-chat',
      github: 'https://github.com/taylorsmart',
      linkedin: 'https://www.linkedin.com/in/taylor-smart/',
      twitter: 'https://twitter.com/Taylor__Smart',
    },
  },
  principles: [
    'Make tradeoffs explicit before the team commits to a direction.',
    'Design interfaces around what the person should do next, not just what they try to do next.',
    'Keep product, design, and engineering in the same conversation.',
  ],
  skills: [
    {
      key: 'sk-1',
      skillName: 'Front End',
      skillList: [
        {
          key: 'fe-1',
          name: 'JavaScript',
          image: '/assets/logos/javascript.svg',
        },
        {
          key: 'fe-2',
          name: 'TypeScript',
          image: '/assets/logos/typescript.svg',
        },
        { key: 'fe-3', name: 'React', image: '/assets/logos/react.svg' },
        {
          key: 'fe-4',
          name: 'Material UI',
          image: '/assets/logos/materialUi.svg',
        },
        {
          key: 'fe-5',
          name: 'Bootstrap',
          image: '/assets/logos/bootstrap.svg',
        },
        { key: 'fe-6', name: 'CSS', image: '/assets/logos/css.svg' },
        { key: 'fe-7', name: 'HTML', image: '/assets/logos/html.svg' },
      ],
    },
    {
      key: 'sk-2',
      skillName: 'Back End',
      skillList: [
        { key: 'be-1', name: 'Node.js', image: '/assets/logos/node.svg' },
        { key: 'be-2', name: 'AWS', image: '/assets/logos/aws.svg' },
        { key: 'be-3', name: 'MongoDB', image: '/assets/logos/mongodb.svg' },
        {
          key: 'be-4',
          name: 'PostgreSQL',
          image: '/assets/logos/postgres.svg',
        },
        { key: 'be-5', name: 'Express', image: '/assets/logos/express.png' },
        { key: 'be-6', name: 'Docker', image: '/assets/logos/docker.svg' },
        { key: 'be-7', name: 'Jest', image: '/assets/logos/jest.svg' },
      ],
    },
    {
      key: 'sk-3',
      skillName: 'Product',
      skillList: [
        {
          key: 'pm-1',
          name: 'Agile Methodology',
          image: '/assets/logos/viewBoard.svg',
        },
        {
          key: 'pm-2',
          name: 'Roadmap Planning',
          image: '/assets/logos/planning.svg',
        },
        {
          key: 'pm-3',
          name: 'User Analytics',
          image: '/assets/logos/users.svg',
        },
        {
          key: 'pm-4',
          name: 'Wireframing',
          image: '/assets/logos/template.svg',
        },
        {
          key: 'pm-5',
          name: 'Behavioral Science',
          image: '/assets/logos/beaker.svg',
        },
        {
          key: 'pm-6',
          name: 'User Testing',
          image: '/assets/logos/userAdd.svg',
        },
        {
          key: 'pm-7',
          name: 'Risk Mitigation',
          image: '/assets/logos/fire.svg',
        },
      ],
    },
  ],
  projects: [
    {
      key: 'pj-1',
      name: 'Personal Site',
      link: 'https://github.com/taylorsmart/personal-site',
      image: '/assets/images/personal-site-image.svg',
      shortDesc:
        'A Next.js and Tailwind site for portfolio work and writing, built to keep content easy to maintain.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      key: 'pj-2',
      name: 'E-Commerce Backend',
      link: 'https://github.com/SDC-Team-Snowed-In/project-catwalk',
      image: '/assets/images/next-level-backend.svg',
      shortDesc:
        'A commerce backend built around response-time constraints, API shape, and an inherited frontend.',
      stack: ['Node.js', 'PostgreSQL', 'Express'],
    },
    {
      key: 'pj-3',
      name: 'nVision Nutrition',
      link: 'https://github.com/Nvision-Nutrition/nvision',
      image: '/assets/images/nvision.svg',
      shortDesc:
        'A mobile-first nutrition product built with a client team, balancing playful interaction with practical tracking.',
      stack: ['React', 'Next.js', 'Bootstrap'],
    },
  ],
}
