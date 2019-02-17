import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse } from "mdbreact";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logo.png'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Navbar color="light-blue darken-3" dark expand="md">
                    <NavbarBrand>
                        <div className="navbar-brand">
                            <img src={logo} height="30" alt="logo"/>
                        </div>
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.toggleCollapse}
                    />
                    <Collapse
                        id="navbarCollapse3"
                        isOpen={this.state.isOpen}
                        navbar
                    >
                        <NavbarNav right>
                            <NavItem>
                                <div className="ml-2 white-text"><Link smooth to="/index">Home</Link></div>
                            </NavItem>
                            <NavItem>
                                <div className="ml-2 white-text"><Link smooth to="/index#about">About</Link></div>
                            </NavItem>
                            <NavItem>
                                <div className="ml-2 white-text"><Link smooth to="/index#services">Services</Link></div>
                            </NavItem>
                            <NavItem>
                                <div className="ml-2 white-text"><Link smooth to="/index#contact">Contact</Link></div>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;