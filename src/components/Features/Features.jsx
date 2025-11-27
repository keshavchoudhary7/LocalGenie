import React from 'react'
import styles from './Features.module.css'
import FeatureCard from './FeatureCard'
import { CONTENT } from '../../constants'
import { Cpu, Clock, Shield, MessageSquare, CreditCard, MapPin } from 'lucide-react'

const ICONS = {
  ai_chatbot: MessageSquare,
  instant_booking: Clock,
  verified: Shield,
  chat: MessageSquare,
  secure_payments: CreditCard,
  nearby: MapPin
}

const Features = () => {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <header className={styles.header}>
          <h2>Why Choose LocalGenie</h2>
          <p>Fast, reliable, and AI-powered local services at your fingertips.</p>
        </header>

        <div className={styles.grid}>
          {CONTENT.features.map((f, i) => (
            <FeatureCard
              key={f.key}
              Icon={ICONS[f.key]}
              title={f.title}
              description={f.description}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
