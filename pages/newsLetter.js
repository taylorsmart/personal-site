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
    //sort according to id
    posts = posts.filter((filename) => filename.slug.includes(router.query.newsType)).sort((a,b) => b.slug.replace(/\D/g,'')-a.slug.replace(/\D/g,''))
  }

  //generate appropriate styling index
  let styleArray = []
  let setter = true
  let variation = true
  for(let i = 0; i < posts.length; i++){
    if(i % 2 === 0) {
      styleArray.push([setter,variation])
      variation = !variation
    } else {
      styleArray.push([setter,variation])
      setter= !setter
    }
  }

  return (
    <>
      <Head>
        <title> Article </title>
      </Head>
      <main>
        <NavBar/>
      </main>
      <div className="max-w-screen grid sm:grid-cols-1 md:grid-cols-5 md:m-8 text-center m-4 justify-between gap-1">
        {posts.map((frontMatter, index) => <ArticleCard key={frontMatter.title} {...frontMatter} newsType={router.query.newsType} styleArray={styleArray} index={index} />)}
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Fetch blog posts
  const posts = await getAllFilesFrontMatter('article-list')
  return {props: { posts }}
}

