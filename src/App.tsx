import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {IProfilePageState} from "./redux/interfaces/profilePageState.interface";
import {IDialogsPageState} from "./redux/interfaces/dialogsPageState.interface";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

interface AppProps {
    profilePageState:IProfilePageState,
    dialogsPageState: IDialogsPageState,
    dispatch: Function
}

const App = ({profilePageState, dialogsPageState, dispatch }: AppProps) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile state={profilePageState} dispatch={dispatch}/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer state={dialogsPageState} dispatch={dispatch}/>}/>
                    <Route path='/news' Component={News}/>
                    <Route path='/music' Component={Music}/>
                    <Route path='/settings' Component={Settings}/>
                </Routes>
            </div>
        </div>
    )
}
export default App;