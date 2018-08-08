import React, { Component } from 'react';

import NavMenu from "./NavMenu.jsx";
import Footer from "./Footer.jsx";

import '../scss/main.scss';

class ContactPage extends Component {
  render() {
    return (
      <div className="app">
        <NavMenu/>
        <main id="about">
            <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                    This is how you can get in touch...
            </h2>
            <div className="contact-info">
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email: </span>
                        john@doeworld.com
                    </div>
                    <div>
                        <span className="text-secondary">Phone: </span>
                            (555) 349-2756
                    </div>
                    <div>
                        <span className="text-secondary">Address: </span>
                        11 Belvedere Road, Sinfin, Derby
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default ContactPage;
