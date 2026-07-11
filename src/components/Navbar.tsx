const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-heading text-sm font-semibold tracking-tight text-slate-950 transition-colors hover:text-accent"
        >
          KT<span className="text-accent">.</span>
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 sm:px-4"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
