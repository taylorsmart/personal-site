import { getFiles,  getFileBySlug } from '../../../lib/mdx.js'
import DynamicComponent from '../../../molecules/atoms/dynamic-component'
import ArticleView from '../../../molecules/article-view'
import { MDXRemote } from 'next-mdx-remote'
import 'tailwindcss/tailwind.css'

export default function Article({mdxSource, frontMatter}) {
  return (
    <>
      <ArticleView frontMatter={frontMatter}>
        <article className="prose">
          <MDXRemote {...mdxSource} components={DynamicComponent} scope={frontMatter}   />
        </article>
      </ArticleView>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('article-list')

  return {
      paths: posts.map((p) => ({
          params: {
              slug: p.replace(/\.mdx/, '')
          }
      })),
      fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('article-list', params.slug)

  return { props: post }
}