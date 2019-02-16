import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends Component {
    render() {
        return (
            <footer className="bottom">
                <div>
                    <small>Copyright &copy; {new Date().toISOString().substr(0,4)} Blucodex Technology Consulting
                        &nbsp;-&nbsp;<Link to="/privacy-policy">Privacy Policy</Link>
                        &nbsp;-&nbsp;<Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </small>
                </div>
            </footer>
        )
    }
}

export default Footer;