import { FadeIn } from './FadeIn'

export function CurrentWork() {
  return (
    <section className="border-y border-white/5 bg-app-surface/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-mono text-sm text-accent-purple">What&apos;s next</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl">Currently focused on one direction</h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            I’m concentrating on one polished, production-minded job tracking product and refining the backend, UX flow,
            and deployment story around it.
          </p>
        </FadeIn>
        <div className="mt-10 max-w-3xl">
          <FadeIn>
            <div className="h-full rounded-xl border border-white/10 bg-app-bg/60 p-6 transition hover:border-accent-purple/35 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <h3 className="font-heading text-xl font-semibold text-text">TrackHire</h3>
              <p className="mt-3 text-base font-medium text-accent">Spring Boot + React</p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Building an end-to-end job tracking product with authentication, clean application status management, and
                a deployment-ready backend/frontend flow.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
