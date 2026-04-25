import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { siteContent } from '@/content/site'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Engineering', href: '/newsLetter/engineering' },
  { name: 'Product', href: '/newsLetter/product' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function NavBar() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-[color:var(--color-ink)]"
        >
          <span className="brand-mark flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold tracking-[0.12em]">
            TS
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-[0.1em] text-[color:var(--color-muted)]">
              {siteContent.profile.role}
            </span>
            <span className="block text-base font-semibold text-[color:var(--color-ink)]">
              {siteContent.profile.name}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = isActive(router.pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'nav-link-active' : 'nav-link-idle'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.name}
              </Link>
            )
          })}
          <span className="button-primary-shell button-bubble-contact ml-2">
            <Link
              href={siteContent.profile.links.calendly}
              className="button-primary"
            >
              Contact
            </Link>
          </span>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)] md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {mobileMenuOpen ? '×' : '≡'}
          </span>
        </button>
      </div>

      {mobileMenuOpen ? (
        <nav
          className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => {
              const active = isActive(router.pathname, item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active ? 'nav-link-active' : 'nav-link-idle'
                  }`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <span className="button-primary-shell button-bubble-mobile mt-2">
              <Link
                href={siteContent.profile.links.calendly}
                className="button-primary justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteContent.profile.contactLabel}
              </Link>
            </span>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
