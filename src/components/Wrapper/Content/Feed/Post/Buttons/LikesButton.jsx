import React from 'react'
import Like from "../../../../../../assets/icons8-like-48.png"
import styles from './LikesButton.module.css'
const LikesButton = (props) => {
  return (
    <div>
      <button className={styles.LikesButton}>{props.likesCount}<img src={Like} className={styles.LikesButtonImg} alt='Like' /></button>
    </div>
  )
}

export default LikesButton
