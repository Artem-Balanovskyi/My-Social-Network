import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

interface PostsProps {
	posts: { id: number, message: string, likesCount: number }[]
}
const MyPosts = ({posts}: PostsProps) => {

let postElements = posts.map((post) => {
	return <Post id={post.id} message={post.message} likesCount={post.likesCount} key={post.id}/>
})
	
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	)
	
}
export default MyPosts;