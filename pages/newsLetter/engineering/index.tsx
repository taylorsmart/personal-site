import Layout from '@/components/layout/Layout'
import ArticleListPage from '@/components/articles/ArticleListPage'
import { getArticlesByCategory } from '@/utils/mdx'
import type { FrontMatter } from '@/types'

interface EngineeringIndexProps {
  articles: FrontMatter[]
}

export default function EngineeringIndex({ articles }: EngineeringIndexProps) {
  return (
    <Layout
      title="Engineering Writing"
      description="Engineering articles and system notes from Taylor Smart."
    >
      <ArticleListPage
        title="Engineering writing with a systems bias."
        description="Thoughts on implementation details, architecture, debugging, and the patterns that make software easier to reason about over time."
        articles={articles}
        activeCategory="engineering"
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await getArticlesByCategory('article-list', 'engineering')

  return {
    props: {
      articles,
    },
  }
}
