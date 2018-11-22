import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand><Link to="/"><h3>Blucodex</h3></Link></NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <Link to="/about"><h5>About</h5></Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/services"><h5>Services</h5></Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/contact"><h5>Contact</h5></Link>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;