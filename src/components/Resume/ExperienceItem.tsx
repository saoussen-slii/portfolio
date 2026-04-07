import type { Experience } from '../../types'

type ExperienceItemProps = {
  job: Experience
}

export function ExperienceItem({ job }: ExperienceItemProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="font-semibold">
          {job.role} · {job.company}
        </div>
        <div className="text-xs text-stone-400">
          {job.start} – {job.end}
          {job.location ? ` · ${job.location}` : ''}
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-stone-300">
        {job.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  )
}
