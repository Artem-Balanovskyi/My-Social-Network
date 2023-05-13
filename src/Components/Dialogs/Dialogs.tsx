import React, {MouseEventHandler} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {IDialog, IMessage} from "../../redux/interfaces/dialogsPageState.interface";
import {IDispatchAction} from "../../redux/interfaces/dispatchAction.interface";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogs.reducer";

interface MyDialogsProps {
    dialogs: IDialog[],
    messages: IMessage[],
    newMessageText: string,
    updateNewMessageText: Function,
    AddMessage: MouseEventHandler<HTMLButtonElement>
}

const Dialogs = ({dialogs, messages, newMessageText, updateNewMessageText, AddMessage}: MyDialogsProps) => {

    let dialogElements = dialogs.map((dialog: IDialog) => {
        return <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>
    })

    let messageElements = messages.map((message: IMessage) => {
        return <Message message={message.message} id={message.id} key={message.id}/>
    })

    let onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = event.target.value
        updateNewMessageText(newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messageElements}
                </div>
                <div>
                    <div><textarea
                        placeholder='Enter your message'
                        value={newMessageText}
                        onChange={onMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={AddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;