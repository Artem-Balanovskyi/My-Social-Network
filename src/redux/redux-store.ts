import {combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";
import usersReducer from "./reducers/users.reducer";

let reducers = combineReducers({
    dialogsPageState: dialogsReducer,
    profilePageState: profileReducer,
    usersPageState: usersReducer
})

let store = createStore(reducers)

export default store