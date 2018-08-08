import React, { Component } from 'react';

import NavMenu from "./NavMenu.jsx";
import Footer from "./Footer.jsx";

import '../scss/main.scss';

class AboutPage extends Component {
  render() {
    return (
      <div className="app">
        <NavMenu/>
        <main id="about">
            <h1 className="lg-heading">
                About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                    Let me tell you a few things...
            </h2>
            <div className="about-info">
                <img src="img/portrait.jpg" title="Des Butler" className="bio-image" />
                <div className="bio">
                    <h3 className="text-secondary">BIO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint quisquam optio eius tenetur harum, dolore nihil modi magni laborum possimus sunt? Dolores tempora doloribus eius magni dignissimos molestias accusamus?</p>
                </div>

                <div className="job job-1">
                    <h3>Workshop 123</h3>
                    <h4>Lead Consultant<span className="text-right">Jan 2017 to Present</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eum laudantium nihil eveniet numquam corporis veniam nam iusto est.</p>
                </div>
                <div className="job job-2">
                    <h3>Design 123</h3>
                    <h4>Lead Consultant<span className="text-right">Feb 2015 to Dec 2016</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eum laudantium nihil eveniet numquam corporis veniam nam iusto est.</p>
                </div>
                <div className="job job-3">
                    <h3>Author 123</h3>
                    <h4>Lead Consultant<span className="text-right">Jun 2010 to Jan 2015</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eum laudantium nihil eveniet numquam corporis veniam nam iusto est.</p>
                </div>

                <div className="job job-4">
                    <h3>Workshop 123</h3>
                    <h4>Lead Consultant<span className="text-right">Jan 2017 to Present</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eum laudantium nihil eveniet numquam corporis veniam nam iusto est.</p>
                </div>
                <div className="job job-5">
                    <h3>Design 123</h3>
                    <h4>Lead Consultant<span className="text-right">Feb 2015 to Dec 2016</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eum laudantium nihil eveniet numquam corporis veniam nam iusto est.</p>
                </div>
                <div className="job job-6">
                    <h3>Author 123</h3>
                    <h4>Lead Consultant<span className="text-right">Jun 2010 to Jan 2015</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eum laudantium nihil eveniet numquam corporis veniam nam iusto est.</p>
                </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;
