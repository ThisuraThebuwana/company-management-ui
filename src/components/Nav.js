import React from 'react';
import {Link} from "react-router-dom";
import { host } from '../Constants';

const Nav = (props) => {
    const logout = async () => {
        await fetch(host+'/user/logout', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        props.setIsLoggedIn(false);
    };
    let menu;

    if(!props.isLoggedIn) {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link active">Register</Link>
                </li>
            </ul>
        )
    }else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">LOGO</Link>
                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
