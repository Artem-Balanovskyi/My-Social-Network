import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const props: { dialogData: ({ id: number, name: string })[], messageData: ({ id: number, message: string })[] } = {
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
    ]
}


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App {...props}/>
);