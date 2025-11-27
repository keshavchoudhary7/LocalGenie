import React from 'react'
import styles from './HowItWorks.module.css'
import TimelineStep from './TimelineStep'
import { Smartphone, Zap, Calendar, CheckCircle } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const steps = [
  { title: 'Tell us what you need', desc: 'Describe the job and your location', icon: Smartphone },
  { title: 'AI recommends the best match', desc: 'Smart matching for your request', icon: Zap },
  { title: 'Book instantly or chat first', desc: 'Choose what suits you', icon: Calendar },
  { title: 'Get the job done right', desc: 'Rate and pay securely', icon: CheckCircle }
]

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how">
      <div className="container">
        <header className={styles.header}>
          <h2>How LocalGenie Works</h2>
          <p>Simple steps to get professional help nearby.</p>
        </header>

        <div className={styles.timelineDesktop}>
          {steps.map((s, i) => (
            <TimelineStep key={i} stepNumber={i + 1} icon={s.icon} title={s.title} description={s.desc} isLast={i === steps.length - 1} />
          ))}
        </div>

        <div className={styles.timelineMobile}>
          <Swiper slidesPerView={1} spaceBetween={12}>
            {steps.map((s, i) => (
              <SwiperSlide key={i}>
                <TimelineStep stepNumber={i + 1} icon={s.icon} title={s.title} description={s.desc} isLast={i === steps.length - 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
