import React, { Component } from 'react';
import cover from './images/cover.jpg';
// import profile from './images/profile.jpg';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div>
        <div className="intro hero is-fullheight">
          <div className="hero-head cover-photo" style={{'background-image': 'url('+cover+')'}}>
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
        {/* <div className="columns">
          <div className="column">
            <div className="image is-square">
              <img className="profile" src={profile} alt="This one's a little more candid."/>
            </div>
          </div>
          <div className="column is-two-thirds">
            <div className="container has-text-centered">
              <h1 className="title">Joe Kahn</h1>
              <h2 className="subtitle">Harvard CS and MP at Dorm Room Fund</h2>
            </div>
          </div>
        </div> */}
        <div className="hero is-medium is-danger is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                "I am who I am because of who we all are."
              </h1>
              <h2 className="subtitle">
                <i>Ubuntu</i> captures the idea that we are defined not only by our own work, privilege and good fortune, but also by the experiences and histories of those around us. It implies that personal success is built upon the shoulders of our communities&mdash;and meaningless unless it empowers them.
              </h2>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">Community</h1>
          </div>
        </section>
        <div className="tile is-ancestor">
          <div className="tile is-4 is-parent">
            <Card />
          </div>
          <div className="tile is-4 is-parent">
            <Card />
          </div>
        </div>
        <div className="hero is-medium is-danger is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                "Some quote about the importance of learning."
              </h1>
              <h2 className="subtitle">
                Text describing your dedication to research and interrogating opinions.
              </h2>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">Featured Projects</h1>
          </div>
        </section>
        <div className="tile">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
