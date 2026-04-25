import Layout from '@/components/layout/Layout'
import ArticlePage from '@/components/articles/ArticlePage'
import { getArticlesByCategory, getFileBySlug } from '../../../utils/mdx'
import { MDXRemote } from 'next-mdx-remote'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Article } from '../../../types'

interface ArticlePageProps {
  mdxSource: Article['mdxSource']
  frontMatter: Article['frontMatter']
}

const components = {
  // Add custom components here if needed
}

export default function Article({ mdxSource, frontMatter }: ArticlePageProps) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.summary || frontMatter.excerpt}
    >
      <ArticlePage frontMatter={frontMatter}>
        <MDXRemote {...mdxSource} components={components} />
      </ArticlePage>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getArticlesByCategory('article-list', 'engineering')

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return {
      notFound: true,
    }
  }

  try {
    const post = await getFileBySlug('article-list', params.slug)
    return { props: post }
  } catch (error) {
    console.error('Error loading article:', error)
    return {
      notFound: true,
    }
  }
}
