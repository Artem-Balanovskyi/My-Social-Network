import {combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile.reducer";
import dialogsReducer from "./dialogs.reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

let store = createStore(reducers)

export default store