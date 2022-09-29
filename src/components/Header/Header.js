import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="Chart">About</a>
                <a href="/profile">Profile</a>
            </div>
        </nav>
    );
};

export default Header;