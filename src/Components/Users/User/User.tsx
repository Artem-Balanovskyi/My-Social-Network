import s from "../Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {IUser} from "../../../redux/interfaces/usersPageState.interface";

export const User = (user: IUser) => {
    return (
        <div className={s.user + ' ' + s.active}>
            <NavLink to={`/users/${user.id}`}>{user.fullName}</NavLink>
        </div>
    )
}