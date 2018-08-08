import React, { Component } from 'react';

import NavMenu from "./NavMenu.jsx"
import '../scss/main.scss';

class HomePage extends Component {
  render() {
    return (
      <div id="bg-img">
        <div className="app">
          <NavMenu/>
          <main id="home">
            <h1 className="lg-heading">
              John <span className="text-secondary">Doe</span>
            </h1>
            <h2 className="sm-heading">
              Entrepreneur, Project Manager, IT Business Analyst, Full-stack Developer
            </h2>
            <div className="icons">
                <a href="#!"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#!"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#!"><i className="fab fa-youtube fa-2x"></i></a>
                <a href="#!"><i className="fab fa-github fa-2x"></i></a>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default HomePage;
