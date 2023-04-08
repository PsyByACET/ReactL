import React from "react";

import {sendMessageCreater, updateNewMessageBodyCreater} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let SendMessageClick = () => {
        props.store.dispatch(sendMessageCreater())
    }
    let NewMessageChanges = (body) => {
        props.store.dispatch(updateNewMessageBodyCreater(body))
    }

    return (
        <Dialogs onSendMessageClick={SendMessageClick} onNewMessageChanges={NewMessageChanges} dialogsPage={state.dialogsPage}></Dialogs>
    )
}

export default DialogsContainer