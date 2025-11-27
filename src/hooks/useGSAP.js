import { useEffect } from 'react'
import { gsap } from 'gsap'

export function useGSAP(ref) {
  useEffect(() => {
    if (!ref?.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('h1, p, .ctas, .trust'), {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out'
      })
    }, ref)

    return () => ctx.revert()
  }, [ref])
}
