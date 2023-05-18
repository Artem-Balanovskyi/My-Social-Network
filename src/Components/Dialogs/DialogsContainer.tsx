import React from 'react';
import {IDispatchAction} from "../../redux/interfaces/dispatchAction.interface";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogs.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {IState} from "../../redux/interfaces/state.interface";

let mapStateToProps = (state: IState) => {

    return {
        dialogsPageState: state.dialogsPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        updateNewMessageText: (text: string) => {
            let action: IDispatchAction = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },

        addMessage: () => {
            let action: IDispatchAction = addMessageActionCreator()
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;