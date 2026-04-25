import Layout from '@/components/layout/Layout'
import type { FrontMatter } from '@/types'
import { getAllFilesFrontMatter } from '@/utils/mdx'
import FeaturedWritingSection from '@/components/sections/FeaturedWritingSection'
import HomeHero from '@/components/sections/HomeHero'
import PrinciplesSection from '@/components/sections/PrinciplesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface HomeMainProps {
  featuredArticles: FrontMatter[]
}

export function HomePageContent({ featuredArticles }: HomeMainProps) {
  return (
    <>
      <HomeHero />
      <ScrollReveal className="reveal-quiet">
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal className="reveal-quiet" delay={40}>
        <ProjectsSection />
      </ScrollReveal>
      <PrinciplesSection />
      <ScrollReveal className="reveal-quiet">
        <FeaturedWritingSection articles={featuredArticles} />
      </ScrollReveal>
    </>
  )
}

export default function HomeMain(props: HomeMainProps) {
  return (
    <Layout
      title="Taylor Smart"
      description="Product-minded engineering portfolio, writing, and selected work from Taylor Smart."
    >
      <HomePageContent {...props} />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter('article-list')

  return {
    props: {
      featuredArticles: articles.slice(0, 3),
    },
  }
}
