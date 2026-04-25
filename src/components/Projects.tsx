import { useState } from 'react'
import { projects } from '../data/content'
import type { Project } from '../types/project'
import { FadeIn } from './FadeIn'
import { Modal } from './Modal'
import { ProjectCard } from './ProjectCard'
import { ExpandableProjectCard } from './ExpandableProjectCard'
import { useMobileDetection } from '../hooks/useMobileDetection'

const filters = ['All', 'AI/ML', 'Computer Vision', 'Web', 'Systems'] as const
type Filter = (typeof filters)[number]

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-accent">{children}</h3>
  )
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [activeImage, setActiveImage] = useState<{
    src: string
    alt: string
    caption: string
  } | null>(null)
  const { isMobile, isTablet } = useMobileDetection()

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.categories.includes(activeFilter))

  const useModal = !isMobile // Use modal on desktop/tablet, expandable cards on mobile

  return (
    <>
      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="font-mono text-sm text-accent">Projects</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl lg:text-5xl">Engineering case studies</h2>
            <p className="mt-4 max-w-2xl text-text-muted text-base sm:text-lg">
              Product-style project showcases focused on problem framing, system architecture, and technical execution.
            </p>
          </FadeIn>

          <FadeIn className="mt-8">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const activeChip = activeFilter === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 min-h-[44px] ${
                      activeChip
                        ? 'border border-accent/40 bg-accent/15 text-accent shadow-[0_0_24px_rgba(0,245,255,0.16)]'
                        : 'border border-white/10 bg-app-surface/50 text-text-muted hover:border-accent/30 hover:text-accent'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </FadeIn>

          {/* Mobile: Expandable Cards */}
          {isMobile && (
            <div className="mt-10 space-y-6">
              {filteredProjects.map((project, i) => (
                <ExpandableProjectCard 
                  key={`${activeFilter}-${project.id}`} 
                  project={project} 
                  isMobile={true}
                />
              ))}
            </div>
          )}

          {/* Desktop/Tablet: Grid with Modal */}
          {!isMobile && (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {filteredProjects.map((project, i) => (
                <FadeIn key={`${activeFilter}-${project.id}`} className="transition-all duration-300">
                  <div className="project-card-enter" style={{ animationDelay: `${i * 70}ms` }}>
                    <ProjectCard project={project} onOpen={setActive} />
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
                  <SectionTitle>Impact</SectionTitle>
                  <p className="text-text">{active.impact}</p>
                </div>
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
                  <SectionTitle>Key features</SectionTitle>
                  <ul className="list-inside list-disc space-y-2">
                    {active.keyFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
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
                  <SectionTitle>Results / insights</SectionTitle>
                  <ul className="list-inside list-disc space-y-2">
                    {active.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionTitle>Screenshots</SectionTitle>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {active.screenshots.map((img) => (
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
                    {active.screenshotPlaceholders.map((placeholder) => (
                      <div
                        key={placeholder}
                        className="flex min-h-[12rem] items-center justify-center rounded-xl border border-dashed border-white/15 bg-app-bg/20 p-6 text-center text-xs text-text-muted"
                      >
                        {placeholder} (placeholder)
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-app-bg transition hover:opacity-90 min-h-[44px]"
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
            title={activeImage?.caption ?? 'Screenshot'}
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
