import Image from 'next/image'
import Link from 'next/link'
import type { FrontMatter } from '@/types'

interface ArticleCardProps {
  article: FrontMatter
}

export default function ArticleCard({ article }: ArticleCardProps) {
  if (article.hidden) {
    return null
  }

  const href = article.path ?? '#'
  const categoryLabel =
    article.category === 'product' ? 'Product Notes' : 'Engineering Notes'

  return (
    <article className="group grid gap-5 border-t border-[color:var(--color-border)] py-7 md:grid-cols-[128px_1fr] md:items-start md:gap-6">
      <Link
        href={href}
        className="relative block aspect-[5/4] overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] transition-colors group-hover:border-[color:var(--color-pop)]"
      >
        {article.imageLink ? (
          <Image
            src={article.imageLink}
            alt={article.title}
            width={440}
            height={280}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(135deg,var(--color-accent-soft),var(--color-pop-soft),var(--color-surface))] p-4">
            <span className="category-pill">{categoryLabel}</span>
          </div>
        )}
      </Link>
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-[color:var(--color-muted)]">
          <span className="category-pill">{categoryLabel}</span>
          {article.readingTime?.text ? (
            <span>{article.readingTime.text}</span>
          ) : null}
        </div>
        <h2 className="max-w-2xl text-xl font-semibold leading-tight text-[color:var(--color-ink)] md:text-[1.65rem]">
          <Link href={href} className="article-card-link transition-colors">
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[color:var(--color-muted)] md:text-base">
          {article.summary || article.excerpt}
        </p>
      </div>
    </article>
  )
}
