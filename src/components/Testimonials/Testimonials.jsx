import React from 'react'
import styles from './Testimonials.module.css'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { CONTENT } from '../../constants'

const Testimonials = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <header className={styles.header}><h2>What Our Users Say</h2></header>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={18}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
        >
          {CONTENT.testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
