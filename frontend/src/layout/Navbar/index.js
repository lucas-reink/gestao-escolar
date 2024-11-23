import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <NavLink to="/" className={({ isActive }) => isActive ? "menu active" : "menu"}>Home</NavLink>
                
            </div>
        </nav>
    );
};

export default Navbar;
