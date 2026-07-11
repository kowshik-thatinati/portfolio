import type { Experience } from '../types/experience'

type ExperienceCardProps = {
  experience: Experience
  onOpen: (exp: Experience) => void
}

export function ExperienceCard({ experience, onOpen }: ExperienceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(experience)}
      className="group flex w-full min-h-[280px] flex-col justify-between rounded-xl border border-white/10 bg-app-surface/80 p-7 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_32px_rgba(37,99,235,0.12)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:min-h-[300px] sm:p-8"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
          {experience.phaseLabel}
        </span>
        <span className="rounded-full border border-white/10 bg-app-bg px-2.5 py-0.5 font-mono text-[11px] font-medium text-text-muted">
          {experience.duration}
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-text transition-colors group-hover:text-accent">
        {experience.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">{experience.summary}</p>

      <p className="mt-6 font-mono text-xs text-accent/90 opacity-0 transition-opacity group-hover:opacity-100">
        Expand case study →
      </p>
    </button>
  )
}

