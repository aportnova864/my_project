import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './DialogPage.module.css'
const DialogPage = (props) => {
    const params = useParams();
    const dialogId = Number(params.id);
    const dialog = props.dialogs.DialogsData.find(d=>d.id===dialogId);
    const messages = props.messages.MessagesData.filter(m=>m.dialogId===dialogId);
    return (
        <div className={styles.dialogPage}>
            <h2>{dialog ? dialog.name: "User not found"}</h2>
            {messages.map(m=>(<div key={m.id}>{m.message}</div>))}
            <textarea></textarea>
            <button>Send</button>
        </div>
    )
}

export default DialogPage
