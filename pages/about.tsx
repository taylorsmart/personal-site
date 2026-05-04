import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { siteContent } from '@/content/site'

const proofPoints = [
  {
    label: 'Product strategy',
    value: 'Shaping early ideas into focused, buildable systems.',
  },
  {
    label: 'Writing',
    value:
      "Poetry, short story, long form, it doesn't matter I'll chat about it all.",
  },
  {
    label: 'Outside',
    value: 'Hiking, climbing, and travel.',
  },
]

const experienceTimeline = [
  {
    title: 'Staff Software Engineer (Team Lead)',
    subTitle: 'Senior Software Engineer',
    company: 'Edelman Financial Engines',
    date: 'Apr 2022 - Present',
    accent: 'border-t-[color:var(--color-pop)]',
    details: [
      'Lead a team of 7 engineers and 2 QA delivering core platform features.',
      'Re-architected the modal system to reduce redundant triggers and improve data-load efficiency; the pattern was adopted company-wide.',
      'Redesigned the on-load system across all sites, reducing network load by 20%.',
      'Built direct integrations with financial record keepers, enabling seamless retirement contribution adjustments.',
    ],
  },
  {
    title: 'Founder',
    company: 'Airbrush Labs, LLC',
    date: 'Jan 2022 - Feb 2025',
    accent: 'border-t-[color:var(--color-pop)]',
    quiet: true,
    details: [
      'Built mobile app and website products for startups across web, tablet, mobile web, and native mobile surfaces.',
      'Owned the loop from concept, wireframes, and Figma design through full-stack development and deployment.',
    ],
  },
  {
    title: 'Solutions Engineer II',
    company: 'Anark',
    date: 'Oct 2021 - Apr 2022',
    accent: 'border-t-[color:var(--color-accent)]',
    details: [
      'Worked closely with the CTO in a small-company environment across product strategy, prioritization, and delivery.',
      'Partnered directly with enterprise clients to assess requirements and implement custom software solutions.',
      'Modernized legacy code and migrated functionality into a new MERN stack, improving maintainability.',
    ],
  },
  {
    title: 'Product Manager, Finance',
    company: 'Sendoso',
    date: 'Mar 2020 - May 2020',
    accent: 'border-t-[color:var(--color-ink)]',
    details: [
      'Redesigned the financial transaction system for purchase orders, credit lines, and clearer transaction information for end users.',
      'Moved between product design and technical project management to tighten a short, focused finance product cycle.',
    ],
  },
  {
    title: 'Product Manager, Integrations',
    company: 'Sendoso',
    date: 'Oct 2019 - Mar 2020',
    accent: 'border-t-[color:var(--color-ink)]',
    details: [
      'Managed core integration products across Salesforce, HubSpot, Marketo, Amazon, and the Sendoso API.',
      'Designed a native integration process that enabled faster partner integrations with lower engineering lift.',
    ],
  },
  {
    title: 'Product Owner, Benchmarks',
    company: 'FactSet Research Systems',
    date: 'Jan 2019 - Oct 2019',
    accent: 'border-t-[color:var(--color-blue)]',
    details: [
      'Led product strategy for client-facing financial analytics products including Benchmark Data Dictionary, Blended Benchmark Analytics, and Benchmark Health Monitor.',
      'Collaborated across product verticals to design and deploy a 7x more efficient Benchmark Datafeed Engine.',
    ],
  },
  {
    title: 'Product Development Track',
    subTitle:
      'Associate Product Manager, Senior Product Specialist, Product Developer',
    company: 'FactSet Research Systems',
    date: 'May 2016 - Jan 2019',
    accent: 'border-t-[color:var(--color-accent)]',
    quiet: true,
    details: [
      'Progressed through product developer, product specialist, and associate product manager roles while learning how requirements change once real teams use the work.',
      'Co-managed a small team of product developers and engineers supporting benchmark products.',
    ],
  },
  {
    title: 'Customer Success Manager',
    company: 'Base CRM (acquired by Zendesk)',
    date: 'Aug 2015 - May 2016',
    accent: 'border-t-[color:var(--color-pop)]',
    quiet: true,
    details: [
      'Built customer-facing communication habits that later shaped product discovery and implementation work.',
    ],
  },
  {
    title: 'Investment Management Consultant',
    company: 'FactSet Research Systems',
    date: 'Feb 2014 - Aug 2015',
    accent: 'border-t-[color:var(--color-ink)]',
    quiet: true,
    details: [
      'Managed relationships for 11 accounts directly responsible for $3.5M in Annual Subscription Value.',
      'Served as primary contact for 135 users across training, project management, system integration, and data feed support.',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Nexant',
    date: 'Jun 2013 - Feb 2014',
    accent: 'border-t-[color:var(--color-blue)]',
    quiet: true,
    details: [
      'Analyzed large-scale utility field studies and translated results into research reports with econometric modeling and forecasting.',
      'Contributed to work including Central Maine Power Bill Alert Pilot Evaluation.',
    ],
  },
]

const interests = [
  'Hiking - Colorado to California - I love running up mountains.',
  "Climbing - I'm afraid of heights... but also love to be up a rock wall.",
  'Writing - My longest passion - I enjoy all variety of creative writing.',
]

const writingNotes = [
  'Satire Writer/Contributor - The Hard Times',
  'First Place Non-Fiction - The Mercury Magazine',
  'Central Maine Power Bill Alert Pilot Evaluation contributor',
]

function TimelineItem({
  item,
  side,
}: {
  item: (typeof experienceTimeline)[number]
  side: 'left' | 'right'
}) {
  const alignment =
    side === 'left'
      ? 'lg:col-start-1 lg:row-start-1 timeline-left'
      : 'lg:col-start-3 lg:row-start-1 timeline-right'

  return (
    <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] lg:items-start">
      <div className="hidden h-full justify-center lg:col-start-2 lg:row-start-1 lg:flex">
        <span className="mt-7 h-4 w-4 rounded-full border-4 border-[color:var(--color-bg)] bg-[color:var(--color-pop)] shadow-[0_0_0_1px_rgba(226,72,12,0.22)]" />
      </div>
      <article
        className={`surface-card reveal-item border-t-4 ${item.accent} ${item.quiet ? 'bg-[color:var(--color-surface)]' : ''} ${alignment}`}
      >
        <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-[color:var(--color-ink)]">
              {item.title}
            </h3>
            {item.subTitle ? (
              <p className="mt-1 text-sm font-semibold text-[color:var(--color-muted)]">
                {item.subTitle}
              </p>
            ) : null}
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent-deep)]">
              {item.company}
            </p>
          </div>
          <p className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-muted)]">
            {item.date}
          </p>
        </div>

        <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
          {item.details.map((detail) => (
            <li
              key={detail}
              className="border-l-2 border-[color:var(--color-accent-soft)] pl-4"
            >
              {detail}
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default function About() {
  return (
    <Layout
      title="About"
      description="Experience, product judgment, engineering leadership, and background for Taylor Smart."
    >
      <section className="section-shell pt-6 md:pt-10">
        <div className="hero-panel">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="max-w-4xl">
              <div className="accent-rule accent-rule-pop" />
              <p className="eyebrow">About Taylor Smart</p>
              <h1 className="hero-title">
                Product judgment, engineering depth, and a bias toward useful
                systems.
              </h1>
              <p className="hero-copy max-w-3xl">
                Staff Software Engineer with a background in product management
                and financial consulting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="button-primary-shell button-bubble-hero">
                  <Link
                    href={siteContent.profile.links.calendly}
                    className="button-primary"
                  >
                    {siteContent.profile.contactLabel}
                  </Link>
                </span>
                <Link
                  href={siteContent.profile.links.linkedin}
                  className="button-secondary"
                >
                  View LinkedIn
                </Link>
              </div>
            </div>

            <aside
              className="surface-card surface-card-emphasis border-t-4 border-t-[color:var(--color-pop)]"
              aria-label="Conversation topics"
            >
              <p className="stat-label">Talk With Me About</p>
              <div className="mt-5 grid gap-3">
                {proofPoints.map((point) => (
                  <div
                    key={point.label}
                    className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-4 py-3"
                  >
                    <p className="stat-label">{point.label}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                      {point.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ScrollReveal
        className="reveal-quiet"
        rootMargin="0px 0px 18% 0px"
        threshold={0.04}
      >
        <section className="section-shell pt-7 pb-12 md:pt-8 md:pb-14">
          <div className="section-grid section-grid-feature">
            <div className="section-intro-compact section-intro-sticky">
              <div className="accent-rule" />
              <p className="eyebrow">Experience</p>
              <h2 className="section-title">
                The common thread is translating ambiguous product needs into
                shipped systems.
              </h2>
            </div>

            <div className="experience-timeline relative grid gap-6 lg:gap-2">
              <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[linear-gradient(180deg,var(--color-pop),var(--color-accent),var(--color-ink))] lg:block" />
              {experienceTimeline.map((item, index) => (
                <TimelineItem
                  key={`${item.company}-${item.title}`}
                  item={item}
                  side={index % 2 === 0 ? 'right' : 'left'}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="reveal-quiet" delay={100}>
        <section className="section-shell py-12 md:py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <section className="surface-card border-t-4 border-t-[color:var(--color-accent)]">
              <p className="eyebrow">Education</p>
              <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-ink)]">
                Gettysburg College
              </h2>
              <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">
                BA Economics, concentration in Experimental Economics.
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                <li className="border-l-2 border-[color:var(--color-accent-soft)] pl-4">
                  President, Pi Lambda Sigma Honors Fraternity
                </li>
                <li className="border-l-2 border-[color:var(--color-accent-soft)] pl-4">
                  Assisted in founding the Experimental Economics Program
                </li>
              </ul>
            </section>

            <section className="surface-card border-t-4 border-t-[color:var(--color-ink)]">
              <p className="eyebrow">Outside Work</p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {interests.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[color:var(--color-pop-soft)] pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="surface-card border-t-4 border-t-[color:var(--color-pop)]">
              <p className="eyebrow">Writing</p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {writingNotes.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[color:var(--color-pop-soft)] pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  )
}
