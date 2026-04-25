import Layout from '@/components/layout/Layout'
import HomeHero from '@/components/sections/HomeHero'
import PrinciplesSection from '@/components/sections/PrinciplesSection'
import SkillsSection from '@/components/sections/SkillsSection'

export default function About() {
  return (
    <Layout
      title="About"
      description="Background, principles, and areas of focus for Taylor Smart."
    >
      <HomeHero />
      <SkillsSection />
      <PrinciplesSection />
    </Layout>
  )
}
