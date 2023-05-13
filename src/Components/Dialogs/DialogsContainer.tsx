import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {IDialog, IDialogsPageState, IMessage} from "../../redux/interfaces/dialogsPageState.interface";
import {IDispatchAction} from "../../redux/interfaces/dispatchAction.interface";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogs.reducer";
import Dialogs from "./Dialogs";

interface MyDialogsProps {
    state: IDialogsPageState
    dispatch: Function
}

const DialogsContainer = ({state, dispatch}: MyDialogsProps) => {

    let onAddMessage = () => {
        let action: IDispatchAction = addMessageActionCreator()
        dispatch(action)
    }
    let onMessageChange = (text: string) => {
        let action: IDispatchAction = updateNewMessageTextActionCreator(text);
        dispatch(action);
    }

    return (
        <Dialogs {...state} updateNewMessageText={onMessageChange} AddMessage={onAddMessage}/>
    )
}

export default DialogsContainer;