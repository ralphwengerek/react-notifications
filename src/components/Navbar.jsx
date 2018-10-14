import React from 'react';
import './Navbar.css';
import { ReactComponent as Notification } from '../bell-regular.svg';

const Navbar = (props) => {
    return (
        <nav className="Navbar">
            {props.children}
            <Notification className="notification-toggle" onClick={props.onNotificationClick} />
        </nav>
    );
};
export default Navbar;