import React from 'react'
import PropTypes from 'prop-types'
import styles from './Features.module.css'
import { motion } from 'framer-motion'

const FeatureCard = ({ Icon, title, description, delay = 0 }) => {
  return (
    <motion.article
      className={styles.card}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      tabIndex={0}
      aria-labelledby={`feature-${title}`}
    >
      <div className={styles.iconWrap} aria-hidden>
        <div className={styles.iconCircle}>
          {Icon ? <Icon className={styles.icon} /> : null}
        </div>
      </div>

      <div className={styles.body}>
        <h3 id={`feature-${title}`} className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </motion.article>
  )
}

FeatureCard.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  delay: PropTypes.number
}

export default FeatureCard
