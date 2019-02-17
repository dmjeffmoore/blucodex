import React, { Component } from 'react';
import { Mask, Row, Col, Button, View, Container, Card, CardBody, Input } from 'mdbreact';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
                        <Container>
                            <Row>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 pt-5">
                                    <h1 className="pt-5 display-4 font-weight-bold">Contact us</h1>
                                    <hr className="hr-light"/>
                                    <h6 className="mb-4">We are cool, so contact us.</h6>
                                </div>
                                <Col md="6" xl="5" className="mb-4">
                                    <Card className="dark-grey-text">
                                        <CardBody className="z-depth-2">
                                            <form action="https://formspree.io/Sean.Pattee@blucodex.com" method="POST" >
                                                <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
                                                <hr/>
                                                <Input label="Your name" icon="user" name="name"/>
                                                <Input label="Your email" icon="envelope" name="_replyto"/>
                                                <Input label="Your message" icon="pencil" name="message" type="textarea" rows="3"/>
                                                <div className="text-center mt-3 black-text">
                                                    <Button color="indigo" type="submit">Send</Button>
                                                </div>
                                            </form>

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