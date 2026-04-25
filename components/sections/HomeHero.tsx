import Image from 'next/image'
import Link from 'next/link'
import ShortBio from '@/content/meta/about-me/shortBio.md'
import { siteContent } from '@/content/site'

export default function HomeHero() {
  const { profile } = siteContent
  const heroSignals = [
    ['Focus', 'Full-stack systems'],
    ['Background', 'Engineering + product'],
    ['Style', 'Calm, rigorous, practical'],
  ]

  return (
    <section className="section-shell pt-6 md:pt-10">
      <div className="hero-panel">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_360px] lg:items-center">
          <div className="max-w-3xl">
            <div className="accent-rule accent-rule-pop" />
            <p className="eyebrow">{profile.role}</p>
            <h1 className="hero-title text-wrap-balance">
              Engineering judgment with product instincts.
            </h1>
            <p
              className="hero-copy hero-entrance max-w-2xl"
              style={{ animationDelay: '90ms' }}
            >
              {profile.intro}
            </p>
            <div
              className="hero-entrance mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: '160ms' }}
            >
              <span className="button-primary-shell button-bubble-hero">
                <Link href={profile.links.calendly} className="button-primary">
                  {profile.contactLabel}
                </Link>
              </span>
              <Link href="/newsLetter" className="button-secondary">
                Read the Writing
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroSignals.map(([label, value]) => (
                <div key={label} className="surface-card-compact">
                  <p className="stat-label">{label}</p>
                  <p className="stat-value">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="surface-card surface-card-emphasis hero-entrance border-t-4 border-t-[color:var(--color-pop)] lg:justify-self-end"
            style={{ animationDelay: '220ms' }}
            aria-label="Profile summary"
          >
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              width={280}
              height={280}
              priority
              className="mx-auto aspect-square w-44 rounded-lg object-cover md:w-52"
            />
            <div className="mt-5">
              <p className="text-lg font-semibold text-[color:var(--color-ink)]">
                {profile.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                {profile.location}
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link
                  href={profile.links.github}
                  className="category-pill transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-wash)] hover:text-[color:var(--color-accent-deep)]"
                >
                  GitHub
                </Link>
                <Link
                  href={profile.links.linkedin}
                  className="category-pill transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-wash)] hover:text-[color:var(--color-accent-deep)]"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 border-t border-[color:var(--color-border)] pt-6">
          <div className="article-prose max-w-4xl text-[color:var(--color-muted)]">
            <ShortBio />
          </div>
        </div>
      </div>
    </section>
  )
}
