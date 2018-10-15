import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      notifications: []
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5b4315f12e00004c002230c3')
      .then(response => response.json())
      .then(data => {
        const notifications = data.map((n) => ({...n, markasRead : false}));
        this.setState({ notifications });
      });
  }

  notificationToggle = () => {
    this.setState(() => {
      if (this.state.isOpen) {
        console.log('updating nots to true');
        const notifications = this.state.notifications
          .map(n => ({
            ...n,
            markasRead: true
          }));
        return {
          isOpen: !this.state.isOpen,
          notifications : notifications
        }
      }
      return { isOpen: !this.state.isOpen }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar onNotificationClick={this.notificationToggle}>
          <Notifications isOpen={this.state.isOpen} notifications={this.state.notifications} ></Notifications>
        </Navbar>
      </div>
    );
  }
}

export default App;
