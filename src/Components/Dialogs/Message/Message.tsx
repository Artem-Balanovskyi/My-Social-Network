import s from "../Dialogs.module.css";
import React from "react";

export const Message = ({message, id}: { message: string, id: number }) => {
    return (
        <div className={s.dialog}>{message}</div>
    )
}