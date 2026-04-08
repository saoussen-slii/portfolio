import type { SkillGroup } from '../../types'

type SelectedTechnologyProps = {
  group: SkillGroup
}

export function SelectedTechnology({ group }: SelectedTechnologyProps) {
  return (
    <article className="rounded-2xl border border-sky-500/20 bg-slate-900/50 p-5 ring-1 ring-amber-950/25">
      <div className="font-serif font-semibold text-slate-50">{group.title}</div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-sky-600/25 bg-sky-950/40 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
