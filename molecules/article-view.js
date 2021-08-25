import NavBar from './nav-bar'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ArticleSubHeading from './atoms/article-sub-heading'
import {useRouter} from 'next/router'
import ChevronDoubleUp from '../public/assets/images/chevron-double-up.svg'

export default function ArticleView ({children, frontMatter}) {
  const router = useRouter()
  let newsType = router.query.newsType
  if(frontMatter){
      newsType = frontMatter.slug.includes("eng") ? 'eng' : 'prd'
  } else {

  }

  return (
    <>
     <Head>
        <title> {frontMatter.title} </title>
      </Head>
      <main>
        <NavBar/>
      </main>
      <div  className="flex items-center justify-center">
        <article className="prose m-6">
          <div className="text-center">
            <a
            href={`/newsLetter?newsType=${newsType}`}
            >
              <Image
                src={ChevronDoubleUp}
                className="z-1"
                height={29}
                width={29}
                alt="back"></Image>
            </a>
          </div>
          <h1 >{frontMatter.title}</h1>
        </article>
      </div>
      <div className="grid pl-6 border-b-4 border-double border-gray-300 pb-4 justify-center text-center md:justify-start md:text-left md:grid-cols-7 md:border-none md:pb-0 md:mb-0">
        <div className="md:col-start-3 md:col-span-3 md:border-b-4 md:border-double md:border-gray-300 md:pb-4 md:mb-6">
          <ArticleSubHeading timeToRead={frontMatter.readingTime}/>
        </div>
      </div>
      {/* <div className="grid pl-6 border-b-4 border-double border-gray-300 pb-4 justify-center text-center md:justify-start md:text-left md:grid-cols-7 md:border-none md:pb-0 md:mb-0">
        <div className="md:col-start-3 ">
          <Link
          href={`/newsLetter?newsType=${router.query.newsType}`}
          key="back"
          >
            <button>...back</button>
          </Link>
        </div>
      </div> */}
      <div  className="md:flex md:items-center md:justify-center pt-4 md:pt-0 max-w-screen">
        {children}
      </div>
    </>
  )
}


