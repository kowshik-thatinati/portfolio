import { FadeIn } from './FadeIn'

interface Certification {
  id: string
  title: string
  project: string
  description: string
  imageUrl: string
  certificateUrl: string
  date: string
  issuer: string
}

const certifications: Certification[] = [
  {
    id: 'aragog-certification',
    title: 'ARAGOG Project Completion',
    project: 'ARAGOG',
    description: 'Advanced AI system design certification for successful completion of the ARAGOG modular intelligent architecture project.',
    imageUrl: 'https://drive.google.com/file/d/1PSG_ewxEy3PyOtuH1RY5_KY7q3OdqvIz/view?usp=sharing',
    certificateUrl: 'https://drive.google.com/file/d/1PSG_ewxEy3PyOtuH1RY5_KY7q3OdqvIz/view?usp=sharing',
    date: '2025',
    issuer: 'Project Certification'
  },
  {
    id: 'stale-fruit-detector-certification',
    title: 'Stale Fruit Detector Certification',
    project: 'Stale Fruit Detector',
    description: 'Computer vision certification for developing and implementing real-time fruit freshness classification system with robust inference pipeline.',
    imageUrl: 'https://drive.google.com/file/d/1UBmAkOYrwN6Igvxr2Nuz_7FhXkuW10_a/view?usp=sharing',
    certificateUrl: 'https://drive.google.com/file/d/1UBmAkOYrwN6Igvxr2Nuz_7FhXkuW10_a/view?usp=sharing',
    date: '2025',
    issuer: 'CV/ML Certification'
  }
]

export function Certifications() {
  return (
    <section className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="font-mono text-sm text-accent">Certifications</p>
            <h2 className="mt-2 font-heading text-3xl font-bold gradient-text sm:text-4xl">Selected Certifications</h2>
            <p className="mt-4 max-w-2xl mx-auto text-text-muted">
              A small set of project-backed certifications and proofs.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 200}>
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-app-elevated/60 to-app-elevated/30 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-accent/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-linear-to-br from-accent to-accent-purple flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-text group-hover:text-accent transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-text-muted font-medium">{cert.project}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 bg-app-surface/50 px-3 py-1 text-xs text-text-muted">{cert.date}</span>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-app-bg transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
              <span className="font-mono text-xs text-accent">Selected proofs only</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
