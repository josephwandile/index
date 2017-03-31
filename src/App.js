import React, { Component } from 'react';
import cover from './images/cover.jpg';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="intro hero is-fullheight">
          <div className="hero-head">
            <img className="cover-image" src={cover} alt="Totally a candid photo taken in the Bo-Kaap"/>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Joe Kahn</h1>
              <h2 className="subtitle">Harvard CS and MP at Dorm Room Fund</h2>
              <div className="icons">
                <a className="icon is-medium" href="https://www.linkedin.com/in/josephwandile"><i className="fa fa-linkedin"></i></a>
                <a className="icon is-medium" href="https://www.github.com/josephwandile"><i className="fa fa-github"></i></a>
                <a className="icon is-medium" href="https://www.twitter.com/josephwandile"><i className="fa fa-twitter"></i></a>
                <a className="icon is-medium" href="https://medium.com/@josephwandile"><i className="fa fa-medium"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
