import { useState } from 'react'
import { experiences } from '../data/content'
import type { Experience } from '../types/experience'
import { FadeIn } from './FadeIn'
import { Modal } from './Modal'
import { ExpandableExperienceCard } from './ExpandableExperienceCard'
import { useMobileDetection } from '../hooks/useMobileDetection'

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-accent-purple">{children}</h3>
  )
}

export function Experience() {
  const [active, setActive] = useState<Experience | null>(null)
  const [activeImage, setActiveImage] = useState<{
    src: string
    alt: string
    caption: string
  } | null>(null)
  const { isMobile } = useMobileDetection()

  const useModal = !isMobile // Use modal on desktop/tablet, expandable cards on mobile

  return (
    <>
      <section id="experience" className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-mono text-sm text-accent-purple">Experience</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl lg:text-5xl">Research & internship</h2>
            <p className="mt-4 max-w-2xl text-text-muted text-base sm:text-lg">
              Hands-on AI/ML research experience with focus on adversarial robustness and federated learning systems.
            </p>
          </FadeIn>

          {/* Mobile: Expandable Cards */}
          {isMobile && (
            <div className="mt-10 space-y-6">
              {experiences.map((exp) => (
                <ExpandableExperienceCard 
                  key={exp.id} 
                  experience={exp} 
                  isMobile={true}
                />
              ))}
            </div>
          )}

          {/* Desktop/Tablet: Grid with Modal */}
          {!isMobile && (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {experiences.map((exp, i) => (
                <FadeIn key={exp.id} className="transition-all duration-300">
                  <div className="project-card-enter" style={{ animationDelay: `${i * 70}ms` }}>
                    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-app-surface/50 p-6 transition-all duration-300 hover:border-accent-purple/30 hover:shadow-lg hover:shadow-accent-purple/10 hover:-translate-y-1">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2 py-1">
                            <span className="font-mono text-xs text-accent-purple">{exp.phaseLabel}</span>
                          </span>
                          <span className="text-sm text-text-muted">{exp.duration}</span>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-text group-hover:text-accent-purple transition-colors">
                          {exp.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-muted line-clamp-3">{exp.summary}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {exp.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/10 bg-app-bg px-2 py-1 font-mono text-xs text-text"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.stack.length > 3 && (
                            <span className="rounded-md border border-white/10 bg-app-bg px-2 py-1 font-mono text-xs text-text-muted">
                              +{exp.stack.length - 3}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setActive(exp)}
                          className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-text transition-all hover:border-accent-purple/40 hover:text-accent-purple min-h-[44px]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Desktop Modal (only shown when not mobile) */}
      {useModal && (
        <>
          <Modal open={!!active} title={active?.title ?? ''} onClose={() => setActive(null)}>
            {active && (
              <>
                <div>
                  <SectionTitle>Problem statement</SectionTitle>
                  <p>{active.problem}</p>
                </div>
                <div>
                  <SectionTitle>System overview</SectionTitle>
                  <p>{active.systemOverview}</p>
                </div>
                <div>
                  <SectionTitle>Technical approach</SectionTitle>
                  <ol className="list-inside list-decimal space-y-2">
                    {active.approachSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <SectionTitle>Results / insights</SectionTitle>
                  <ul className="list-inside list-disc space-y-2">
                    {active.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionTitle>Tech stack</SectionTitle>
                  <ul className="flex flex-wrap gap-2">
                    {active.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/10 bg-app-bg px-2.5 py-1 font-mono text-xs text-text"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionTitle>Proof</SectionTitle>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {active.proof.images.map((img) => (
                      <figure key={img.src} className="overflow-hidden rounded-xl border border-white/10 bg-app-bg/40">
                        <button
                          type="button"
                          onClick={() => setActiveImage(img)}
                          className="group relative block w-full"
                          aria-label="Open screenshot"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="h-48 w-full cursor-zoom-in object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                          />
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-black/40 px-2 py-1 font-mono text-[10px] text-text">
                              Click to expand
                            </div>
                          </div>
                        </button>
                        <figcaption className="p-3 text-xs text-text-muted">{img.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={active.proof.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center rounded-lg bg-accent-purple px-5 py-2.5 text-sm font-semibold text-app-bg transition hover:opacity-90 min-h-[44px]"
                  >
                    View Code
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-text-muted transition hover:border-white/25 hover:text-text min-h-[44px]"
                  >
                    Back to grid
                  </button>
                </div>
              </>
            )}
          </Modal>

          <Modal
            open={!!activeImage}
            title={activeImage?.caption ?? 'Proof'}
            onClose={() => setActiveImage(null)}
            variant="fullscreen"
          >
            {activeImage && (
              <figure className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-app-bg/30">
                  <img src={activeImage.src} alt={activeImage.alt} className="max-h-[84vh] w-full object-contain" />
                </div>
                <figcaption className="text-sm text-text-muted">{activeImage.alt}</figcaption>
              </figure>
            )}
          </Modal>
        </>
      )}
    </>
  )
}
