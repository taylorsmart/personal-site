import type { AppProps } from 'next/app'
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${bodyFont.variable} ${displayFont.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
