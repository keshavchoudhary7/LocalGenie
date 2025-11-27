import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

/**
 * Button Component
 * Reusable button with variants, sizes, loading state, and icon support
 * 
 * @param {string} variant - 'primary' (orange), 'secondary' (yellow), 'outline' (white border)
 * @param {string} size - 'small', 'medium' (default), 'large'
 * @param {ReactNode} children - Button text or content
 * @param {ReactNode} leftIcon - Icon to display on the left
 * @param {ReactNode} rightIcon - Icon to display on the right
 * @param {boolean} loading - Show loading state (disables button)
 * @param {boolean} disabled - Disabled state
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {loading ? <span className={styles.spinner} aria-hidden>●</span> : children}
      {rightIcon && !loading && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string
}

export default Button
