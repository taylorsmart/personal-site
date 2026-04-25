import Layout from '@/components/layout/Layout'
import ArticleListPage from '@/components/articles/ArticleListPage'
import { getAllFilesFrontMatter } from '@/utils/mdx'
import type { FrontMatter } from '@/types'

interface NewsLetterIndexProps {
  articles: FrontMatter[]
}

export default function NewsLetterIndex({ articles }: NewsLetterIndexProps) {
  return (
    <Layout
      title="Writing"
      description="Engineering and product writing from Taylor Smart."
    >
      <ArticleListPage
        title="Writing on engineering, product, and how good decisions get made."
        description="A running set of notes on systems, execution, team dynamics, and the practical tradeoffs that shape modern product development."
        articles={articles}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter('article-list')

  return {
    props: {
      articles,
    },
  }
}
