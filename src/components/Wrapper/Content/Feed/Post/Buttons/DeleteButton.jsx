import React from 'react'
import Delete from "../../../../../../assets/icons8-delete-100.png"
import styles from './DeleteButton.module.css'
const DeleteButton = () => {
  return (
    <div>
      <button className={styles.DeleteButton}><img src={Delete} className={styles.DeleteButtonImg} alt='delete' /></button>
    </div>
  )
}

export default DeleteButton
