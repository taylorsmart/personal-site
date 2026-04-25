import type { FrontMatter } from '@/types'
import ArticleCard from '@/components/articles/ArticleCard'

interface FeaturedWritingSectionProps {
  articles: FrontMatter[]
}

export default function FeaturedWritingSection({
  articles,
}: FeaturedWritingSectionProps) {
  return (
    <section className="section-shell py-16">
      <div className="section-grid section-grid-writing">
        <div className="section-intro-compact">
          <p className="eyebrow">Writing</p>
          <h2 className="section-title text-wrap-balance">
            Notes on engineering systems, product thinking, and the tradeoffs in
            between.
          </h2>
          <p className="section-copy">
            The writing is intentionally practical. These are the kinds of ideas
            that help teams reason more clearly, not just ship more quickly.
          </p>
        </div>
        <div className="border-t border-[color:var(--color-border)]">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
