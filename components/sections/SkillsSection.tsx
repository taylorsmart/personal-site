import Image from 'next/image'
import { siteContent } from '@/content/site'

export default function SkillsSection() {
  const accentBorders = [
    'border-t-[color:var(--color-accent)]',
    'border-t-[color:var(--color-ink)]',
    'border-t-[color:var(--color-pop)]',
  ]

  return (
    <section className="section-shell py-12 md:py-14">
      <div className="section-header">
        <div>
          <div className="accent-rule" />
          <p className="eyebrow">Tools I Use</p>
          <h2 className="section-title text-wrap-balance">
            I equally engjoy identifying the core user needs on product and
            writing the code that addresses those needs for the users.
          </h2>
        </div>
        <p className="section-copy md:justify-self-end">
          Edge cases are the most common failure point in code, and the only way
          to proactively address them is by knowing the use cases fully.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {siteContent.skills.map((group, index) => (
          <section
            key={group.key}
            className={`surface-card reveal-item border-t-4 ${accentBorders[index % accentBorders.length]}`}
          >
            <h3 className="text-xl font-semibold text-[color:var(--color-ink)]">
              {group.skillName}
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {group.skillList.map((skill) => (
                <div
                  key={skill.key}
                  className="flex min-w-0 items-center gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-3 py-3 transition-colors hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-wash)]"
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={24}
                    height={24}
                  />
                  <span className="min-w-0 break-words text-sm font-medium text-[color:var(--color-ink)]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
