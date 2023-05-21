import {IDispatchAction} from "../interfaces/dispatchAction.interface"
import {IUser, IUsersPageState} from "../interfaces/usersPageState.interface";

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'

const initialState: IUsersPageState = {
    users: [
        {id: 1,
            avatar_url: "https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
            followed: true,
            fullName: "John Doe",
            status: "Hello World!",
            location: {
                country: "Ukraine",
                cityName: "Kiev"
            }},
        {id: 2,
            avatar_url: "https://www.cxservice360.com/wp-content/uploads/2017/09/Avatar.png",
            followed: false,
            fullName: "Jane Doe",
            status: "Hi, I'm Jane!",
            location: {
                country: "Italy",
                cityName: "Rome"
            }},
        {id: 3,
            avatar_url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            followed: false,
            fullName: "Hideo Kodzhima",
            status: "I am samurai!",
            location: {
                country: "Japan",
                cityName: "Tokyo"
            }},
    ]
}

function usersReducer(state: IUsersPageState = initialState, action: IDispatchAction) {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            if (action.users?.length && action.users?.length > 0)
            return {...state, users: [...state.users, ...action.users]}
            break
        default:
            return state
    }
}

export const followActionCreator = (userId: number) => ({type: FOLLOW_USER, userId})
export const unfollowActionCreator = (userId: number) => ({type: UNFOLLOW_USER, userId})
export const setUsersActionCreator = (users: IUser[]) =>
    ({type: SET_USERS, users})

export default usersReducer