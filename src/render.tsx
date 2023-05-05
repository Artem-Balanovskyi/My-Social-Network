import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IState} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: IState) => {

    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

    root.render(
        <BrowserRouter>
            <App {...state}/>
        </BrowserRouter>
    );
}