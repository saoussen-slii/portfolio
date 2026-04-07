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
    <div className="min-h-dvh bg-stone-950 text-stone-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(251,191,36,0.10),transparent_55%),radial-gradient(1000px_700px_at_90%_10%,rgba(244,63,94,0.07),transparent_55%),radial-gradient(900px_700px_at_50%_110%,rgba(45,212,191,0.06),transparent_60%)]" />
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-white/5 font-semibold ring-1 ring-white/10">
            {initials || 'YN'}
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{person.name}</div>
            <div className="text-sm text-stone-400">
              {person.headline}, {person.title}
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-stone-300 sm:flex">
          <a className="hover:text-stone-50" href="#skills">
            Skills
          </a>
          <a className="hover:text-stone-50" href="#experience">
            Experience
          </a>
          <a className="hover:text-stone-50" href="#contact">
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
            <p className="max-w-prose text-pretty text-stone-300">{resume.summary}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-4 py-2 text-sm font-medium text-stone-950 hover:bg-amber-200"
                href="#experience"
              >
                View experience
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-white/10"
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
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-stone-100 hover:bg-white/10"
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
        <ScrollReveal as="section" className="mt-14" y={22}>
          <section id="skills">
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
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14" y={22} delay={0.05}>
          <section id="accomplishments">
            <h2 className="text-lg font-semibold">Key accomplishments</h2>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              {resume.keyAccomplishments.map((item) => (
                <KeyAccomplishment key={item} text={item} />
              ))}
            </ul>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14" y={22} delay={0.08}>
          <section id="experience">
            <h2 className="text-lg font-semibold">Experience</h2>
            <div className="mt-5 space-y-4">
              {resume.experience.map((job) => (
                <ExperienceItem key={`${job.company}-${job.role}-${job.start}`} job={job} />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14" y={22} delay={0.1}>
          <section id="education">
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
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14" y={22} delay={0.12}>
          <section id="languages">
            <h2 className="text-lg font-semibold">Languages</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {resume.languages.map((l) => (
                <div
                  key={l.language}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-200"
                >
                  {l.language} · {l.level}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
        <section id="contact" className="mt-14">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-4 text-sm text-stone-300">
            Email:{' '}
            <a
              className="underline decoration-amber-300/40 underline-offset-4 hover:text-amber-200"
              href={emailHref}
            >
              {person.email.replace(/^mailto:/, '')}
            </a>
          </p>
        </section>

        <section id="visitors" className="mt-14" aria-label="Visitor statistics">
          <h2 className="text-lg font-semibold">Visitors</h2>
          <div className="mt-4">
            <VisitCounter />
          </div>
        </section>
      </main>
    </div>
  )
}
