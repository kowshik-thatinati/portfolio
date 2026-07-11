export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-indigo-200/40 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
            <p className="font-mono text-sm text-accent">B.Tech CSE · AI/ML & systems</p>
          </div>
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Kowshik Thatinati
            </h1>
            <p className="max-w-2xl text-lg font-medium text-slate-600 sm:text-xl lg:mx-0">
              AI/ML Engineer <span className="text-accent">|</span> Full Stack Developer
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
              I build practical AI products and data-driven systems that are clean, measurable, and ready to ship.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to work and internship opportunities
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {['Computer Vision', 'Spring Boot', 'RAG Systems'].map((tag, index) => (
              <div
                key={tag}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm"
              >
                <div className={`h-1.5 w-1.5 rounded-full ${index % 2 === 0 ? 'bg-accent' : 'bg-accent-purple'}`} />
                <span className="font-mono text-xs text-slate-600">{tag}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[15rem] lg:max-w-[15rem]">
          <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-blue-200/50 via-white to-indigo-200/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2.5 shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/pics/profile.jpg"
                alt="Kowshik Thatinati profile photo"
                className="w-full object-contain"
              />
            </div>
            <div className="mt-3 px-1 pb-1 text-center">
              <div>
                <p className="font-heading text-base font-semibold text-slate-950">Kowshik Thatinati</p>
                <p className="text-sm text-slate-500">AI/ML Engineer · Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
