import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {IPost} from "../../../redux/interfaces/profilePageState.interface";
import {IDispatchAction} from "../../../redux/interfaces/dispatchAction.interface";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profile.reducer";


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
            let action: IDispatchAction = updateNewPostTextActionCreator(newPostText);
            dispatch(action);
        }
    }

    let addPost = () => {
        let action: IDispatchAction = addPostActionCreator()
        dispatch(action)
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