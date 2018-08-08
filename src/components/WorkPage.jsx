import React, { Component } from 'react';

import NavMenu from "./NavMenu.jsx"
import Footer from "./Footer.jsx";
import '../scss/main.scss';

class WorkPage extends Component {
  render() {
    return (
      <div className="app">
        <NavMenu/>
        <main id="work">
            <h1 className="lg-heading">
                View <span className="text-secondary nowrap">My Work</span>
            </h1>
            <h2 className="sm-heading">
                    Check out some of my projects...
            </h2>
            <div className="projects-info">
                <div className="item">
                    <a href="#!"><img src="img/projects/project1.jpg" title="Project #1" /></a>
                    <a href="#!" className="btn-light nowrap"><i className="fas fa-eye"></i> Project</a>
                    <a href="#!" className="btn-dark nowrap"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="item">
                    <a href="#!"><img src="img/projects/project2.jpg" title="Project #2" /></a>
                    <a href="#!" className="btn-light nowrap"><i className="fas fa-eye"></i> Project</a>
                    <a href="#!" className="btn-dark nowrap"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="item">
                    <a href="#!"><img src="img/projects/project3.jpg" title="Project #3" /></a>
                    <a href="#!" className="btn-light nowrap"><i className="fas fa-eye"></i> Project</a>
                    <a href="#!" className="btn-dark nowrap"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="item">
                    <a href="#!"><img src="img/projects/project4.jpg" title="Project #4" /></a>
                    <a href="#!" className="btn-light nowrap"><i className="fas fa-eye"></i> Project</a>
                    <a href="#!" className="btn-dark nowrap"><i className="fab fa-github"></i> Github</a>
                </div>
                <div className="item">
                    <a href="#!"><img src="img/projects/project5.jpg" title="Project #5" /></a>
                    <a href="#!" className="btn-light nowrap"><i className="fas fa-eye"></i> Project</a>
                    <a href="#!" className="btn-dark nowrap"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default WorkPage;
