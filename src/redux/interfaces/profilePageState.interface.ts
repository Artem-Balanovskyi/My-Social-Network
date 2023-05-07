import {MouseEventHandler} from "react";

export interface IProfilePageState {
    posts: IPost[],
    newPostText: string
}

export interface IPost {
    id: number,
    message: string,
    likesCount: number
}