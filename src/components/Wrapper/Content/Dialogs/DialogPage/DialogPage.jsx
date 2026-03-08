import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './DialogPage.module.css'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../../../redux/dialogs-reducer';
const DialogPage = (props) => {
    const params = useParams();
    const dialogId = Number(params.id);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator(dialogId))
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }
    
    const dialog = props.dialogs.DialogsData.find(d=>d.id===dialogId);
    const messages = props.messages.MessagesData.filter(m=>m.dialogId===dialogId);
    return (
        <div className={styles.dialogPage}>
            <h2>{dialog ? dialog.name: "User not found"}</h2>
            {messages.map(m=>(<div key={m.id}>{m.message}</div>))}
            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogs.newMessageBody}></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default DialogPage
