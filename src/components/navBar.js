import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/vision">Vision</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;