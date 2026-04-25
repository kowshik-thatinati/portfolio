import { contact } from '../data/content'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent-purple/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
            <p className="font-mono text-sm text-accent">B.Tech CSE · AI/ML & systems</p>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Kowshik Thatinati
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px bg-gradient-to-r from-transparent to-accent w-8"></span>
            <p className="max-w-2xl text-lg font-medium text-text-muted sm:text-xl">
              AI/ML Engineer <span className="text-accent">|</span> Full Stack Developer
            </p>
            <span className="h-px bg-gradient-to-l from-transparent to-accent w-8"></span>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
            Building end-to-end AI pipelines—from adversarial robustness and federated learning to RAG systems and
            deployable demos. Specializing in computer vision, distributed learning, and production-grade ML systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-app-surface/50 px-3 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-purple"></div>
              <span className="font-mono text-xs text-text-muted">Computer Vision</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-app-surface/50 px-3 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
              <span className="font-mono text-xs text-text-muted">Federated Learning</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-app-surface/50 px-3 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-purple"></div>
              <span className="font-mono text-xs text-text-muted">Adversarial ML</span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-app-bg shadow-[0_0_24px_rgba(0,245,255,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,245,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Projects
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-text transition-all hover:border-accent/40 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
