
import React from 'react';
import Notification from './Notification';
import './Notification.css';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        fetch('http://www.mocky.io/v2/5b4315f12e00004c002230c3')
            .then(response => response.json())
            .then(data => this.setState({ notifications: data }));
    }

    render() {
        const { notifications } = this.state;
       
        if (this.props.isOpen)
        return (
            <ul className="notification-container">
                {notifications.map((notification, index) =>
                    <li key={index}>
                        <Notification {...notification} ></Notification>
                    </li>
                )}
            </ul>
        )
        else return null;
    }
}

export default Notifications;