import React, { Component } from 'react';
import { Jumbotron, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, I'm Sean.</h1>
                    <p className="lead">I'm a cybersecurity professional that has been working in the industry for 10+ years. I'm passionate about cybersecurity and love what I do.</p>
                    <hr className="my-2" />
                    <p>Please checkout my website by visiting the links at the upper right. Thank you and have a nice day.</p>
                    <p className="lead">
                        <Button color="primary" onClick={() => this.props.history.push("/contact")}>Contact Us</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default withRouter(Home);