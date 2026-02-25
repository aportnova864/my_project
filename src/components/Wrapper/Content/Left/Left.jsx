import React from 'react'
import styles from './Left.module.css'
import Info from './Info/Info'
import Suggestions from './Suggestions/Suggestions'
const Left = () => {
  return (
    <div className={styles.left}>
      <Info />
      <Suggestions />
    </div>
  )
}

export default Left
