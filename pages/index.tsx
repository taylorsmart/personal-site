import type { InferGetStaticPropsType } from 'next'
import Layout from '@/components/layout/Layout'
import { HomePageContent, getStaticProps } from './home'

export { getStaticProps }

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout
      title="Taylor Smart"
      description="Engineering, product management, and creative writing from Taylor Smart."
    >
      <HomePageContent {...props} />
    </Layout>
  )
}
