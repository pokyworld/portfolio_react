import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

import HomePage from "../components/HomePage.jsx";
import AboutPage from "../components/AboutPage.jsx";
import WorkPage from "../components/WorkPage.jsx";
import ContactPage from "../components/ContactPage.jsx";
import NotFound from "../components/NotFoundPage.jsx";

export class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log(this.props);
        return (
            <Router>
                <Switch>
                    <Route path="" basename={this.props.basename} component={HomePage} exact={true} />
                    <Route path="/" basename={this.props.basename} component={HomePage} exact={true} />
                    <Route path="/home" basename={this.props.basename} component={HomePage} />
                    <Route path="/about" basename={this.props.basename} component={AboutPage} />
                    <Route path="/work" basename={this.props.basename} component={WorkPage} />
                    <Route path="/contact" basename={this.props.basename} component={ContactPage} />
                </Switch>
            </Router>    
        )
    };
};

export default AppRouter;
