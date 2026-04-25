import type { Project } from '../types/project'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group flex h-full min-h-[300px] flex-col justify-between rounded-xl border border-white/10 bg-app-surface/80 p-7 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_32px_rgba(0,245,255,0.12)] sm:min-h-[320px] sm:p-8">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent-purple"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-heading text-xl font-bold text-text transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-text">{project.impact}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">{project.shortDescription}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View details
        </button>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-text-muted transition hover:border-accent/40 hover:text-accent"
        >
          View Code
        </a>
      </div>
    </article>
  )
}
