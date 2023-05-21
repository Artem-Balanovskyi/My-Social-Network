import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeLink = ({ isActive }: { isActive: boolean }): string => isActive ? s.active : s.item;





    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className = { activeLink }>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' className = { activeLink }>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' className = { activeLink }>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className = { activeLink }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className = { activeLink }>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className = { activeLink }>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;