import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";

const Dialogs = ({dialogs, messages}: {
    dialogs: ({ id: number, name: string })[],
    messages: ({ id: number, message: string })[]
}) => {

    let dialogElements = dialogs.map((dialog: { id: number, name: string }) => {
        return <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>
    })

    let messageElements = messages.map((message: { id: number, message: string }) => {
        return <Message message={message.message} id={message.id} key={message.id}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;