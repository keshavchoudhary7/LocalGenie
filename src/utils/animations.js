import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register plugins
gsap.registerPlugin(ScrollToPlugin)

/**
 * GSAP Animation Presets
 * Reusable animation configurations for common patterns
 */

export const animations = {
  /**
   * Fade In animation
   * @param {Element} target - Target element
   * @param {Object} opts - Additional GSAP options
   */
  fadeIn: (target, opts = {}) => {
    return gsap.fromTo(
      target,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out', ...opts }
    )
  },

  /**
   * Slide Up animation
   * @param {Element} target - Target element
   * @param {Object} opts - Additional GSAP options
   */
  slideUp: (target, opts = {}) => {
    return gsap.fromTo(
      target,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', ...opts }
    )
  },

  /**
   * Stagger animation for multiple elements
   * @param {NodeList|Array} targets - Target elements
   * @param {Object} opts - Additional GSAP options
   */
  stagger: (targets, opts = {}) => {
    return gsap.fromTo(
      targets,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', ...opts }
    )
  },

  /**
   * Scale pulse animation
   * @param {Element} target - Target element
   * @param {Object} opts - Additional GSAP options
   */
  pulse: (target, opts = {}) => {
    return gsap.to(target, {
      scale: 1.05,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      ease: 'back.inOut',
      ...opts
    })
  },

  /**
   * Smooth scroll to element or position
   * @param {string|number|Element} target - Target element or scroll position
   * @param {Object} opts - Additional GSAP options
   */
  scrollTo: (target, opts = {}) => {
    return gsap.to(window, {
      scrollTo: { y: target, autoKill: true },
      duration: 0.8,
      ease: 'power3.inOut',
      ...opts
    })
  },

  /**
   * Morph-like width transition
   * @param {Element} target - Target element
   * @param {number} toWidth - Target width (%)
   * @param {Object} opts - Additional GSAP options
   */
  morphWidth: (target, toWidth, opts = {}) => {
    return gsap.to(target, {
      width: toWidth + '%',
      duration: 0.5,
      ease: 'power3.out',
      ...opts
    })
  }
}

/**
 * Framer Motion Animation Variants
 * Predefined variants for common motion patterns
 */

export const motionVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },

  // Slide animations
  slideInUp: {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 }
  },

  slideInDown: {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 }
  },

  slideInLeft: {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 }
  },

  slideInRight: {
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 30, opacity: 0 }
  },

  // Scale animations
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },

  // Stagger container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  // Stagger item
  staggerItem: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }
}

/**
 * Setup smooth scroll behavior globally
 * Call once on app mount
 */
export const setupSmoothScroll = () => {
  if (typeof window !== 'undefined') {
    // Enable smooth scrolling with scroll-behavior CSS or GSAP
    document.documentElement.style.scrollBehavior = 'smooth'
  }
}

/**
 * Respect prefers-reduced-motion
 * @returns {boolean} - True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
