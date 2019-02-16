import React, { Component } from 'react';
import { Container, Row, Col, MDBIcon } from 'mdbreact';

class About extends Component {
    render() {
        return(
            <Container id="about">
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">Why are we so great?</h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">Because we are super cool.</p>
                    <Row>
                        <Col md="4">
                            <MDBIcon icon="book" size="3x" className="purple-text"/>
                            <h5 className="font-weight-bold my-4">Strong Technical Knowledge</h5>
                            <p className="grey-text mb-md-0 mb-5">We are very technical.</p>
                        </Col>
                        <Col md="4">
                            <MDBIcon icon="industry" size="3x" className="cyan-text"/>
                            <h5 className="font-weight-bold my-4">Broad Business Knowledge</h5>
                            <p className="grey-text mb-md-0 mb-5">We can make your business awesome.</p>
                        </Col>
                        <Col md="4">
                            <MDBIcon icon="lightbulb" size="3x" className="orange-text"/>
                            <h5 className="font-weight-bold my-4">Analytical and Innovative</h5>
                            <p className="grey-text mb-md-0 mb-5">We rock!</p>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    };
}

export default About;