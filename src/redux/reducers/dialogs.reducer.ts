import {IDispatchAction} from "../interfaces/dispatchAction.interface"
import {IDialogsPageState, IMessage} from "../interfaces/dialogsPageState.interface"

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState: IDialogsPageState = {
    dialogs: [
        {id: 1, name: 'Dymich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageText: ''
}
function dialogsReducer(state: IDialogsPageState = initialState, action: IDispatchAction) {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText) {

                let newMessage: IMessage = {
                    id: state.messages.length + 1,
                    message: state.newMessageText,
                }
                state.messages.push(newMessage)
                state.newMessageText = ''
            }
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newMessageText) {
                state.newMessageText = action.newMessageText
            }
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer