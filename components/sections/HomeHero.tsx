import Image from 'next/image'
import Link from 'next/link'
import ShortBio from '@/content/meta/about-me/shortBio.md'
import { siteContent } from '@/content/site'

export default function HomeHero() {
  const { profile } = siteContent

  return (
    <section className="section-shell pt-10 md:pt-16">
      <div className="hero-panel">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{profile.role}</p>
            <h1 className="hero-title text-wrap-balance">
              Engineering judgment with product instincts.
            </h1>
            <p className="hero-copy max-w-2xl">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={profile.links.calendly} className="button-primary">
                {profile.contactLabel}
              </Link>
              <Link href="/newsLetter" className="button-secondary">
                Read the Writing
              </Link>
            </div>
            <div className="mt-8 grid gap-5 text-sm text-[color:var(--color-muted)] sm:grid-cols-3">
              <div>
                <p className="stat-label">Focus</p>
                <p className="stat-value">Full-stack systems</p>
              </div>
              <div>
                <p className="stat-label">Background</p>
                <p className="stat-value">Engineering + product</p>
              </div>
              <div>
                <p className="stat-label">Working Style</p>
                <p className="stat-value">Calm, rigorous, practical</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-[color:var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,255,255,0.4))] p-5 shadow-[0_30px_80px_rgba(25,36,32,0.14)]">
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-[color:var(--color-accent-soft)] blur-2xl" />
              <div className="relative">
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  width={280}
                  height={280}
                  priority
                  className="mx-auto aspect-square rounded-[1.5rem] object-cover"
                />
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-[color:var(--color-ink)]">
                      {profile.name}
                    </p>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      {profile.location}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Link
                      href={profile.links.github}
                      className="text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={profile.links.linkedin}
                      className="text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl border-t border-[color:var(--color-border)] pt-8">
          <div className="article-prose text-[color:var(--color-muted)]">
            <ShortBio />
          </div>
        </div>
      </div>
    </section>
  )
}
