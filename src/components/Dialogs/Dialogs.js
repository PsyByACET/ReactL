import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    console.log(props.dialogsPage);

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id_user={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()
        // props.dispatch(sendMessageCreater())
    }
    let onNewMessageChanges = (e) => {

        let body = e.target.value;
        props.onNewMessageChanges(body)
        // props.dispatch(updateNewMessageBodyCreater(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChanges} placeholder={"ender you message"}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs