import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

/**
 * Input Component
 * Text input with floating label, validation states, and icon support
 * 
 * @param {string} label - Floating label text
 * @param {string} type - Input type (default 'text')
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} error - Error message (shows error state)
 * @param {string} success - Success message (shows success state)
 * @param {ReactNode} icon - Icon to display inside input
 * @param {boolean} required - Required field
 * @param {string} className - Additional CSS classes
 */
const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  error = '',
  success = '',
  icon,
  required = false,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const hasValue = value && value.length > 0
  const hasError = !!error
  const hasSuccess = !!success

  const classes = [
    styles.wrap,
    focused && styles.focused,
    hasValue && styles.filled,
    hasError && styles.error,
    hasSuccess && styles.success,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrap}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={hasError}
          aria-describedby={error || success ? `${label}-message` : undefined}
          {...props}
        />
      </div>
      {(error || success) && (
        <p id={`${label}-message`} className={`${styles.message} ${hasError ? styles.errorMsg : styles.successMsg}`}>
          {error || success}
        </p>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.string,
  icon: PropTypes.node,
  required: PropTypes.bool,
  className: PropTypes.string
}

export default Input
