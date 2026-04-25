import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  rootMargin?: string
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.16,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
