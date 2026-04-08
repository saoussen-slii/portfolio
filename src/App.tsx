import { Link as LinkIcon, Mail } from 'lucide-react'

import {
  CoreCompetency,
  EducationItem,
  ExperienceItem,
  KeyAccomplishment,
  SelectedTechnology,
} from './components/Resume'
import { ScrollReveal } from './components/ScrollReveal'
import { VisitCounter } from './components/VisitCounter'
import { portfolioConfig } from './data/config'
import { returnEmailHref, returnInitials } from './utils'

const { person, resume } = portfolioConfig

export default function App() {
  const initials = returnInitials(person.name)
  const emailHref = returnEmailHref(person.email)

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1000px_700px_at_15%_-5%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(900px_600px_at_95%_5%,rgba(120,53,15,0.18),transparent_50%),radial-gradient(800px_500px_at_50%_100%,rgba(30,58,138,0.22),transparent_55%)]" />
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-sky-950/60 font-semibold text-amber-100 ring-1 ring-sky-500/25">
            {initials || 'YN'}
          </div>
          <div className="leading-tight">
            <div className="font-serif font-semibold tracking-tight">{person.name}</div>
            <div className="text-sm text-slate-400">
              {person.headline}, {person.title}
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a className="hover:text-sky-200" href="#skills">
            Skills
          </a>
          <a className="hover:text-sky-200" href="#experience">
            Experience
          </a>
          <a className="hover:text-sky-200" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-10">
        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-6">
            <h1 className="font-serif text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              {person.location ? `${person.location} • ` : ''}
              {person.headline}
            </h1>
            <p className="max-w-prose text-pretty text-slate-300">{resume.summary}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-amber-800 px-4 py-2 text-sm font-medium text-amber-50 shadow-sm shadow-amber-950/40 hover:bg-amber-700"
                href="#experience"
              >
                View experience
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-950/40 px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-400/40 hover:bg-sky-900/50"
                href={emailHref}
              >
                <Mail className="size-4" />
                Get in touch
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-sky-500/20 bg-slate-900/60 p-5 ring-1 ring-amber-950/30">
            <div className="text-sm font-semibold text-amber-100/90">Links</div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {person.socials.map((link) => (
                <a
                  key={link.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-500/25 bg-sky-950/35 px-3 py-2 text-sm text-slate-100 hover:border-sky-400/35 hover:bg-sky-900/45"
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
        <ScrollReveal as="section" className="mt-14">
          <section id="skills">
            <h2 className="font-serif text-lg font-semibold text-slate-50">Core competencies</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {resume.coreCompetencies.map((group) => (
                <CoreCompetency key={group.title} group={group} />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="selected-technologies">
            <h3 className="mt-10 font-serif text-lg font-semibold text-slate-50">
              Selected technologies
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {resume.selectedTechnologies.map((group) => (
                <SelectedTechnology key={group.title} group={group} />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="accomplishments">
            <h2 className="font-serif text-lg font-semibold text-slate-50">Key accomplishments</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {resume.keyAccomplishments.map((item) => (
                <KeyAccomplishment key={item} text={item} />
              ))}
            </ul>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="experience">
            <h2 className="font-serif text-lg font-semibold text-slate-50">Experience</h2>
            <div className="mt-5 space-y-4">
              {resume.experience.map((job) => (
                <ExperienceItem key={`${job.company}-${job.role}-${job.start}`} job={job} />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="education">
            <h2 className="font-serif text-lg font-semibold text-slate-50">Education</h2>
            <div className="mt-5 space-y-3">
              {resume.education.map((ed) => (
                <EducationItem
                  key={`${ed.institution}-${ed.credential}-${ed.program ?? ''}`}
                  education={ed}
                />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="languages">
            <h2 className="font-serif text-lg font-semibold text-slate-50">Languages</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {resume.languages.map((l) => (
                <div
                  key={l.language}
                  className="rounded-full border border-amber-800/35 bg-amber-950/40 px-3 py-1 text-xs text-amber-50/90"
                >
                  {l.language} · {l.level}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
        <section id="contact" className="mt-14">
          <h2 className="font-serif text-lg font-semibold text-slate-50">Contact</h2>
          <p className="mt-4 text-sm text-slate-300">
            Email:{' '}
            <a
              className="text-sky-300 underline decoration-sky-500/50 underline-offset-4 hover:text-sky-200"
              href={emailHref}
            >
              {person.email.replace(/^mailto:/, '')}
            </a>
          </p>
        </section>

        <section id="visitors" className="mt-14" aria-label="Visitor statistics">
          <h2 className="font-serif text-lg font-semibold text-slate-50">Visitors</h2>
          <div className="mt-4">
            <VisitCounter />
          </div>
        </section>
      </main>
    </div>
  )
}
