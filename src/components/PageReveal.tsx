import { useEffect, useState } from 'react'
import { usePageReveal } from '../hooks/useScrollAnimation'

export function PageReveal() {
  const { scrollProgress } = usePageReveal()
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      setIsAtBottom(scrollTop >= scrollHeight - 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Bottom reveal effect */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-700 z-20 ${
          isAtBottom ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: 'linear-gradient(to top, var(--color-app-bg), transparent)' }}
      />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-app-surface/20 z-50">
        <div 
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`,
            backgroundImage: 'linear-gradient(to right, var(--color-accent), var(--color-accent-purple))',
          }}
        />
      </div>

    </>
  )
}
