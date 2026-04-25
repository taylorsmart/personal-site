import Methodology from '@/content/meta/about-me/methodology.md'
import { siteContent } from '@/content/site'

export default function PrinciplesSection() {
  return (
    <section className="section-shell py-12 md:py-14">
      <div className="section-header">
        <div>
          <div className="accent-rule" />
          <p className="eyebrow">How I Work</p>
          <h2 className="section-title text-wrap-balance">
            Strong products usually come from disciplined decisions, not
            improvisation.
          </h2>
        </div>
        <p className="section-copy md:justify-self-end">
          The work should feel clear before it feels clever. These principles
          keep tradeoffs visible and decisions grounded.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <ul className="grid gap-4">
          {siteContent.principles.map((principle) => (
            <li key={principle} className="principle-item reveal-item">
              {principle}
            </li>
          ))}
        </ul>
        <div className="surface-card">
          <div className="article-prose">
            <Methodology />
          </div>
        </div>
      </div>
    </section>
  )
}
