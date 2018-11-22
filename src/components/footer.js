import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="fixed-bottom">
                <div>
                    <small>Copyright &copy; {new Date().toISOString().substr(0,4)} Blucodex Technology Consulting
                        &nbsp;-&nbsp;<Link to="/privacy-policy">Privacy Policy</Link>
                        &nbsp;-&nbsp;<Link to="/terms-and-conditions">Terms & Conditions</Link>
                        &nbsp;-&nbsp;<Link to="/contact">Contact</Link>
                    </small>
                </div>
            </footer>
        )
    }
}

export default Footer;