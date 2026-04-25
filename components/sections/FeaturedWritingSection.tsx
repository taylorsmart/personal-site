import type { FrontMatter } from '@/types'
import ArticleCard from '@/components/articles/ArticleCard'

interface FeaturedWritingSectionProps {
  articles: FrontMatter[]
}

export default function FeaturedWritingSection({
  articles,
}: FeaturedWritingSectionProps) {
  return (
    <section className="section-shell py-12 md:py-14">
      <div className="section-grid section-grid-feature">
        <div className="section-intro-compact section-intro-sticky">
          <div className="accent-rule accent-rule-pop" />
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
            <div key={article.slug} className="reveal-item">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
