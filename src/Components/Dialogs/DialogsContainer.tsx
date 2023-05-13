import React from 'react';
import {IDispatchAction} from "../../redux/interfaces/dispatchAction.interface";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogs.reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {

            let onAddMessage = () => {
                let action: IDispatchAction = addMessageActionCreator()
                store.dispatch(action)
            }

            let onMessageChange = (text: string) => {
                let action: IDispatchAction = updateNewMessageTextActionCreator(text);
                store.dispatch(action);
            }

            return (
                <Dialogs {...store.getState().dialogsPageState} updateNewMessageText={onMessageChange}
                         AddMessage={onAddMessage}/>
            )

        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;