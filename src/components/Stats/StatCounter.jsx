import React from 'react'
import PropTypes from 'prop-types'
import styles from './Stats.module.css'
import { useCountUp } from '../../hooks/useCountUp'

const StatCounter = ({ icon: Icon, endValue, label, suffix = '', duration = 2000 }) => {
  const [ref, value] = useCountUp({ endValue, duration, startOnInView: true })

  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.icon}>{Icon ? <Icon /> : null}</div>
      <div className={styles.value} aria-live="polite">{value.toLocaleString()}{suffix}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

StatCounter.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  endValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number
}

export default StatCounter
