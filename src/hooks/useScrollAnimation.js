import { useState, useEffect } from 'react'

/**
 * useScrollAnimation
 * @param {number} threshold - px after which isScrolled becomes true
 * @returns {{scrollY: number, isScrolled: boolean}}
 */
export function useScrollAnimation(threshold = 50) {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setScrollY(y)
      setIsScrolled(y > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { scrollY, isScrolled }
}
