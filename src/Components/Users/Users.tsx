import React from 'react';
import s from './Users.module.css'

import {IUser, IUsersPageState} from "../../redux/interfaces/usersPageState.interface";
import {User} from "./User/User";

interface MyUsersProps {
    usersPageState: IUsersPageState
    followUser: Function,
    unfollowUser: Function,
    setUsers: Function
}

const Users = ({usersPageState, followUser, unfollowUser, setUsers}: MyUsersProps) => {

    let {users} = usersPageState

    let usersElements = users.map((user: IUser) => {
        return <User {...user} key={user.id}/>
    })



    // let onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let newMessageText = event.target.value
    //     updateNewMessageText(newMessageText)
    // }

    return (
        <div className={s.users}>
            <div className={s.userItems}>
                {usersElements}
            </div>
        </div>
    )
}

export default Users;