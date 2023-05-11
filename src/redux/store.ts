import {IStore} from "./interfaces/store.interface";
import {IDispatchAction} from "./interfaces/dispatchAction.interface";
import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";

export const store: IStore = {
    _state: {
        dialogsPageState: {
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
        },
        profilePageState: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},
                {id: 5, message: 'Hey!', likesCount: 13}
            ],
            newPostText: '',
        }
    },

    _callSubscriber: () => {
        console.log(`loooog!`)
    },

    subscribe: (observer: Function) => {
        store._callSubscriber = observer
    },

    getState: () => {
        return store._state
    },

    dispatch: (action: IDispatchAction) => {
        store._state.profilePageState = profileReducer(store._state.profilePageState, action)
        store._state.dialogsPageState = dialogsReducer(store._state.dialogsPageState, action)

        store._callSubscriber(store._state)
    }
}

