import React, { Component } from 'react';
import axios from 'axios';
import { Mask, Row, Col, Button, View, Container, Card, CardBody, Input, ToastContainer, toast } from 'mdbreact';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) { this.setState({name: event.target.value}); }

    handleEmailChange(event) { this.setState({email: event.target.value}); }

    handleMessageChange(event) { this.setState({message: event.target.value}); }

    handleSubmit(event) {
        event.preventDefault();

        axios.post("/.netlify/functions/email", this.state).then(() => {
            toast.success("Message sent!");
        }).catch(() => {
            toast.error("Message failed to send. We apologize for this inconvenience. Please email Sean.Pattee@blucodex.com directly.");
        });

        this.setState({
            name: "",
            email: "",
            message: ""
        });
    }

    render() {
        return (
            <div id="contact">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
                        <Container>
                            <Row>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 pt-5">
                                    <h1 className="pt-5 display-4 font-weight-bold">Contact us</h1>
                                </div>
                                <Col md="6" xl="5" className="mb-4">
                                    <Card className="dark-grey-text">
                                        <CardBody className="z-depth-2">
                                            <form onSubmit={this.handleSubmit}>
                                                <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
                                                <hr/>
                                                <Input label="Your name" value={this.state.name} onChange={this.handleNameChange} icon="user" name="name" id="name"/>
                                                <Input label="Your email" value={this.state.email} onChange={this.handleEmailChange} icon="envelope" name="email" id="email"/>
                                                <Input label="Your message" value={this.state.message} onChange={this.handleMessageChange} icon="pencil" name="message" id="message" type="textarea" rows="3"/>
                                                <div className="text-center mt-3 black-text">
                                                    <Button color="indigo" type="submit">Send</Button>
                                                </div>
                                                <ToastContainer
                                                    hideProgressBar={true}
                                                    newestOnTop={true}
                                                />
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