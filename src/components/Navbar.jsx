import React from 'react';
import './Navbar.css';
import notification from '../bell-regular.svg';

const Navbar = (props) => {
    return (
        <nav className="Navbar">
            {props.children}
            <img src={notification} onClick={props.onNotificationClick} className="notification-toggle" alt="Toggle notifications" />
        </nav>
    );
};
export default Navbar;