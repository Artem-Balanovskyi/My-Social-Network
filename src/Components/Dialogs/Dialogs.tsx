import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {IDialog, IMessage} from "../../redux/interfaces/dialogsPageState.interface";

interface MyDialogsProps {
    dialogs: IDialog[],
    messages: IMessage[],
    dispatch: Function
}
const Dialogs = ({dialogs, messages, dispatch}: MyDialogsProps) => {

    let dialogElements = dialogs.map((dialog: IDialog) => {
        return <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>
    })

    let messageElements = messages.map((message: IMessage) => {
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