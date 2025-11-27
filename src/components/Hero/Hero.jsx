import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import { theme } from '../../theme'
import ThreeBackground from './ThreeBackground'
import { motion } from 'framer-motion'
import { useGSAP } from '../../hooks/useGSAP'

const Hero = ({ title, subtitle, primaryCTA, secondaryCTA, trustBadges = [] }) => {
  const ref = useRef(null)
  useGSAP(ref)

  return (
    <section className={styles.hero} ref={ref}>
      <ThreeBackground />

      <div className={styles.inner + ' container'}>
        <div className={styles.left}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>{title}</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}>{subtitle}</motion.p>

          <div className={styles.ctas}>
            <button className={styles.primary} onClick={primaryCTA?.onClick}>{primaryCTA?.text || 'Find Services'}</button>
            <button className={styles.outline} onClick={secondaryCTA?.onClick}>{secondaryCTA?.text || 'Become a Provider'}</button>
          </div>

          <div className={styles.trust}>
            {trustBadges.map((b, i) => (
              <div key={i} className={styles.badge}>{b}</div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.illustration} aria-hidden>3D Illustration</div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primaryCTA: PropTypes.object,
  secondaryCTA: PropTypes.object,
  trustBadges: PropTypes.array
}

export default Hero
