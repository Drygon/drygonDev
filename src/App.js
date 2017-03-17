import React, { Component } from 'react';
import logo from './images/logo_origin.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Drygon</h2>
        </div>       
      </div>
    );
  }
}

export default App;
