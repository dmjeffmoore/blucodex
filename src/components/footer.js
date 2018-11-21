import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <small>Copyright &copy; {new Date().toISOString().substr(0,4)} Blucodex Technology Consulting
                        &nbsp;-&nbsp;<a href="/privacy-policy/">Privacy Policy</a>
                        &nbsp;-&nbsp;<a href="/terms-and-conditions/">Terms</a>
                        &nbsp;-&nbsp;<a href="/contact/">Contact</a>
                    </small>
                </div>
            </footer>
        )
    }
}

export default Footer;