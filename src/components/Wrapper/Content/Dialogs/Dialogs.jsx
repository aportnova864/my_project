import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
const Dialogs = (props) => {
  let DialogsElements = props.DialogsPage.DialogsData.map(dialog => (<DialogItem name = {dialog.name} id={dialog.id} />))
  let MessagesElements = props.DialogsPage.MessagesData.map(message => (<Message message = {message.message} />))
  debugger;
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {DialogsElements}
      </div>
      <div className={styles.messagesItems}>
        {MessagesElements}
      </div>
    </div>
  )
}

export default Dialogs
