import React from 'react'
import PropTypes from 'prop-types'
import styles from './Services.module.css'

const ServiceCard = ({ icon: Icon, serviceName, startingPrice, onBook, featured }) => {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.icon}>{Icon ? <Icon /> : null}</div>
        <h3 className={styles.title}>{serviceName}</h3>
        <p className={styles.price}>{startingPrice}</p>
        <button className={styles.book} onClick={onBook}>Book Now</button>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  serviceName: PropTypes.string.isRequired,
  startingPrice: PropTypes.string,
  onBook: PropTypes.func,
  featured: PropTypes.bool
}

export default ServiceCard
