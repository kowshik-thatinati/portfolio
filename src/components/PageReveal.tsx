import { useEffect, useState } from 'react'
import { usePageReveal } from '../hooks/useScrollAnimation'

export function PageReveal() {
  const { scrollProgress, scrollDirection } = usePageReveal()
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      
      setIsAtTop(scrollTop === 0)
      setIsAtBottom(scrollTop >= scrollHeight - 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top reveal effect */}
      <div 
        className={`fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-app-bg to-transparent pointer-events-none transition-opacity duration-700 z-20 ${
          isAtTop ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Bottom reveal effect */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-app-bg to-transparent pointer-events-none transition-opacity duration-700 z-20 ${
          isAtBottom ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-app-surface/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accent-purple transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll direction indicator */}
      {scrollDirection === 'up' && (
        <div className="fixed bottom-8 right-8 z-30">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-app-surface/80 px-3 py-2 backdrop-blur-sm transition-all duration-300 opacity-100 translate-y-0">
            <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-mono text-xs text-text-muted">Scroll to top</span>
          </div>
        </div>
      )}
    </>
  )
}
