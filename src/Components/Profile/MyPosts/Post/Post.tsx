import React from 'react';
import s from './Post.module.css';

const Post = (postsData: { id: number, message: string, likesCount: number }
) => {
	return (
		<div className={s.item}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaN_dJxAzspLYcexAuzO-f_DzFihZ48tRKlQ&usqp=CAU' alt='postImage'/>
			{postsData.message}
			<div>
				<span>likes: {postsData.likesCount}</span>
			</div>
		</div>
	)
	
}

export default Post;