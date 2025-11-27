import React, { useEffect, useRef } from 'react'
import styles from './Chatbot.module.css'
import { gsap } from 'gsap'

const ChatMockup = ({ messages = [] }) => {
  const containerRef = useRef()

  useEffect(() => {
    if (!containerRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const children = containerRef.current.querySelectorAll('.bubble')
    const tl = gsap.timeline()
    children.forEach((c, i) => {
      tl.fromTo(c, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, i * 0.4)
    })
    return () => tl.kill()
  }, [messages])

  return (
    <div className={styles.mockup} aria-hidden>
      <div className={styles.phone}>
        <div className={styles.screen} ref={containerRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${styles.bubble} ${m.sender === 'user' ? styles.user : styles.ai}`}>{m.text}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatMockup
