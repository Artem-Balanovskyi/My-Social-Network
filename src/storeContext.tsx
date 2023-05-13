import React, {MouseEventHandler} from "react";
import {IStore} from "./redux/interfaces/store.interface";
import store from "./redux/redux-store";

const StoreContext = React.createContext(store)

interface ProviderProps {
    children: any;
    store: IStore
}

export const Provider = (props: ProviderProps) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>


}
export default StoreContext