import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export interface IProps  {
    dialogData: { id: number, name: string }[],
    messageData: { id: number, message: string }[],
    postsData: { id: number, message: string, likesCount: number }[],
}


const props: IProps = {
    dialogData: [
        {id: 1, name: 'Dymich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messageData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
}


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App {...props}/>
);