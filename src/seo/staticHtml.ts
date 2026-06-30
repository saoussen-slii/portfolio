import type { PortfolioLocaleBundle } from '../data/locales/portfolio'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Crawler-visible HTML injected into #root at build time (replaced when React mounts). */
export function buildStaticSeoHtml({ person, resume }: PortfolioLocaleBundle): string {
  const experience = resume.experience
    .map(
      (job) =>
        `<li><strong>${escapeHtml(job.role)}</strong> — ${escapeHtml(job.company)} (${escapeHtml(job.start)} – ${escapeHtml(job.end)}, ${escapeHtml(job.location)})</li>`,
    )
    .join('')

  const projects = resume.projects
    .map(
      (project) =>
        `<li><strong>${escapeHtml(project.name)}</strong>: ${escapeHtml(project.description)}</li>`,
    )
    .join('')

  return `<main id="static-seo" class="sr-only" aria-label="Saoussen Slii portfolio">
  <h1>${escapeHtml(person.name)} — ${escapeHtml(person.headline)} | ${escapeHtml(person.location)}</h1>
  <p>${escapeHtml(resume.summary)}</p>
  <p>Contact: <a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></p>
  <h2>Experience</h2>
  <ul>${experience}</ul>
  <h2>Projects</h2>
  <ul>${projects}</ul>
  <p>
    <a href="https://github.com/saoussen-slii">GitHub: saoussen-slii</a> ·
    <a href="https://www.linkedin.com/in/saoussen-slii/">LinkedIn: saoussen-slii</a>
  </p>
</main>`
}
