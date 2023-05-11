import {IPost, IProfilePageState} from "../interfaces/profilePageState.interface"
import {IDispatchAction} from "../interfaces/dispatchAction.interface"
import {IDialogsPageState} from "../interfaces/dialogsPageState.interface";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: IProfilePageState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},
        {id: 5, message: 'Hey!', likesCount: 13}
    ],
    newPostText: '',
}
function profileReducer(state: IProfilePageState = initialState, action: IDispatchAction) {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {

                let newPost: IPost = {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.posts.push(newPost)
                state.newPostText = ''
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            if (action.newPostText) {
                state.newPostText = action.newPostText
            }
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default profileReducer