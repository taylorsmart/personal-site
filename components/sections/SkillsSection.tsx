import Image from 'next/image'
import { siteContent } from '@/content/site'

export default function SkillsSection() {
  return (
    <section className="section-shell py-16">
      <div className="section-grid">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title text-wrap-balance">
            A mix of engineering depth, systems thinking, and product fluency.
          </h2>
          <p className="section-copy">
            The strongest work usually sits at the boundary between disciplines.
            This background lets me move from implementation details to user
            value without treating them as separate conversations.
          </p>
        </div>
        <div className="grid gap-5">
          {siteContent.skills.map((group) => (
            <section
              key={group.key}
              className="rounded-[1.75rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
            >
              <h3 className="text-xl font-semibold text-[color:var(--color-ink)]">
                {group.skillName}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.skillList.map((skill) => (
                  <div
                    key={skill.key}
                    className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white/80 px-3 py-3"
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium text-[color:var(--color-ink)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
