import React from 'react'
import PropTypes from 'prop-types'
import styles from './SectionHeader.module.css'

/**
 * SectionHeader Component
 * Consistent section title styling with optional subtitle and underline animation
 * 
 * @param {string} title - Main heading
 * @param {string} subtitle - Optional subheading
 * @param {string} align - Text alignment: 'left', 'center' (default), 'right'
 * @param {string} size - Title size: 'small', 'medium' (default), 'large'
 * @param {boolean} underline - Show animated underline
 * @param {string} className - Additional CSS classes
 */
const SectionHeader = ({
  title,
  subtitle,
  align = 'center',
  size = 'medium',
  underline = true,
  className = '',
  ...props
}) => {
  return (
    <header
      className={`${styles.header} ${styles[`align_${align}`]} ${styles[`size_${size}`]} ${className}`}
      {...props}
    >
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{title}</h2>
        {underline && <div className={styles.underline} />}
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  underline: PropTypes.bool,
  className: PropTypes.string
}

export default SectionHeader
