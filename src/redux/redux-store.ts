import {combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";

let reducers = combineReducers({
    dialogsPageState: dialogsReducer,
    profilePageState: profileReducer
})

let store = createStore(reducers)

export default store