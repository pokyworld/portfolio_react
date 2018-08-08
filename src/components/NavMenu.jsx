import React from "react";
import { NavLink } from "react-router-dom";

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.menuBtnClick = this.menuBtnClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            page: "",
            showMenu: false
        };
    };

    menuBtnClick() {
        this.toggleMenu();
    };

    toggleMenu() {
        console.log("Toggled Menu");
        if (!this.state.showMenu) {
            this.setState({showMenu: true});
        } else {
            this.setState({showMenu: false});
        }    
    };

    render() {
        return (
            <header>
                <div className={this.state.showMenu ? 'menu-btn close' : 'menu-btn'} onClick={this.menuBtnClick}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className={this.state.showMenu ? 'menu show' : 'menu'}>
                    <div className={this.state.showMenu ? 'menu-branding show' : 'menu-branding'}>
                        <NavLink to=""><div className="portrait" onClick={this.menuBtnClick}></div></NavLink>
                    </div>
                    <ul className={this.state.showMenu ? 'menu-nav show' : 'menu-nav'}>
                        <NavLink to="" activeClassName="current" className={this.state.showMenu ? 'nav-link show' : 'nav-link'} exact={true}><li className="nav-item">Home</li></NavLink>
                        <NavLink to="/about" activeClassName="current" className={this.state.showMenu ? 'nav-link show' : 'nav-link'}><li className="nav-item">About Me</li></NavLink>
                        <NavLink to="/work" activeClassName="current" className={this.state.showMenu ? 'nav-link show' : 'nav-link'}><li className="nav-item">My Work</li></NavLink>
                        <NavLink to="/contact" activeClassName="current" className={this.state.showMenu ? 'nav-link show' : 'nav-link'}><li className="nav-item">How to Contact Me</li></NavLink>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default NavMenu


