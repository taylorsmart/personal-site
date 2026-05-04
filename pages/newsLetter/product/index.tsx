import Layout from '@/components/layout/Layout'
import ArticleListPage from '@/components/articles/ArticleListPage'
import { getArticlesByCategory } from '@/utils/mdx'
import type { FrontMatter } from '@/types'

interface ProductIndexProps {
  articles: FrontMatter[]
}

export default function ProductIndex({ articles }: ProductIndexProps) {
  return (
    <Layout
      title="Product Writing"
      description="Product articles and team notes from Taylor Smart."
    >
      <ArticleListPage
        title="Product writing from the delivery side."
        description="Notes on retrospectives, planning, communication, and the habits that help teams make better decisions for the user."
        articles={articles}
        activeCategory="product"
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await getArticlesByCategory('article-list', 'product')

  return {
    props: {
      articles,
    },
  }
}
