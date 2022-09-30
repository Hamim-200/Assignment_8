import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPersonRifle, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon></a>
                <a href="Chart">About  <FontAwesomeIcon icon={faQuestion} ></FontAwesomeIcon></a>
                <a href="/profile">Profile <FontAwesomeIcon icon={faPersonRifle} ></FontAwesomeIcon></a>
            </div>
        </nav>
    );
};

export default Header;