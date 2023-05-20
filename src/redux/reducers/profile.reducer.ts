import {IPost, IProfilePageState} from "../interfaces/profilePageState.interface"
import {IDispatchAction} from "../interfaces/dispatchAction.interface"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: IProfilePageState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 7},
        {id: 4, message: 'Dada', likesCount: 9},
        {id: 5, message: 'Hey!', likesCount: 14},
        {id: 6, message: 'Hey you!', likesCount: 7},
        {id: 7, message: 'Hellow world!', likesCount: 11}
    ],
    newPostText: '',
}

function profileReducer(state: IProfilePageState = initialState, action: IDispatchAction) {
    let stateCopy = {...state}

    switch (action.type) {
        case ADD_POST:
            if (stateCopy.newPostText) {

                stateCopy.posts = [...state.posts]
                let newPost: IPost = {
                    id: stateCopy.posts.length + 1,
                    message: stateCopy.newPostText,
                    likesCount: 0
                };
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = ''
            }
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            if (action.newPostText) {
                stateCopy.newPostText = action.newPostText
            }
            return stateCopy
        default:
            return stateCopy
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default profileReducer