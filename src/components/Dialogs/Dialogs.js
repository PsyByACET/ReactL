import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id_user
    return <div className={s.dialog}>
        <NavLink to={path} className={NavData => NavData.isActive ? s.active : s.dialog}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {

    return <div className={s.message}>
        {props.message}
    </div>

}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Andry"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Bogdan"},
        {id: 4, name: "Dimas"},
        {id: 5, name: "Leha"}
    ]

    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "im fine"},
        {id: 4, message: "kek"},
        {id: 5, message: "Leha pidor"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id_user={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs