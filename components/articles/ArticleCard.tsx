import Image from 'next/image'
import Link from 'next/link'
import type { FrontMatter } from '@/types'

interface ArticleCardProps {
  article: FrontMatter
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const href = article.path ?? '#'
  const categoryLabel =
    article.category === 'product' ? 'Product Notes' : 'Engineering Notes'

  return (
    <article className="group grid gap-5 border-t border-[color:var(--color-border)] py-7 md:grid-cols-[128px,1fr] md:items-start md:gap-6">
      <Link
        href={href}
        className="relative block aspect-[5/4] overflow-hidden rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_55%)]" />
        {article.imageLink ? (
          <Image
            src={article.imageLink}
            alt={article.title}
            width={440}
            height={280}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(135deg,var(--color-accent-soft),var(--color-surface))] p-4">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
              {categoryLabel}
            </span>
          </div>
        )}
      </Link>
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-[color:var(--color-muted)]">
          <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em]">
            {categoryLabel}
          </span>
          {article.readingTime?.text ? (
            <span>{article.readingTime.text}</span>
          ) : null}
        </div>
        <h2 className="max-w-2xl text-xl font-semibold leading-tight text-[color:var(--color-ink)] md:text-[1.65rem]">
          <Link href={href} className="transition-opacity hover:opacity-80">
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
