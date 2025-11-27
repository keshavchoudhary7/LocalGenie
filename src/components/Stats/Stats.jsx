import React from 'react'
import styles from './Stats.module.css'
import StatCounter from './StatCounter'
import { Users, CheckCircle, Briefcase, Globe } from 'lucide-react'
import { CONTENT } from '../../constants'

const ICONS = [Users, CheckCircle, Briefcase, Globe]

const Stats = () => {
  return (
    <section className={styles.section} id="stats">
      <div className="container">
        <div className={styles.grid}>
          {CONTENT.stats.map((s, i) => (
            <StatCounter key={s.key} icon={ICONS[i]} endValue={s.endValue} label={s.label} suffix={s.suffix} duration={2000} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
