import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import dialogs from "./Components/Dialogs/Dialogs";

interface DialogParams {
    name: string
    id: number
}

interface MessageParams {
    message: string
    id: number
}

const App = (props: {
    dialogData: ({ id: number, name: string })[],
    messageData: ({ id: number, message: string })[]
}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' Component={Profile}/>
                        <Route path='/dialogs/*' element=<Dialogs props={props.dialogData}/> />
                        <Route path='/news' Component={News}/>
                        <Route path='/music' Component={Music}/>
                        <Route path='/settings' Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
        ;
}

export default App;