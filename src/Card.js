import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <div className="image is-square">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Logo"/>
              </div>
            </div>
            <div className="media-content">
              <p className="title is-4">Dorm Room Fund</p>
              <p className="subtitle is-6">Where entrepreneurs and investors start their careers</p>
              <p>
                Dorm Room Fund is a student-run VC firm which invests small amounts in extremely early stage student-led companies.
              </p>
              <br/>
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
    )
  }
}

export default Card;
