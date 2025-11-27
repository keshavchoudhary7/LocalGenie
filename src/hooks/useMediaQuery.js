import { useState, useEffect } from 'react'

/**
 * useMediaQuery
 * Detects screen size and returns responsive state
 * 
 * @param {Object} options - Breakpoint options
 * @param {number} options.mobileBreak - Mobile breakpoint in px (default 480)
 * @param {number} options.tabletBreak - Tablet breakpoint in px (default 768)
 * @param {number} options.desktopBreak - Desktop breakpoint in px (default 1024)
 * @returns {Object} - { isMobile, isTablet, isDesktop, screenWidth }
 * 
 * @example
 * const { isMobile, isTablet, isDesktop } = useMediaQuery()
 * return (
 *   <>
 *     {isMobile && <MobileNav />}
 *     {!isMobile && <DesktopNav />}
 *   </>
 * )
 */
export function useMediaQuery({ mobileBreak = 480, tabletBreak = 768, desktopBreak = 1024 } = {}) {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: 0
  })

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      setState({
        isMobile: width < tabletBreak,
        isTablet: width >= tabletBreak && width < desktopBreak,
        isDesktop: width >= desktopBreak,
        screenWidth: width
      })
    }

    // Call once on mount
    updateSize()

    // Debounce resize listener
    let timeoutId
    const onResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateSize, 150)
    }

    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timeoutId)
    }
  }, [mobileBreak, tabletBreak, desktopBreak])

  return state
}
