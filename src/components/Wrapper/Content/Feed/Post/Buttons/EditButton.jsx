import React from 'react'
import Edit from "../../../../../../assets/icons8-edit-64.png"
import styles from './EditButton.module.css'
const EditButton = () => {
  return (
    <div>
      <button className={styles.EditButton}><img src={Edit} className={styles.EditButtonImg} alt='edit' /></button>
    </div>
  )
}

export default EditButton
