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
      <section className="section-shell pt-10">
        <div className="hero-panel">
          <Link
            href={categoryHref}
            className="category-pill inline-flex items-center gap-2 transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-wash)] hover:text-[color:var(--color-accent-deep)]"
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
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[color:var(--color-muted)]">
              {frontMatter.readingTime?.text ? (
                <span className="project-chip">
                  {frontMatter.readingTime.text}
                </span>
              ) : null}
              {frontMatter.wordCount ? (
                <span className="project-chip">
                  {frontMatter.wordCount} words
                </span>
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
