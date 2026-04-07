import { Link as LinkIcon, Mail } from 'lucide-react'

import { portfolioConfig } from './data/config'

const { person, resume } = portfolioConfig

export default function App() {
  const initials = person.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  const emailHref = person.email.startsWith('mailto:') ? person.email : `mailto:${person.email}`

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-white/10 font-semibold">
            {initials || 'YN'}
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{person.name}</div>
            <div className="text-sm text-zinc-400">{person.headline}, {person.title}</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <a className="hover:text-white" href="#summary">
            Summary
          </a>
          <a className="hover:text-white" href="#skills">
            Skills
          </a>
          <a className="hover:text-white" href="#experience">
            Experience
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-10">
        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {person.location ? `${person.location} • ` : ''}
              {person.headline}
            </h1>
            <p className="max-w-prose text-pretty text-zinc-300">{resume.summary}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
                href="#experience"
              >
                View experience
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                href={emailHref}
              >
                <Mail className="size-4" />
                Get in touch
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold">Links</div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {person.socials.map((link) => (
                <a
                  key={link.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/10"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon className="size-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section id="summary" className="mt-14">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-4 max-w-prose text-sm text-zinc-300">{resume.summary}</p>
        </section>

        <section id="skills" className="mt-14">
          <h2 className="text-lg font-semibold">Core competencies</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {resume.coreCompetencies.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
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
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold">Selected technologies</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {resume.selectedTechnologies.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
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
            ))}
          </div>
        </section>

        <section id="accomplishments" className="mt-14">
          <h2 className="text-lg font-semibold">Key accomplishments</h2>
          <ul className="mt-5 space-y-3 text-sm text-zinc-300">
            {resume.keyAccomplishments.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="mt-14">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-5 space-y-4">
            {resume.experience.map((job) => (
              <article
                key={`${job.company}-${job.role}-${job.start}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-semibold">
                    {job.role} · {job.company}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {job.start} – {job.end}
                    {job.location ? ` · ${job.location}` : ''}
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mt-14">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-5 space-y-3">
            {resume.education.map((ed) => (
              <article
                key={`${ed.institution}-${ed.credential}-${ed.program ?? ''}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="font-semibold">
                  {ed.credential}
                  {ed.program ? `, ${ed.program}` : ''}
                </div>
                <div className="mt-1 text-sm text-zinc-300">
                  {ed.institution}
                  {ed.location ? ` · ${ed.location}` : ''}
                </div>
                {ed.date ? <div className="mt-1 text-xs text-zinc-400">{ed.date}</div> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="languages" className="mt-14">
          <h2 className="text-lg font-semibold">Languages</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {resume.languages.map((l) => (
              <div
                key={l.language}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {l.language} · {l.level}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-14">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="mt-4 max-w-prose text-sm text-zinc-300">
            This section is pulled from your config too—update `src/data/config.ts` to customize it
            further (bio, featured projects, etc.).
          </p>
        </section>

        <section id="contact" className="mt-14">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-4 text-sm text-zinc-300">
            Email:{' '}
            <a
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
              href={emailHref}
            >
              {person.email.replace(/^mailto:/, '')}
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}
