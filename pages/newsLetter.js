import Head from 'next/head'
import {getAllFilesFrontMatter} from '../lib/mdx'
import ArticleCard from '../molecules/article-card'
import NavBar from '../molecules/nav-bar'
import 'tailwindcss/tailwind.css'
import {useRouter} from 'next/router'

export default function ArticleContainer({ posts }) {
  const router = useRouter()
  if(router.query.newsType) {
    // Filter on Product or Engineering
    posts = posts.filter((filename) => filename.slug.includes(router.query.newsType))
  }

  return (
    <>
      <Head>
        <title> Article </title>
      </Head>
      <main>
        <NavBar/>
      </main>
      <div class="max-w-screen grid sm:grid-cols-1 md:grid-cols-2 md:-mx-4 text-center m-4 justify-between gap-4">
        {posts.map((frontMatter) => <ArticleCard key={frontMatter.title} {...frontMatter} newsType={router.query.newsType} />)}
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Fetch blog posts
  const posts = await getAllFilesFrontMatter('article-list')
  return {props: { posts }}
}

