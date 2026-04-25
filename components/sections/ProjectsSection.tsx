import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site'

export default function ProjectsSection() {
  const accentBorders = [
    'border-t-[color:var(--color-accent)]',
    'border-t-[color:var(--color-ink)]',
    'border-t-[color:var(--color-pop)]',
  ]
  const projectBubbleVariants = [
    'button-bubble-project-orbit',
    'button-bubble-project-cascade',
    'button-bubble-project-anchor',
  ]

  return (
    <section className="section-shell py-12 md:py-14">
      <div className="section-grid section-grid-feature">
        <div className="section-intro-compact section-intro-sticky">
          <div className="accent-rule" />
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
          {siteContent.projects.map((project, index) => (
            <article
              key={project.key}
              className={`reveal-item overflow-hidden rounded-lg border border-t-4 border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_14px_40px_rgba(48,76,100,0.07)] transition-colors hover:border-[color:var(--color-border-strong)] md:grid md:grid-cols-[0.86fr_1.14fr] ${accentBorders[index % accentBorders.length]}`}
            >
              <div className="relative min-h-[220px] bg-[linear-gradient(135deg,var(--color-accent-soft),rgba(245,245,245,0.75))] md:min-h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="project-chip">
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
                  <span
                    className={`button-primary-shell ${projectBubbleVariants[index % projectBubbleVariants.length]}`}
                  >
                    <Link href={project.link} className="button-primary">
                      View Repository
                    </Link>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
