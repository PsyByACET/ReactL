import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import Friends from "./friends/friends";

const Navbar = (props) => {
    let friendsElements = props.state.friends.map(f => <Friends name={f.name} image={f.image}/>)

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" className={NavData => NavData.isActive ? s.active : s.item}>Profile </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={NavData => NavData.isActive ? s.active : s.item}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={NavData => NavData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={NavData => NavData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={NavData => NavData.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
                <h2>My posts</h2>
                <div className={s.friends_list}>
                    {friendsElements}
                </div>


            </nav>
        </div>

    );
}

export default Navbar