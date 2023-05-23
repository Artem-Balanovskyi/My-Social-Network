import React from 'react';
import s from './Users.module.css'

import {IUser, IUsersPageState} from "../../redux/interfaces/usersPageState.interface";
import {User} from "./User/User";
import axios from "axios";

type MyProps = {
    usersPageState: IUsersPageState
    followUser: Function,
    unfollowUser: Function,
    setUsers: Function
}
type MyState = { value: string };
class Users extends React.Component<MyProps, MyState>  {
    constructor(props: any) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(result => {
            props.setUsers(result.data.items)
        })
    }

    usersElements = this.props.usersPageState.users.map((user: IUser) => {
        return <User user={user}
                     followUser={this.props.followUser}
                     unfollowUser={this.props.unfollowUser}
                     setUsers={this.props.setUsers}
                     key={user.id}/>
    })

    render () {
        return (
            <div>
                {this.usersElements}
            </div>
        )
    }
}
export default Users;