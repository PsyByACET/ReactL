import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id_user
    return <div className={s.user}>
        <NavLink to={path} className={NavData => NavData.isActive ? s.userlink_active : s.userlink}>
            <img className={s.user__photo} src="https://mp3-cherry.com/uploads/cover/artist/9641e31c3933f50d6c031b3ee0ca3689.jpg" alt=""/>
            <span className={s.username}>{props.name}</span>
        </NavLink>
    </div>
}

export default DialogItem