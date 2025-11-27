import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * Card Component
 * Generic container with flexible styling options
 * 
 * @param {ReactNode} children - Card content
 * @param {boolean} shadow - Show shadow (default true)
 * @param {boolean} border - Show border
 * @param {string} padding - Padding size: 'small', 'medium' (default), 'large'
 * @param {string} background - Background color: 'white' (default), 'light', 'dark'
 * @param {boolean} hoverLift - Lift on hover
 * @param {string} borderRadius - Border radius: 'small', 'medium' (default), 'large'
 * @param {string} className - Additional CSS classes
 */
const Card = ({
  children,
  shadow = true,
  border = false,
  padding = 'medium',
  background = 'white',
  hoverLift = false,
  borderRadius = 'medium',
  className = '',
  ...props
}) => {
  const classes = [
    styles.card,
    shadow && styles.shadow,
    border && styles.border,
    styles[`padding_${padding}`],
    styles[`bg_${background}`],
    hoverLift && styles.hoverLift,
    styles[`radius_${borderRadius}`],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
  border: PropTypes.bool,
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  background: PropTypes.oneOf(['white', 'light', 'dark']),
  hoverLift: PropTypes.bool,
  borderRadius: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
}

export default Card
