import React from 'react';
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

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(result => {
            this.props.setUsers(result.data.items)
        })
    }

    render () {
        return (
            <div>
                {this.props.usersPageState.users.map((user: IUser) => {
                    return <User user={user}
                                 followUser={this.props.followUser}
                                 unfollowUser={this.props.unfollowUser}
                                 setUsers={this.props.setUsers}
                                 key={user.id}/>
                })}
            </div>
        )
    }
}
export default Users;