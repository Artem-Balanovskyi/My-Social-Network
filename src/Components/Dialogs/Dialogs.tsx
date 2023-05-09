import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {IDialog, IMessage} from "../../redux/interfaces/dialogsPageState.interface";
import {dispatchAction} from "../../redux/interfaces/dispatchAction.interface";
import {
    addMessageActionCreator,
    addPostActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../redux/store";

interface MyDialogsProps {
    dialogs: IDialog[],
    messages: IMessage[],
    newMessageText: string
    dispatch: Function
}

const Dialogs = ({dialogs, messages, newMessageText, dispatch}: MyDialogsProps) => {

    let dialogElements = dialogs.map((dialog: IDialog) => {
        return <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>
    })

    let messageElements = messages.map((message: IMessage) => {
        return <Message message={message.message} id={message.id} key={message.id}/>
    })

    let onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = event.target.value
        let action: dispatchAction = updateNewMessageTextActionCreator(newMessageText);
        dispatch(action);
    }

    let addMessage = () => {
        let action: dispatchAction = addMessageActionCreator()
        dispatch(action)
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
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;