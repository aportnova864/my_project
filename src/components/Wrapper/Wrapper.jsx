import React from 'react'
import styles from './Wrapper.module.css'
import Nav from './Nav/Nav'
import Content from './Content/Content'
const Wrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <Content state={props.state} />
    </div>
  )
}

export default Wrapper
