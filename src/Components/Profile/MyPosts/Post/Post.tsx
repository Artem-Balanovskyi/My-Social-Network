import React from 'react';
import s from './Post.module.css';

interface PostProps {
    id: number,
    message: string,
    likesCount: number
}

const Post = (postsData: PostProps) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaN_dJxAzspLYcexAuzO-f_DzFihZ48tRKlQ&usqp=CAU'
                alt='postImage'/>
            {postsData.message}
            <div>
                <span>likes: {postsData.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;