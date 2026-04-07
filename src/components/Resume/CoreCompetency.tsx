import type { SkillGroup } from '../../types'

type CoreCompetencyProps = {
  group: SkillGroup
}

export function CoreCompetency({ group }: CoreCompetencyProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{group.title}</div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
