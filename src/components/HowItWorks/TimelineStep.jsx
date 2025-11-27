import React from 'react'
import PropTypes from 'prop-types'
import styles from './HowItWorks.module.css'

const TimelineStep = ({ stepNumber, icon: Icon, title, description, isLast }) => {
  return (
    <div className={styles.step}>
      <div className={styles.marker}>
        <div className={styles.stepNum}>{stepNumber}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.icon}>{Icon ? <Icon /> : null}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>

      {!isLast && <div className={styles.connector} aria-hidden />}
    </div>
  )
}

TimelineStep.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isLast: PropTypes.bool
}

export default TimelineStep
