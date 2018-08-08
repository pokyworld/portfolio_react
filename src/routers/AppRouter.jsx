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
        console.log("This is the process.env", process.env.PUBLIC_URL);
        return (
            <Router basename={process.env.PUBLIC_URL + '/'}>
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/work" component={WorkPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>    
        )
    };
};

export default AppRouter;
