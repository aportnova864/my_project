import React from 'react'
import styles from './Wrapper.module.css'
import Nav from './Nav/Nav'
import Content from './Content/Content'
const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <Content />
    </div>
  )
}

export default Wrapper
