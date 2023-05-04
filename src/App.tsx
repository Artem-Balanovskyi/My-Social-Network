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
import { IState } from "./redux/state";

const App = ({dialogsPage, profilePage}: IState) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile {...profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs {...dialogsPage}/>}/>
                        <Route path='/news' Component={News}/>
                        <Route path='/music' Component={Music}/>
                        <Route path='/settings' Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}
export default App;