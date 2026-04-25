export interface FrontMatter {
  title: string
  summary: string
  excerpt: string
  imageLink?: string
  keyWords?: string[]
  references?: string[]
  slug?: string
  date?: string
  wordCount?: number
  category?: ArticleCategory
  path?: string
  readingTime?: {
    text: string
    minutes: number
    time: number
    words: number
  }
  content?: string
}

export interface MDXSource {
  compiledSource: string
  scope: Record<string, any>
  frontmatter: Record<string, any>
}

export interface Article {
  mdxSource: MDXSource
  frontMatter: FrontMatter
}

export type ArticleCategory = 'engineering' | 'product'

export interface SocialLink {
  label: string
  href: string
}

export interface SkillItem {
  key: string
  name: string
  image: string
}

export interface SkillCategory {
  key: string
  skillName: string
  skillList: SkillItem[]
}

export interface Project {
  key: string
  name: string
  link: string
  image: string
  shortDesc: string
  stack: string[]
}

export interface SiteProfile {
  name: string
  role: string
  location: string
  avatar: string
  intro: string
  longBio: string
  contactLabel: string
  links: {
    calendly: string
    github: string
    linkedin: string
    twitter: string
  }
}

export interface SiteContent {
  profile: SiteProfile
  principles: string[]
  skills: SkillCategory[]
  projects: Project[]
}

export interface AboutMeContent {
  name: string
  longBio: string
  avatar: string
  links: {
    calendly: string
  }
}

export interface TransitionConfig {
  enter: string
  enterFrom: string
  enterTo: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
  perc?: number
}

export interface ScrollTriggerOptions {
  threshold?: number
  rootMargin?: string
}
