import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from "./redux/redux-store";
import {IState} from "./redux/interfaces/state.interface";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export let rerenderEntireTree: Function = (state: IState) => {
    console.log(`Rerender!`)
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})