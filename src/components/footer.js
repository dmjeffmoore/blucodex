import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <small>Copyright &copy; {new Date().toISOString().substr(0,4)} Blucodex Technology Consulting</small>
                </div>
            </footer>
        )
    }
}

export default Footer;