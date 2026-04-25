import { challenges } from '../data/content'
import { FadeIn } from './FadeIn'

export function Challenges() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-mono text-sm text-accent">Challenges</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl">Challenges I solved</h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            Reflections aligned with internship and project work—what broke, what was measured, and what changed.
          </p>
        </FadeIn>
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {challenges.slice(0, 2).map((c) => (
              <FadeIn key={c.title}>
                <article className="rounded-xl border border-white/10 bg-app-surface/50 p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-semibold text-text">{c.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">
                    <span className="font-mono text-accent">Issue: </span>
                    {c.summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    <span className="font-mono text-accent-purple">Resolution: </span>
                    {c.resolution}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
          {challenges.length > 2 && (
            <div className="mt-8 flex justify-center">
              <FadeIn>
                <article className="w-full max-w-2xl rounded-xl border border-white/10 bg-app-surface/50 p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-semibold text-text">{challenges[2].title}</h3>
                  <p className="mt-3 text-sm text-text-muted">
                    <span className="font-mono text-accent">Issue: </span>
                    {challenges[2].summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    <span className="font-mono text-accent-purple">Resolution: </span>
                    {challenges[2].resolution}
                  </p>
                </article>
              </FadeIn>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
