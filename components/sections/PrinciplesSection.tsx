const workValues = [
  {
    marker: '01',
    title: 'Learn the Shape of the Project',
    summary:
      'I like to understand the people, the work, and the real goal before changing the system. If users are part of the project, they belong in that first pass too.',
    practices: [
      'Talk with the people closest to the work',
      'Clarify what needs to be built before touching the code',
      'Make a plan that can ship in useful, sequential releases',
    ],
  },
  {
    marker: '02',
    title: 'Protect the Good Idea',
    summary:
      'Small problems should not kill interesting ideas. The useful conversation is usually how to make the strong concept real while still respecting the hard parts.',
    practices: [
      'Bring energy to changes that could matter',
      'Treat objections as design constraints, not automatic vetoes',
      'Keep brainstorming until the idea is either better or honestly impossible',
    ],
  },
  {
    marker: '03',
    title: 'Be Honest About Tradeoffs',
    summary:
      'Every shortcut has a cost. Sometimes it is worth paying, but I want the team to understand what the choice will mean later.',
    practices: [
      'Count the future cost before accepting a special path',
      'Prefer autonomy when a team needs to make consequential changes',
      'Aim for work people want to use, even when the middle is difficult',
    ],
  },
]

export default function PrinciplesSection() {
  return (
    <section className="section-shell py-12 md:py-14">
      <div className="section-header">
        <div>
          <div className="accent-rule" />
          <p className="eyebrow">How I Work</p>
          <h2 className="section-title text-wrap-balance">
            I like hard work when the outcome is worth the effort.
          </h2>
        </div>
        <p className="section-copy md:justify-self-end">
          Good work feels a little like a long day of weeding. The middle can be
          frustrating, but the result should make the effort feel obvious in
          retrospect.
        </p>
      </div>

      <div className="work-values-grid">
        {workValues.map((value) => (
          <article key={value.title} className="work-value-card reveal-item">
            <div className="flex items-start justify-between gap-4">
              <p className="work-value-marker">{value.marker}</p>
              <div className="accent-rule accent-rule-pop mb-0 mt-2 w-10" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold leading-tight text-[color:var(--color-ink)]">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
              {value.summary}
            </p>
            <ul className="mt-5 grid gap-3">
              {value.practices.map((practice) => (
                <li key={practice} className="work-value-practice">
                  {practice}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
