import { FadeIn } from './FadeIn'

export function CurrentWork() {
  return (
    <section className="border-y border-white/5 bg-app-surface/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-mono text-sm text-accent-purple">Now</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl">What I&apos;m currently building</h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-xl border border-white/10 bg-app-bg/60 p-6 transition hover:border-accent-purple/35 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <h3 className="font-heading text-xl font-semibold text-text">JOB TRACKING APPLICATION</h3>
              <p className="mt-3 text-base font-medium text-accent">A Job Tracking Application</p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Currently building an end-to-end Job Application Tracker to manage and monitor job applications efficiently.
                Focuses on backend architecture, authentication, and seamless frontend–backend integration.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="h-full rounded-xl border border-white/10 bg-app-bg/60 p-6 transition hover:border-accent-purple/35 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)]">
              <h3 className="font-heading text-xl font-semibold text-text">Event-Driven Order Management System</h3>
              <p className="mt-3 text-base font-medium text-accent">Microservices + CI/CD</p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Currently building an industry-style backend system to handle orders, payments, and inventory across services.
                Emphasizing system design, distributed communication, and end-to-end CI/CD pipeline integration.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
