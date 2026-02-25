import React from 'react'
import styles from './Right.module.css'
import Courses from './Courses/Courses'
import Friends from './Friends/Friends'
import Videos from './Videos/Videos'
const Right = () => {
  return (
    <div className={styles.right}>
      <Courses />
      <Friends />
      <Videos />
    </div>
  )
}

export default Right
