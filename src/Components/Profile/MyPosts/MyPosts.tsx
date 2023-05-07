import React, {MouseEventHandler} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {IPost, IProfilePageState} from "../../../redux/interfaces/profilePageState.interface";
import {dispatchAction} from "../../../redux/interfaces/dispatchAction.interface";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";


interface MyPostsProps {
    posts: IPost[],
    newPostText: string,
    dispatch: Function
}
const MyPosts = ({posts, newPostText, dispatch}: MyPostsProps) => {

    let postElements = posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount} key={post.id}/>
    })

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let onPostChange = () => {
        if (newPostElement.current) {
            let newPostText: string = newPostElement.current.value;
            // let action: dispatchAction = {type: 'UPDATE-NEW-POST-TEXT', newPostText};
            dispatch(updateNewPostTextActionCreator(newPostText));
        }
    }

    let addPost = () => {
        // let action: dispatchAction = {type: 'ADD-POST'}
        dispatch(addPostActionCreator())
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}
export default MyPosts;