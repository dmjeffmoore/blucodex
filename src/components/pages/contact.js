import React, { Component } from 'react';
import { Mask, Row, Col, Fa, Button, View, Container, Card, CardBody, Input } from 'mdbreact';
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
                        <Container>
                            <Row>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
                                    <hr className="hr-light"/>
                                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                                        dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                                        iste.</h6>
                                    <Button outline color="white">Learn More</Button>
                                </div>
                                <Col md="6" xl="5" className="mb-4">
                                    <Card className="dark-grey-text">
                                        <CardBody className="z-depth-2">
                                            <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
                                            <hr/>
                                            <Input label="Your name" icon="user"/>
                                            <Input label="Your email" icon="envelope"/>
                                            <Input label="Your message" icon="pencil" type="textarea" rows="3"/>
                                            <div className="text-center mt-3 black-text">
                                                <Button color="indigo">Send</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Mask>
                </View>
            </div>
        )
    }
}

export default Contact;