import React from 'react'
import styles from './Services.module.css'
import ServiceCard from './ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Wrench, Plug, Hammer, Brush, Truck, Droplet } from 'lucide-react'
import { CONTENT } from '../../constants'

const ICON_MAP = {
  plumbing: Droplet,
  electrical: Plug,
  carpentry: Hammer,
  cleaning: Wrench,
  moving: Truck,
  painting: Brush,
  ac_repair: Wrench,
  appliance_repair: Wrench
  
}

const ServicesCarousel = () => {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <header className={styles.header}><h2>Popular Services</h2></header>

        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{ rotate: 20, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
        >
          {CONTENT.services.map((s, idx) => (
            <SwiperSlide key={s.key}>
              <ServiceCard
                icon={ICON_MAP[s.key]}
                serviceName={s.title}
                startingPrice={s.price}
                onBook={() => alert('Book ' + s.title)}
                featured={idx === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ServicesCarousel
