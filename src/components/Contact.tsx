import { contact } from '../data/content'
import { FadeIn } from './FadeIn'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-mono text-sm text-accent">Contact</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl">Let&apos;s connect</h2>
          <p className="mt-4 max-w-xl text-text-muted">
            Reach out for collaborations, internships, or research-adjacent engineering roles.
          </p>
        </FadeIn>
        <FadeIn className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`mailto:${contact.email}`}
              className="group rounded-xl border border-white/10 bg-app-surface/60 p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(0,245,255,0.1)]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">Email</p>
              <p className="mt-2 break-all text-sm text-text transition group-hover:text-accent">{contact.email}</p>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-xl border border-white/10 bg-app-surface/60 p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(0,245,255,0.1)]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">GitHub</p>
              <p className="mt-2 text-sm text-text transition group-hover:text-accent">{contact.githubLabel}</p>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-xl border border-white/10 bg-app-surface/60 p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(0,245,255,0.1)]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">LinkedIn</p>
              <p className="mt-2 text-sm text-text transition group-hover:text-accent">{contact.linkedinLabel}</p>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
