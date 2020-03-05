import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <NavLink className="navbar-items" exact to="/">
                Home
            </NavLink>
            <NavLink className="navbar-items" exact to="/users">
                Users
            </NavLink>
            <NavLink className="navbar-items" exact to="/contact">
                Contact
            </NavLink>
        </nav>
    );
}

export default Header;