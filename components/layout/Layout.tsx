import type { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from './NavBar'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import { siteContent } from '@/content/site'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function Layout({
  children,
  title = 'Taylor Smart',
  description = 'Engineering, product, and systems thinking from Taylor Smart.',
  image = '/assets/images/personal-site-image.png',
  url = 'https://taylorsmart.dev',
}: LayoutProps) {
  const siteTitle = title === 'Taylor Smart' ? title : `${title} | Taylor Smart`

  return (
    <ErrorBoundary>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f1e8" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-ink)]">
        <NavBar />
        <main id="main-content">{children}</main>
        <footer className="section-shell pb-12 pt-4">
          <div className="rounded-[2rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-8 md:px-8">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="eyebrow">Stay in Touch</p>
                <h2 className="section-title text-wrap-balance">
                  Interested in thoughtful engineering and product work?
                </h2>
                <p className="section-copy max-w-2xl">
                  I like teams that care about substance, clarity, and building
                  products people actually want to use.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href={siteContent.profile.links.github}
                  className="button-secondary"
                >
                  GitHub
                </Link>
                <Link
                  href={siteContent.profile.links.linkedin}
                  className="button-secondary"
                >
                  LinkedIn
                </Link>
                <Link
                  href={siteContent.profile.links.calendly}
                  className="button-primary"
                >
                  {siteContent.profile.contactLabel}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}
