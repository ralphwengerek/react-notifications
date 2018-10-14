import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';

class App extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  notificationToggle = () => {

    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className="App">
        <Navbar onNotificationClick={this.notificationToggle}>
          <Notifications isOpen={this.state.isOpen} ></Notifications>
        </Navbar>

      </div>
    );
  }
}

export default App;
