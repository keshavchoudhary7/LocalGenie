import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.css'
import { theme } from '../../theme'
import { Menu, X } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ transparent = true, fixed = true }) => {
  const [open, setOpen] = useState(false)
  const { isScrolled } = useScrollAnimation(80)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <motion.nav
      className={`${styles.nav} ${fixed ? styles.fixed : ''} ${transparent && !isScrolled ? styles.transparent : ''}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>LocalGenie</span>
        </div>

        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.ctaAndMenu}>
          <button className={styles.cta}>Get Started</button>

          <button className={styles.burger} aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className={styles.mobileLinks}>
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#how" onClick={() => setOpen(false)}>How It Works</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <button className={styles.mobileCta} onClick={() => setOpen(false)}>Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

Navbar.propTypes = {
  transparent: PropTypes.bool,
  fixed: PropTypes.bool
}

export default Navbar
