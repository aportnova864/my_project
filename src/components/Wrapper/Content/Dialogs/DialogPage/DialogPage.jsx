import React, { useRef } from 'react'
import styles from './DialogPage.module.css'
import { useParams } from 'react-router-dom'
const DialogPage = (props) => {
    const params = useParams()
    const dialogId = Number(params.id)
    const newMessageElement = useRef()
    const addMessage = (dialogId) => {
        props.sendMessage(dialogId);
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateMessageText(text)
    }

    const dialog = props.DialogsPage.DialogsData.find(d => d.id === dialogId);
    const messages = props.DialogsPage.MessagesData.filter(m => m.dialogId === dialogId);
    const newMessageBody = props.newMessageBody || ""
    return (
        <div className={styles.dialogPage}>
            <h2>{dialog ? dialog.name : "User not found"}</h2>
            {messages.map(m => (<div key={m.id}>{m.message}</div>))}
            <textarea
                onChange={onMessageChange}
                ref={newMessageElement}
                value={newMessageBody}>
            </textarea>
            <button onClick={() => addMessage(dialogId)}>Send</button>
        </div>
    )
}

export default DialogPage
