import Link from 'next/link'
import type { ReactNode } from 'react'
import type { FrontMatter } from '@/types'

interface ArticlePageProps {
  frontMatter: FrontMatter
  children: ReactNode
}

export default function ArticlePage({
  frontMatter,
  children,
}: ArticlePageProps) {
  const categoryHref =
    frontMatter.category === 'product'
      ? '/newsLetter/product'
      : '/newsLetter/engineering'

  const categoryLabel =
    frontMatter.category === 'product' ? 'Product Notes' : 'Engineering Notes'

  return (
    <div className="page-shell">
      <section className="section-shell pt-16">
        <div className="hero-panel">
          <Link
            href={categoryHref}
            className="eyebrow inline-flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <span aria-hidden="true">←</span>
            Back to {categoryLabel}
          </Link>
          <div className="mt-6 max-w-3xl">
            <p className="eyebrow">{categoryLabel}</p>
            <h1 className="hero-title text-wrap-balance">
              {frontMatter.title}
            </h1>
            <p className="hero-copy max-w-2xl">
              {frontMatter.summary || frontMatter.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[color:var(--color-muted)]">
              {frontMatter.readingTime?.text ? (
                <span>{frontMatter.readingTime.text}</span>
              ) : null}
              {frontMatter.wordCount ? (
                <span>{frontMatter.wordCount} words</span>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 pt-10">
        <article className="article-prose">{children}</article>
      </section>
    </div>
  )
}
