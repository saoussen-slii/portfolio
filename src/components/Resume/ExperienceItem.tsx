import type { Experience } from '../../types'

type ExperienceItemProps = {
  job: Experience
}

export function ExperienceItem({ job }: ExperienceItemProps) {
  return (
    <article className="rounded-2xl border border-sky-500/20 bg-slate-900/50 p-5 ring-1 ring-amber-950/25">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="font-serif font-semibold text-slate-50">
          {job.role} · {job.company}
        </div>
        <div className="text-xs text-slate-500">
          {job.start} – {job.end}
          {job.location ? ` · ${job.location}` : ''}
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 marker:text-amber-700/80">
        {job.highlights.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>
    </article>
  )
}
