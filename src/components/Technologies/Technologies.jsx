import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { technologies } from '../../data/technologies'
import styles from './Technologies.module.css'

import 'swiper/css'
import 'swiper/css/free-mode'

export default function Technologies() {
  const ref = useScrollAnimation()

  return (
    <section id="technologies" className={styles.section}>
      <div className={`${styles.container} fade-in`} ref={ref}>
        <h2 className={styles.sectionTitle}>Tecnologias</h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          slidesPerView="auto"
          spaceBetween={16}
          grabCursor={true}
          className={styles.swiper}
        >
          {technologies.map((tech, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.techCard}>
                <div className={styles.iconWrapper}>
                  <img src={tech.logo} alt={tech.name} className={styles.icon} />
                </div>
                <span className={styles.name}>{tech.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
