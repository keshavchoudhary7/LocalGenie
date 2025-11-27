import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Testimonials.module.css'
import { Star } from 'lucide-react'
import { gsap } from 'gsap'

const TestimonialCard = ({ userPhoto, rating, quote, userName, serviceUsed }) => {
  const starsRef = useRef()

  useEffect(() => {
    if (!starsRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const stars = starsRef.current.querySelectorAll('.star')
    gsap.fromTo(stars, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.12, duration: 0.35, ease: 'back.out(2)' })
  }, [])

  return (
    <article className={styles.card}>
      <div className={styles.photoWrap}>
        <div className={styles.photo}>
          {userPhoto ? <img src={userPhoto} alt={userName} /> : <div className={styles.placeholder}>{userName.split(' ')[0][0]}</div>}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.stars} ref={starsRef} aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star className={`star ${i < rating ? styles.filled : styles.empty}`} key={i} />
          ))}
        </div>
        <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
        <div className={styles.meta}><strong>{userName}</strong> • <span className={styles.badge}>{serviceUsed}</span></div>
      </div>
    </article>
  )
}

TestimonialCard.propTypes = {
  userPhoto: PropTypes.string,
  rating: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  serviceUsed: PropTypes.string
}

export default TestimonialCard
