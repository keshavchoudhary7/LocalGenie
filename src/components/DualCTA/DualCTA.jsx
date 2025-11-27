import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './DualCTA.module.css'
import { gsap } from 'gsap'

const DualCTA = ({ leftSide, rightSide, reversed = false }) => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // Ensure initial layout (50/50)
    if (!containerRef.current) return
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Reset on mount
    gsap.set([leftRef.current, rightRef.current], { flexBasis: '50%' })
  }, [])

  const onHover = (side) => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    if (side === 'left') {
      gsap.to(leftRef.current, { flexBasis: '60%', duration: 0.5, ease: 'power3.out' })
      gsap.to(rightRef.current, { flexBasis: '40%', duration: 0.5, ease: 'power3.out' })
    } else {
      gsap.to(leftRef.current, { flexBasis: '40%', duration: 0.5, ease: 'power3.out' })
      gsap.to(rightRef.current, { flexBasis: '60%', duration: 0.5, ease: 'power3.out' })
    }
  }

  const onLeave = () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    gsap.to([leftRef.current, rightRef.current], { flexBasis: '50%', duration: 0.45, ease: 'power3.out' })
  }

  const Left = (
    <div
      ref={leftRef}
      className={`${styles.half} ${styles.left} ${reversed ? styles.reversedLeft : ''}`}
      role="button"
      tabIndex={0}
      onClick={leftSide.onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && leftSide.onClick && leftSide.onClick()}
      onMouseEnter={() => onHover('left')}
      onMouseLeave={onLeave}
      aria-label={leftSide.title}
    >
      <div className={styles.inner}>
        <h3 className={styles.title}>{leftSide.title}</h3>
        <ul className={styles.points}>
          {leftSide.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <button className={styles.button} onClick={(e) => { e.stopPropagation(); leftSide.onClick && leftSide.onClick() }}>{leftSide.buttonText}</button>
      </div>
    </div>
  )

  const Right = (
    <div
      ref={rightRef}
      className={`${styles.half} ${styles.right} ${reversed ? styles.reversedRight : ''}`}
      role="button"
      tabIndex={0}
      onClick={rightSide.onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && rightSide.onClick && rightSide.onClick()}
      onMouseEnter={() => onHover('right')}
      onMouseLeave={onLeave}
      aria-label={rightSide.title}
    >
      <div className={styles.inner}>
        <h3 className={styles.title}>{rightSide.title}</h3>
        <ul className={styles.points}>
          {rightSide.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <button className={styles.button} onClick={(e) => { e.stopPropagation(); rightSide.onClick && rightSide.onClick() }}>{rightSide.buttonText}</button>
      </div>
    </div>
  )

  return (
    <section className={styles.section} id="dualcta">
      <div className={styles.container} ref={containerRef}>
        {reversed ? Right : Left}
        {reversed ? Left : Right}
      </div>
    </section>
  )
}

DualCTA.propTypes = {
  leftSide: PropTypes.shape({ title: PropTypes.string, points: PropTypes.array, buttonText: PropTypes.string, onClick: PropTypes.func }),
  rightSide: PropTypes.shape({ title: PropTypes.string, points: PropTypes.array, buttonText: PropTypes.string, onClick: PropTypes.func }),
  reversed: PropTypes.bool
}

export default DualCTA
