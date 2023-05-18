import React from 'react';
import {IDispatchAction} from "../../../redux/interfaces/dispatchAction.interface";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile.reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {IState} from "../../../redux/interfaces/state.interface";

let mapStateToProps = (state: IState) => {

    return {
        profilePageState: state.profilePageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        updateNewPostText: (text: string) => {
            let action: IDispatchAction = updateNewPostTextActionCreator(text);
            dispatch(action);
        },

        addPost: () => {
            let action: IDispatchAction = addPostActionCreator()
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;