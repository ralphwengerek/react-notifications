
import React from 'react';
import Notification from './Notification';
import './Notification.css';

const Notifications = (props) => {
    const { notifications } = props;

    return (props.isOpen ?
        <ul className="notification-container">
            {notifications.map((notification, index) =>
                <li key={index}>
                    <Notification {...notification} ></Notification>
                </li>
            )}
        </ul>
        : null)
}


export default Notifications;