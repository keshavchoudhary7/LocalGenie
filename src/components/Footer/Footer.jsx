import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'
import { Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { gsap } from 'gsap'

const Footer = ({ socialLinks = [], serviceLinks = [], quickLinks = [], onNewsletterSubmit }) => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 0.8, ease: 'power3.inOut' })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      onNewsletterSubmit?.(email)
      setEmail('')
    }
  }

  const defaultServices = ['Plumbing', 'Electrical', 'Carpentry', 'Cleaning', 'Moving']
  const defaultQuick = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#' }
  ]
  const defaultSocial = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4>About LocalGenie</h4>
            <p>Your trusted AI-powered local services marketplace. Connect with verified professionals instantly.</p>
            <div className={styles.socials}>
              {(socialLinks.length > 0 ? socialLinks : defaultSocial).map((s, i) => {
                const Icon = s.icon
                return (
                  <a key={i} href={s.href} aria-label={s.label} className={styles.socialLink}>
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <ul>
              {(serviceLinks.length > 0 ? serviceLinks : defaultServices).map((s, i) => (
                <li key={i}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              {(quickLinks.length > 0 ? quickLinks : defaultQuick).map((q, i) => (
                <li key={i}><a href={q.href}>{q.label}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Newsletter</h4>
            <p>Get updates on new services and offers.</p>
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletter}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} LocalGenie. All rights reserved.</p>
        </div>
      </div>

      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </footer>
  )
}

Footer.propTypes = {
  socialLinks: PropTypes.array,
  serviceLinks: PropTypes.array,
  quickLinks: PropTypes.array,
  onNewsletterSubmit: PropTypes.func
}

export default Footer
