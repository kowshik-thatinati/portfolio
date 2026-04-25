import { useState } from 'react'
import type { Experience } from '../types/experience'
import { FadeIn } from './FadeIn'

interface ExpandableExperienceCardProps {
  experience: Experience
  isMobile?: boolean
}

export function ExpandableExperienceCard({ experience, isMobile = false }: ExpandableExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (isMobile) {
    return (
      <FadeIn>
        <div className="border border-white/10 bg-app-surface/50 rounded-2xl overflow-hidden">
          {/* Header - Always Visible */}
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2 py-1">
                    <span className="font-mono text-xs text-accent-purple">{experience.phaseLabel}</span>
                  </span>
                  <span className="text-sm text-text-muted">{experience.duration}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-2">{experience.title}</h3>
                <p className="text-sm text-text-muted line-clamp-2">{experience.summary}</p>
              </div>
            </div>
            <button className="mt-4 flex items-center gap-2 text-accent-purple hover:text-accent-purple/80 transition-colors">
              <span className="font-mono text-sm">
                {isExpanded ? 'Show Less' : 'Show More'}
              </span>
              <svg 
                className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-0'
          }`}>
            <div className="px-6 pb-6 space-y-6">
              {/* Problem Statement */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2">Problem Statement</h4>
                <p className="text-sm text-text">{experience.problem}</p>
              </div>

              {/* System Overview */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2">System Overview</h4>
                <p className="text-sm text-text">{experience.systemOverview}</p>
              </div>

              {/* Technical Approach */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2">Technical Approach</h4>
                <ol className="list-inside list-decimal space-y-2 text-sm text-text">
                  {experience.approachSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2">Results & Insights</h4>
                <ul className="list-inside list-disc space-y-2 text-sm text-text">
                  {experience.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-app-bg px-2.5 py-1 font-mono text-xs text-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proof Images */}
              {experience.proof.images.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple mb-2">Proof & Screenshots</h4>
                  <div className="space-y-3">
                    {experience.proof.images.map((img) => (
                      <figure key={img.src} className="overflow-hidden rounded-xl border border-white/10 bg-app-bg/40">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-48 object-cover"
                        />
                        <figcaption className="p-3 text-xs text-text-muted">{img.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={experience.proof.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-accent-purple px-6 py-3 text-sm font-semibold text-app-bg transition hover:bg-accent-purple/90 min-h-[44px]"
                >
                  View Code
                </a>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-full rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-text transition hover:border-white/25 hover:text-text min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }

  // Desktop - Keep existing behavior with modal
  return (
    <FadeIn>
      <div className="project-card-enter group relative overflow-hidden rounded-xl border border-white/10 bg-app-surface/50 p-6 transition-all duration-300 hover:border-accent-purple/30 hover:shadow-lg hover:shadow-accent-purple/10 hover:-translate-y-1">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2 py-1">
              <span className="font-mono text-xs text-accent-purple">{experience.phaseLabel}</span>
            </span>
            <span className="text-sm text-text-muted">{experience.duration}</span>
          </div>
          <h3 className="font-heading text-lg font-semibold text-text group-hover:text-accent-purple transition-colors">
            {experience.title}
          </h3>
          <p className="mt-2 text-sm text-text-muted line-clamp-3">{experience.summary}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {experience.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-app-bg px-2 py-1 font-mono text-xs text-text"
              >
                {tech}
              </span>
            ))}
            {experience.stack.length > 3 && (
              <span className="rounded-md border border-white/10 bg-app-bg px-2 py-1 font-mono text-xs text-text-muted">
                +{experience.stack.length - 3}
              </span>
            )}
          </div>
          <button
            onClick={() => {/* This will be handled by parent component */}}
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-text transition-all hover:border-accent-purple/40 hover:text-accent-purple min-h-[36px]"
          >
            View Details
          </button>
        </div>
      </div>
    </FadeIn>
  )
}
