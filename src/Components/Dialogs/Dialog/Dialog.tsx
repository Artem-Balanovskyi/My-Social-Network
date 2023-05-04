import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export const Dialog = ({name, id}: { name: string, id: number }) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}