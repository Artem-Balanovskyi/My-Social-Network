import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {IProfilePageState} from "../../redux/interfaces/profilePageState.interface";

interface ProfileProps {
    state: IProfilePageState,
    dispatch: Function
}
const Profile = ({state, dispatch}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts {...state} dispatch={dispatch}/>
        </div>
    )
}

export default Profile;