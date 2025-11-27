import { useRef, useState, useEffect } from 'react'

/**
 * useIntersectionObserver
 * Detects when an element enters the viewport
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin (e.g., "0px")
 * @returns {[ref, isInView]} - ref to attach to element, boolean indicating visibility
 * 
 * @example
 * const [ref, isInView] = useIntersectionObserver({ threshold: 0.5 })
 * return <div ref={ref}>{isInView && 'Visible!'}</div>
 */
export function useIntersectionObserver({ threshold = 0.5, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Optionally stop observing after first intersection
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return [ref, isInView]
}
