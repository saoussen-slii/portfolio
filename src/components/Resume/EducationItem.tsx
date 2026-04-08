import type { Education } from '../../types'

type EducationItemProps = {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <article className="rounded-2xl border border-sky-500/20 bg-slate-900/50 p-5 ring-1 ring-amber-950/25">
      <div className="font-serif font-semibold text-slate-50">
        {education.credential}
        {education.program ? `, ${education.program}` : ''}
      </div>
      <div className="mt-1 text-sm text-slate-300">
        {education.institution}
        {education.location ? ` · ${education.location}` : ''}
      </div>
      {education.date ? <div className="mt-1 text-xs text-slate-500">{education.date}</div> : null}
    </article>
  )
}
