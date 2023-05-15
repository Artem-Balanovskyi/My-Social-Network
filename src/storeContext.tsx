import React, {MouseEventHandler} from "react";
import {IStore} from "./redux/interfaces/store.interface";
import store from "./redux/redux-store";

const StoreContext = React.createContext<IStore | null>(null)



export const Provider = (props: any) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>


}
export default StoreContext