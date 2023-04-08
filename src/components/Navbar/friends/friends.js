import s from "./Friends.module.css";
import React from "react";


const Friends = (props) => {



    return (
        <div className={s.friend}>
            <img src={props.image} alt=""/>
            <span>{props.name}</span>
        </div>
    );
}

export default Friends