import { Link as LinkIcon, Mail } from 'lucide-react'

import {
  CoreCompetency,
  EducationItem,
  ExperienceItem,
  KeyAccomplishment,
  SelectedTechnology,
} from './components/Resume'
import { portfolioConfig } from './data/config'
import { returnEmailHref, returnInitials } from './utils'

const { person, resume } = portfolioConfig

export default function App() {
  const initials = returnInitials(person.name)
  const emailHref = returnEmailHref(person.email)

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-white/10 font-semibold">
            {initials || 'YN'}
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{person.name}</div>
            <div className="text-sm text-zinc-400">
              {person.headline}, {person.title}
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <a className="hover:text-white" href="#skills">
            Skills
          </a>
          <a className="hover:text-white" href="#experience">
            Experience
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

        <section id="skills" className="mt-14">
          <h2 className="text-lg font-semibold">Core competencies</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {resume.coreCompetencies.map((group) => (
              <CoreCompetency key={group.title} group={group} />
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold">Selected technologies</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {resume.selectedTechnologies.map((group) => (
              <SelectedTechnology key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section id="accomplishments" className="mt-14">
          <h2 className="text-lg font-semibold">Key accomplishments</h2>
          <ul className="mt-5 space-y-3 text-sm text-zinc-300">
            {resume.keyAccomplishments.map((item) => (
              <KeyAccomplishment key={item} text={item} />
            ))}
          </ul>
        </section>

        <section id="experience" className="mt-14">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-5 space-y-4">
            {resume.experience.map((job) => (
              <ExperienceItem key={`${job.company}-${job.role}-${job.start}`} job={job} />
            ))}
          </div>
        </section>

        <section id="education" className="mt-14">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-5 space-y-3">
            {resume.education.map((ed) => (
              <EducationItem
                key={`${ed.institution}-${ed.credential}-${ed.program ?? ''}`}
                education={ed}
              />
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
