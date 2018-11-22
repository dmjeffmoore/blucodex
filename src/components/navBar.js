import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";

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
                <Navbar color="indigo" dark expand="md">
                    <NavbarBrand>
                        <strong className="white-text">Blucodex</strong>
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
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;