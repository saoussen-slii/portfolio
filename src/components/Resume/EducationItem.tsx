import type { Education } from '../../types'

type EducationItemProps = {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">
        {education.credential}
        {education.program ? `, ${education.program}` : ''}
      </div>
      <div className="mt-1 text-sm text-zinc-300">
        {education.institution}
        {education.location ? ` · ${education.location}` : ''}
      </div>
      {education.date ? <div className="mt-1 text-xs text-zinc-400">{education.date}</div> : null}
    </article>
  )
}
