import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({postsData}: {
    postsData: { id: number, message: string, likesCount: number }[]
}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile;