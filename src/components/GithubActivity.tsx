import { FadeIn } from './FadeIn'
import { contact } from '../data/content'

/** Mock contribution intensities: 0 = empty, 1–4 = increasingly bright */
const WEEKS = 40
const DAYS = 7

function hashIntensity(week: number, day: number): 0 | 1 | 2 | 3 | 4 {
  const n = (week * 13 + day * 7 + (week % 5)) % 11
  if (n < 3) return 0
  if (n < 5) return 1
  if (n < 7) return 2
  if (n < 9) return 3
  return 4
}

const levelClass: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: 'bg-white/[0.06]',
  1: 'bg-accent/25',
  2: 'bg-accent/45',
  3: 'bg-accent/65',
  4: 'bg-accent',
}

export function GithubActivity() {
  return (
    <section className="border-t border-white/5 bg-app-surface/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="font-mono text-sm text-accent">Activity</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl">GitHub-style rhythm</h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Illustrative contribution grid for layout only—squares are generated locally and are not live GitHub
            data. Visit{' '}
            <a href={contact.github} className="text-accent underline-offset-2 hover:underline" target="_blank" rel="noreferrer noopener">
              {contact.githubLabel}
            </a>{' '}
            for real activity.
          </p>
        </FadeIn>
        <FadeIn className="mt-10">
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-app-bg/80 p-4 sm:p-6">
            <div className="inline-flex min-w-max gap-3">
              <div className="flex flex-col justify-between py-1 text-[10px] font-mono text-text-muted">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              <div className="flex gap-[3px]">
                {Array.from({ length: WEEKS }, (_, week) => (
                  <div key={week} className="flex flex-col gap-[3px]">
                    {Array.from({ length: DAYS }, (_, day) => {
                      const level = hashIntensity(week, day)
                      return (
                        <div
                          key={`${week}-${day}`}
                          className={`h-3 w-3 rounded-sm ${levelClass[level]} transition-colors hover:ring-1 hover:ring-accent/60`}
                          title={`week ${week + 1} · decorative`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
              <span className="font-mono text-text-muted/80">{contact.githubLabel} · last 40 weeks (decorative)</span>
              <div className="flex items-center gap-2 font-mono">
                <span>Less</span>
                <div className="flex gap-1">
                  {([0, 1, 2, 3, 4] as const).map((lv) => (
                    <div key={lv} className={`h-3 w-3 rounded-sm ${levelClass[lv]}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
