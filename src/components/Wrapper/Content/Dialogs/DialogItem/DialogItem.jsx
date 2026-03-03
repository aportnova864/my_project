import React from 'react'
import styles from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'
const DialogItem = (props) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={"/dialogs/" + props.id} className={({isActive})=>
        isActive ? styles.active : styles.link
      }>
        <div className={styles.name}>
          {props.name}
          </div>
      </NavLink>    
        <div className={styles.lastMessage}>
          {props.lastMessage}
        </div>
      
    </div>

  )
}
export default DialogItem;