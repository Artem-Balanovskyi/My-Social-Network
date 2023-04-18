import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	
	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	]
	
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
				<Post id='1' message='Hi, how are you?' likesCount='12'/>
				<Post id='2' message="It's my first post" likesCount='11'/>
				<Post id='3' message='Blabla' likesCount='11'/>
				<Post id='4' message='Dada' likesCount='12'/>
			</div>
		</div>
	)
	
}

export default MyPosts;