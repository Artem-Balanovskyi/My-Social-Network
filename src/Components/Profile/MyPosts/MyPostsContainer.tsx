import React from 'react';
import {IDispatchAction} from "../../../redux/interfaces/dispatchAction.interface";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile.reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let onAddPost = () => {
                let action: IDispatchAction = addPostActionCreator()
                store.dispatch(action)
            }

            let onPostChange = (text: string) => {
                let action: IDispatchAction = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            }

            return (
                <MyPosts {...store.getState().ProfilePageState} updateNewPostText={onPostChange} AddPost={onAddPost}/>
            )
        }
        }
    </StoreContext.Consumer>
}
export default MyPostsContainer;