import { skillCategories } from '../data/content'
import { FadeIn } from './FadeIn'

export function Skills() {
  return (
    <section className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8 tech-grid">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="font-mono text-sm text-accent">Technical Arsenal</p>
            <h2 className="mt-2 font-heading text-3xl font-bold gradient-text sm:text-4xl">AI/ML Toolkit</h2>
            <p className="mt-4 max-w-2xl mx-auto text-text-muted">
              Comprehensive skill set spanning machine learning frameworks, computer vision libraries, and production deployment tools
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.name} className={i === 3 || i === 4 ? 'lg:mt-4' : ''}>
              <div className="group relative rounded-xl border border-white/10 bg-linear-to-br from-app-elevated/60 to-app-elevated/30 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-accent/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`h-2 w-2 rounded-full ${
                      cat.name.includes('Machine') || cat.name.includes('Deep') || cat.name.includes('AI') ? 'bg-accent' : 
                      cat.name.includes('Computer') || cat.name.includes('Vision') || cat.name.includes('Core') ? 'bg-accent-purple' : 
                      cat.name.includes('Web') ? 'bg-accent' : 
                      'bg-accent'
                    } float-animation`}></div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent-purple">{cat.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="font-mono text-sm text-text group-hover:text-accent transition-colors duration-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
              <span className="font-mono text-xs text-accent">Continuously expanding skill set</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
