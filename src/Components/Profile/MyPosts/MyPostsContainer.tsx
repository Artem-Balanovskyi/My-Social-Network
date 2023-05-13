import React from 'react';
import {IProfilePageState} from "../../../redux/interfaces/profilePageState.interface";
import {IDispatchAction} from "../../../redux/interfaces/dispatchAction.interface";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile.reducer";
import MyPosts from "./MyPosts";


interface MyPostsContainerProps {
    state: IProfilePageState,
    dispatch: Function
}

const MyPostsContainer = ({state, dispatch}: MyPostsContainerProps) => {

    let onAddPost = () => {
        let action: IDispatchAction = addPostActionCreator()
        dispatch(action)
    }

    let onPostChange = (text: string) => {
        let action: IDispatchAction = updateNewPostTextActionCreator(text);
        dispatch(action);
    }

    return (
        <MyPosts {...state} updateNewPostText={onPostChange} AddPost={onAddPost}/>
    )

}
export default MyPostsContainer;