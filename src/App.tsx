import { Link as LinkIcon, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  CoreCompetency,
  EducationItem,
  ExperienceItem,
  KeyAccomplishment,
  LanguageDropdown,
  ScrollReveal,
  SelectedTechnology,
  VisitCounter,
} from './components'
import { DEFAULT_LOCALE, type Locale,portfolioByLocale } from './data/config'
import { returnEmailHref, returnInitials } from './utils'

export default function App() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)
  const { person, resume, ui } = portfolioByLocale[locale]
  const initials = returnInitials(person.name)
  const emailHref = returnEmailHref(person.email)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = locale === 'fr' ? 'fr' : 'en'
  }, [locale])

  const headerNavLinks = [
    { href: '#skills', label: ui.nav.skills },
    { href: '#experience', label: ui.nav.experience },
    { href: '#contact', label: ui.nav.contact },
  ] as const

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1000px_700px_at_15%_-5%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(900px_600px_at_95%_5%,rgba(120,53,15,0.18),transparent_50%),radial-gradient(800px_500px_at_50%_100%,rgba(30,58,138,0.22),transparent_55%)]" />
      <header
        className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md"
      >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      
        <div className="flex items-center gap-3">
          <a
            href="#top-of-page"
            className="grid size-10 place-items-center rounded-xl bg-sky-950/60 font-semibold text-amber-100 ring-1 ring-sky-500/25 transition-colors hover:bg-sky-900/70 hover:ring-sky-400/35"
            aria-label={ui.aria.backToTop}
          >
            {initials || 'YN'}
          </a>
          <div className="leading-tight">
            <div className="font-serif font-semibold tracking-tight text-slate-50">
              {person.name}
            </div>
            <div className="text-xs text-slate-400">
              {person.headline}
            </div>
          </div>
        </div>

      
        <nav
          className="hidden items-center gap-4 text-sm font-medium text-slate-300 sm:flex sm:gap-6"
          aria-label={ui.aria.primaryNav}
        >
          {headerNavLinks.map(({ href, label }) => (
            <a key={href} className="transition-colors hover:text-sky-300" href={href}>
              {label}
            </a>
          ))}
          <LanguageDropdown
            trigger="icon"
            locale={locale}
            onLocaleChange={setLocale}
            optionEn={ui.language.optionEn}
            optionFr={ui.language.optionFr}
            ariaMenuLabel={ui.aria.languageMenu}
          />
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <LanguageDropdown
            trigger="icon"
            locale={locale}
            onLocaleChange={setLocale}
            optionEn={ui.language.optionEn}
            optionFr={ui.language.optionFr}
            ariaMenuLabel={ui.aria.languageMenu}
          />

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-500/60 bg-slate-900 text-slate-100 shadow-sm shadow-black/20 ring-1 ring-slate-400/20 hover:border-sky-400/50 hover:bg-slate-800 hover:text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:hidden"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={mobileNavOpen ? ui.aria.closeMenu : ui.aria.openMenu}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X className="size-5" strokeWidth={2.25} /> : <Menu className="size-5" strokeWidth={2.25} />}
        </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-slate-800/80 bg-slate-950/95 sm:hidden ${mobileNavOpen ? 'block' : 'hidden'}`}
      >
        <nav
          className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-3 text-sm font-medium text-slate-200"
          aria-label={ui.aria.primaryNavMobile}
        >
          {headerNavLinks.map(({ href, label }) => (
            <a
              key={href}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-900 hover:text-sky-300"
              href={href}
              onClick={() => setMobileNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-10">
        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-6" id="top-of-page" >
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
                {ui.buttons.viewExperience}
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-950/40 px-4 py-2 text-sm font-medium text-slate-100 hover:border-sky-400/40 hover:bg-sky-900/50"
                href={emailHref}
              >
                <Mail className="size-4" />
                {ui.buttons.getInTouch}
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-sky-500/20 bg-slate-900/60 p-5 ring-1 ring-amber-950/30">
            <div className="text-sm font-semibold text-amber-100/90">{ui.linksAside}</div>
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
            <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.coreCompetencies}</h2>
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
              {ui.sections.selectedTechnologies}
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
            <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.keyAccomplishments}</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {resume.keyAccomplishments.map((item, index) => (
                <KeyAccomplishment key={index} text={item} />
              ))}
            </ul>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="experience">
            <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.experience}</h2>
            <div className="mt-5 space-y-4">
              {resume.experience.map((job, index) => (
                <ExperienceItem key={`${job.company}-${index}`} job={job} />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="education">
            <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.education}</h2>
            <div className="mt-5 space-y-3">
              {resume.education.map((ed, index) => (
                <EducationItem key={`${ed.institution}-${index}`} education={ed} />
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal as="section" className="mt-14">
          <section id="languages">
            <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.languages}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {resume.languages.map((l, index) => (
                <div
                  key={index}
                  className="rounded-full border border-amber-800/35 bg-amber-950/40 px-3 py-1 text-xs text-amber-50/90"
                >
                  {l.language} · {l.level}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
        <section id="contact" className="mt-14">
          <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.contact}</h2>
          <p className="mt-4 text-sm text-slate-300">
            {ui.contactEmailPrefix}{' '}
            <a
              className="text-sky-300 underline decoration-sky-500/50 underline-offset-4 hover:text-sky-200"
              href={emailHref}
            >
              {person.email.replace(/^mailto:/, '')}
            </a>
          </p>
        </section>

        <section id="visitors" className="mt-14" aria-label={ui.aria.visitorsSection}>
          <h2 className="font-serif text-lg font-semibold text-slate-50">{ui.sections.visitors}</h2>
          <div className="mt-4">
            <VisitCounter />
          </div>
        </section>
      </main>
    </div>
  )
}
