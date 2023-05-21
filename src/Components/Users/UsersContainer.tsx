import React from 'react';
import {IDispatchAction} from "../../redux/interfaces/dispatchAction.interface";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogs.reducer";
import Users from "./Users";
import {connect} from "react-redux";
import {IState} from "../../redux/interfaces/state.interface";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/reducers/users.reducer";
import {IUser} from "../../redux/interfaces/usersPageState.interface";

let mapStateToProps = (state: IState) => {

    return {
        usersPageState: state.usersPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {

    return {
        followUser: (userId: number) => {
            let action: IDispatchAction = followActionCreator(userId);
            dispatch(action);
        },

        unfollowUser: (userId: number) => {
            let action: IDispatchAction = unfollowActionCreator(userId);
            dispatch(action);
        },

        setUsers: (users: IUser[]) => {
            let action: IDispatchAction = setUsersActionCreator(users)
            dispatch(action)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;