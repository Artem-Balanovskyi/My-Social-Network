import React, {MouseEventHandler} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {IProfilePageState} from "../../../redux/interfaces/profilePageState.interface";

interface MyPostsProps {
    profilePageState: IProfilePageState
    updateNewPostText: Function,
    addPost: MouseEventHandler<HTMLButtonElement>
}

const MyPosts = ({profilePageState, updateNewPostText, addPost}: MyPostsProps) => {

    let {posts, newPostText} = profilePageState

    let postElements = posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount} key={post.id}/>
    })

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let onPostChange = () => {
        if (newPostElement.current) {
            let newPostText: string = newPostElement.current.value;
            updateNewPostText(newPostText)
        }
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