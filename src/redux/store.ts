import {IStore} from "./interfaces/store.interface";
import {dispatchAction} from "./interfaces/dispatchAction.interface";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        },
        profilePageState: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
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

    dispatch: (action: dispatchAction) => {
        if (action.type === ADD_POST) {
            if (store._state.profilePageState.newPostText) {

                let newPost: { id: number, message: string, likesCount: number } = {
                    id: store._state.profilePageState.posts.length + 1,
                    message: store._state.profilePageState.newPostText,
                    likesCount: 0
                };
                store._state.profilePageState.posts.push(newPost);
                store._state.profilePageState.newPostText = '';
                store._callSubscriber(store._state);
            }
        } else {
            if (action.type === UPDATE_NEW_POST_TEXT) {
                if (action.newPostText) {
                    store._state.profilePageState.newPostText = action.newPostText;
                    store._callSubscriber(store._state);
                }
            }
        }
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})



