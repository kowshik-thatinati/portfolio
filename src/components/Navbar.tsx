const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-app-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-heading text-sm font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          KT<span className="text-accent">.</span>
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-md px-2 py-1.5 text-sm text-text-muted transition-colors hover:bg-white/5 hover:text-text sm:px-3"
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
