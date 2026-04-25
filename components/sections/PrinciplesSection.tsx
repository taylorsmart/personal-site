import Methodology from '@/content/meta/about-me/methodology.md'
import { siteContent } from '@/content/site'

export default function PrinciplesSection() {
  return (
    <section className="section-shell py-16">
      <div className="section-grid">
        <div>
          <p className="eyebrow">How I Work</p>
          <h2 className="section-title text-wrap-balance">
            Strong products usually come from disciplined decisions, not
            improvisation.
          </h2>
          <ul className="mt-8 grid gap-4">
            {siteContent.principles.map((principle) => (
              <li
                key={principle}
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-5 py-4 text-sm leading-7 text-[color:var(--color-muted)]"
              >
                {principle}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.75rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 md:p-8">
          <div className="article-prose">
            <Methodology />
          </div>
        </div>
      </div>
    </section>
  )
}
