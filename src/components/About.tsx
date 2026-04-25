import { FadeIn } from './FadeIn'

export function About() {
  return (
    <section id="about" className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="font-mono text-sm text-accent">About</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text sm:text-4xl">AI/ML Engineering Student</h2>
          </div>
          <div className="mt-8 mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-text-muted">
            <p className="text-lg">
              AI/ML-focused engineering student with hands-on experience in <span className="text-accent font-medium">computer vision</span>, <span className="text-accent-purple font-medium">adversarial attacks</span>, and
              <span className="text-accent font-medium"> distributed learning systems</span>. I build end-to-end AI pipelines that connect deep learning models
              to real-world applications—from robustness testing on detectors to full-stack RAG services.
            </p>
            <p className="text-lg">
              Passionate about understanding how models fail under stress, optimizing data flow in federated settings, and
              creating production-ready interfaces that make cutting-edge research accessible and practical.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-app-surface/50 to-app-surface/30 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-accent-purple">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent"></div>
                  <div>
                    <span className="font-semibold text-text">Keshav Memorial College of Engineering</span>
                    <p className="text-sm text-text-muted mt-1">B.Tech Computer Science & Engineering · 2023 – Present</p>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1">
                      <span className="font-mono text-xs text-accent font-medium">GPA 7.2</span>
                    </div>
                  </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent-purple"></div>
                  <div>
                    <span className="font-semibold text-text">Narayana Junior College</span>
                    <p className="text-sm text-text-muted mt-1">Intermediate · 2022</p>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent-purple/10 px-2 py-1">
                      <span className="font-mono text-xs text-accent-purple font-medium">94.8%</span>
                    </div>
                  </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent"></div>
                  <div>
                    <span className="font-semibold text-text">Geeta High School</span>
                    <p className="text-sm text-text-muted mt-1">GPA · 2019</p>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1">
                      <span className="font-mono text-xs text-accent font-medium">9.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-app-surface/50 to-app-surface/30 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-accent-purple">Experience</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-text">AI/ML Intern</span>
                    <span className="text-accent">•</span>
                    <span className="text-sm text-accent">IIT Tirupati</span>
                  </div>
                  <p className="text-sm text-text-muted mb-3">Under Dr. Chalavadi Vishnu</p>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-2 border-accent bg-accent/5 pl-4 py-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-accent font-semibold">Phase 1</span>
                        <span className="text-xs text-text-muted">May – Jul 2025</span>
                      </div>
                      <p className="text-sm text-text-muted">FGSM adversarial attacks on YOLOv5 & Faster R-CNN; robustness analysis on confidence and accuracy.</p>
                    </div>
                    <div className="rounded-lg border-l-2 border-accent-purple bg-accent-purple/5 pl-4 py-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-accent-purple font-semibold">Phase 2</span>
                        <span className="text-xs text-text-muted">Feb – May 2026</span>
                      </div>
                      <p className="text-sm text-text-muted">Federated learning pipeline for YOLO detection, non-IID clients, FedAvg secure aggregation, communication-efficient training loop.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-app-elevated/40 to-app-elevated/20 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-accent-purple">Achievements & Highlights</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-lg border border-white/5 bg-app-surface/30 p-4 transition-all hover:border-accent/30 hover:bg-accent/5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">Google Agentic Hackathon</p>
                    <p className="text-xs text-text-muted mt-1">Focused on agent-driven AI solutions and autonomous systems</p>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg border border-white/5 bg-app-surface/30 p-4 transition-all hover:border-accent-purple/30 hover:bg-accent-purple/5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent-purple flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-text group-hover:text-accent-purple transition-colors">NGIT Hackathon</p>
                    <p className="text-xs text-text-muted mt-1">Ranked 10th out of 200 participants in competitive coding</p>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg border border-white/5 bg-app-surface/30 p-4 transition-all hover:border-accent/30 hover:bg-accent/5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">FOSSEE Program</p>
                    <p className="text-xs text-text-muted mt-1">Open-source web contributions at IIT Bombay</p>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg border border-white/5 bg-app-surface/30 p-4 transition-all hover:border-accent-purple/30 hover:bg-accent-purple/5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent-purple flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-text group-hover:text-accent-purple transition-colors">Leadership</p>
                    <p className="text-xs text-text-muted mt-1">Head of Arts Club at KMCE, overseeing team coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
