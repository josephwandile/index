import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App section">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <i className='fa fa-github'/>
        </p>
      </div>
    );
  }
}

export default App;
