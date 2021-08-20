
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import NavBar from '../molecules/nav-bar'
import Home from './home'
import grayMatter from 'gray-matter';
import Link from 'next/link'


export default function Index() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Taylor Smart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
        <Home/>
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Taylor Smart & Next.js'}
          {/* <img src="/assets/images/TS.svg" alt="Made by Taylor Smart" className="Taylor Smart logo" /> */}
        </a>
      </footer>
    </div>
  )
}


