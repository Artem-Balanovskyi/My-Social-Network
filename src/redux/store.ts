import {IStore} from "./interfaces/store.interface";
import {IDispatchAction} from "./interfaces/dispatchAction.interface";
import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";

export const store: IStore = {
    _state: {
        dialogsPageState: {
            dialogs: [
                {id: 1, name: 'Dymich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Viktor'},
                {id: 7, name: 'Bob'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageText: ''
        },
        profilePageState: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},
                {id: 5, message: 'Hey!', likesCount: 13}
            ],
            newPostText: '',
        },
        usersPageState: {
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
    },

    _callSubscriber: () => {
        console.log(`loooog!`)
    },

    subscribe: (observer: Function) => {
        store._callSubscriber = observer
    },

    getState: () => {
        return store._state
    },

    dispatch: (action: IDispatchAction) => {
        // store._state.profilePageState = profileReducer(store._state.profilePageState, action)
        // store._state.dialogsPageState = dialogsReducer(store._state.dialogsPageState, action)

        store._callSubscriber(store._state)
    }
}

