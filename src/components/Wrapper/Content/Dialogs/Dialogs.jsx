import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
const Dialogs = (props) => {
  const DialogsElements = props.DialogsPage.DialogsData.map(dialog=>{
    const messagesForUser = props.DialogsPage.MessagesData.filter(m=>m.dialogId===dialog.id);
    const lastMessage = messagesForUser.length ? messagesForUser[messagesForUser.length-1].message : "No messages";
    return (
    <DialogItem
      key = {dialog.id}
      id = {dialog.id}
      name = {dialog.name}
      lastMessage = {lastMessage}
    />
    )
  });

  /*let DialogsElements = props.DialogsPage.DialogsData.map(dialog => (<DialogItem name = {dialog.name} id={dialog.id} />))
  let MessagesElements = props.DialogsPage.MessagesData.map(message => (<Message message = {message.message} />))*/
  return (
    <div>
      {DialogsElements}
    </div>
  )
}

export default Dialogs
