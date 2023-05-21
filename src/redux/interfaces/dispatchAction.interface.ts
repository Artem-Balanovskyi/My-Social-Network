import {IUser} from "./usersPageState.interface";

export interface IDispatchAction {
    type: string,
    newPostText?: string
    newMessageText?: string
    userId?: number
    users?: IUser[]
}