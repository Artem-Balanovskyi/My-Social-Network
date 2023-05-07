import {IState} from "./state.interface";

export interface IStore {
    _state: IState,
    _callSubscriber: Function,

    subscribe: Function,
    getState: Function,

    dispatch: Function
}