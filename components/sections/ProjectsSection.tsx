import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site'

export default function ProjectsSection() {
  return (
    <section className="section-shell py-16">
      <div className="section-grid">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title text-wrap-balance">
            A few projects that show how I approach product and engineering
            together.
          </h2>
          <p className="section-copy">
            These are different in scope, but they share the same through-line:
            clean structure, practical tradeoffs, and a strong opinion about
            user value.
          </p>
        </div>
        <div className="grid gap-6">
          {siteContent.projects.map((project) => (
            <article
              key={project.key}
              className="overflow-hidden rounded-[1.75rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
            >
              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[240px] bg-[linear-gradient(135deg,var(--color-accent-soft),rgba(255,255,255,0.75))]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[color:var(--color-ink)]">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[color:var(--color-muted)]">
                    {project.shortDesc}
                  </p>
                  <div className="mt-6">
                    <Link href={project.link} className="button-secondary">
                      View Repository
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
