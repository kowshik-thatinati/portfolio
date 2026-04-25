import { type ReactNode, type HTMLAttributes } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  threshold?: number
} & HTMLAttributes<HTMLDivElement>

export function FadeIn({ 
  children, 
  delay = 0, 
  className = '', 
  duration = 600,
  direction = 'up',
  threshold = 0.1,
  ...props 
}: FadeInProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold })

  const animationStyles = {
    transition: `all ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : 
               direction === 'up' ? 'translateY(30px)' :
               direction === 'down' ? 'translateY(-30px)' :
               direction === 'left' ? 'translateX(30px)' :
               'translateX(-30px)',
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={animationStyles}
      {...props}
    >
      {children}
    </div>
  )
}
