import React from 'react';
import logo from '../../images/courselogo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo}alt=""/>
            <nav>
                <a href="/HOME">Home</a>
                <a href="/Web">Web Development</a>
                <a href="/Programming">Programming</a>
            </nav>
        </div>
    );
};

export default Header;