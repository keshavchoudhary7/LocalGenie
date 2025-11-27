import { useRef, useState, useEffect } from 'react'

/**
 * useCountUp
 * Returns [ref, value]
 * Pass endValue and duration (ms) via params
 * The hook starts counting when the ref element becomes visible in viewport
 */
export function useCountUp({ endValue = 0, duration = 2000, startOnInView = true } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    let started = false

    const start = () => {
      if (started) return
      started = true
      const startTime = performance.now()
      const from = 0
      const to = Number(endValue) || 0

      const step = (now) => {
        const elapsed = Math.min(now - startTime, duration)
        const progress = duration === 0 ? 1 : elapsed / duration
        const eased = progress // linear for now; could add easing
        const current = Math.floor(from + (to - from) * eased)
        setValue(current)
        if (elapsed < duration) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          setValue(to)
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    if (!startOnInView) {
      start()
      return () => cancelAnimationFrame(rafRef.current)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          start()
          observer.disconnect()
        }
      })
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [endValue, duration, startOnInView])

  return [ref, value]
}
