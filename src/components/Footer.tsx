export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center sm:px-6">
      <p className="font-mono text-xs text-text-muted">
        © {new Date().getFullYear()} Kowshik Thatinati · Built with React &amp; Tailwind
      </p>
    </footer>
  )
}
