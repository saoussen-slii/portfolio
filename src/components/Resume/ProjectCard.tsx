import type { Project } from '../../types'

type ProjectCardProps = {
  project: Project
  linkLabel: string
}

export function ProjectCard({ project, linkLabel }: ProjectCardProps) {
  const getImageSrc = (projectName: string) => {
    const name = projectName.toLowerCase()
    if (name.includes('quorum')) return '/projects/quorum.png'
    if (name.includes('spyglass')) return '/projects/no_public_image.png'
    if (name.includes('portfolio')) return '/projects/portfolio.png'
    if (name.includes('orchestrate')) return '/projects/hackerrank-orchestrate2026.jpg'
    if (name.includes('pdf')) return '/projects/pdf_summarizer_agent.png'
    return undefined
  }

  const imageSrc = getImageSrc(project.name)
  const isExternalLink = project.link?.startsWith('http') || project.link?.startsWith('/')

  return (
    <article className="rounded-2xl border border-sky-500/20 bg-slate-900/50 p-5 ring-1 ring-amber-950/25">
      <div className="space-y-4">
        {/* Project image */}
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${project.name} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-800/50 flex items-center justify-center">
              <span className="text-slate-400 text-sm">Project Image</span>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-serif font-semibold text-slate-50 text-lg">{project.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-amber-800/35 bg-amber-950/40 px-3 py-1 text-xs text-amber-50/90"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <div className="pt-2 text-sm text-slate-300">
            {isExternalLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 underline decoration-sky-500/50 underline-offset-4"
              >
                {linkLabel}
              </a>
            ) : (
              <span>{project.link}</span>
            )}
          </div>
        )}
      </div>
    </article>
  )
}