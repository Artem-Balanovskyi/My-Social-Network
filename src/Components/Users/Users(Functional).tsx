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
        return <User user={user}
                     followUser={followUser}
                     unfollowUser={unfollowUser}
                     setUsers={setUsers}
                     key={user.id}/>
    })

    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users