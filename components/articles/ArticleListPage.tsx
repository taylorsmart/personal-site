import Link from 'next/link'
import type { FrontMatter, ArticleCategory } from '@/types'
import ArticleCard from './ArticleCard'

interface ArticleListPageProps {
  title: string
  description: string
  articles: FrontMatter[]
  activeCategory?: ArticleCategory
}

const categoryLinks = [
  { label: 'All Writing', href: '/newsLetter' },
  { label: 'Engineering', href: '/newsLetter/engineering' },
  { label: 'Product', href: '/newsLetter/product' },
]

function isActiveCategory(
  activeCategory: ArticleCategory | undefined,
  href: string
) {
  return (
    (activeCategory === 'engineering' && href === '/newsLetter/engineering') ||
    (activeCategory === 'product' && href === '/newsLetter/product') ||
    (!activeCategory && href === '/newsLetter')
  )
}

export default function ArticleListPage({
  title,
  description,
  articles,
  activeCategory,
}: ArticleListPageProps) {
  return (
    <div className="page-shell">
      <section className="section-shell pt-10">
        <div className="hero-panel">
          <div className="max-w-3xl">
            <p className="eyebrow">Writing</p>
            <h1 className="hero-title text-wrap-balance">{title}</h1>
            <p className="hero-copy max-w-2xl">{description}</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 pt-8">
        <div className="writing-layout">
          <aside className="writing-rail">
            <div className="writing-rail-panel">
              <p className="eyebrow">Browse</p>
              <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-ink)]">
                Collections
              </h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                Switch between all writing, engineering notes, and product
                essays.
              </p>
              <div className="mt-6 hidden gap-3 md:flex md:flex-col">
                {categoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      isActiveCategory(activeCategory, link.href)
                        ? 'border-[color:var(--color-accent)] bg-[color:var(--color-accent-wash)] text-[color:var(--color-accent-deep)]'
                        : 'border-[color:var(--color-border)] text-[color:var(--color-muted)] hover:border-[color:var(--color-pop)] hover:bg-[color:var(--color-pop-soft)] hover:text-[color:var(--color-ink)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <details className="mt-6 md:hidden">
                <summary className="writing-disclosure">
                  Open Writing Filters
                </summary>
                <div className="mt-3 flex flex-col gap-3">
                  {categoryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                        isActiveCategory(activeCategory, link.href)
                          ? 'border-[color:var(--color-accent)] bg-[color:var(--color-accent-wash)] text-[color:var(--color-accent-deep)]'
                          : 'border-[color:var(--color-border)] text-[color:var(--color-muted)] hover:border-[color:var(--color-pop)] hover:bg-[color:var(--color-pop-soft)] hover:text-[color:var(--color-ink)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </aside>

          <div className="writing-main">
            <div className="writing-main-header">
              <p className="category-pill">
                {articles.length} {articles.length === 1 ? 'entry' : 'entries'}
              </p>
            </div>
            <div className="border-t border-[color:var(--color-border)]">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))
              ) : (
                <p className="py-8 text-sm text-[color:var(--color-muted)]">
                  No entries published yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
