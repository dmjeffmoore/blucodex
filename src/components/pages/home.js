import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Container, Input, Mask, MDBIcon, Row, View} from "mdbreact";

import About from "./about";
import Services from "./services";
import Contact from "./contact";

class Home extends Component {
    render() {
        return (
            <div id="home">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center gradient">
                        <Container>
                            <Row>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">Let us solve your cybersecurity problems </h1>
                                    <hr className="hr-light"/>
                                    <h6 className="mb-4">We are awesome and have years of experience.</h6>
                                    {/*<Button color="white">Download</Button>*/}
                                    <Button outline color="white">Our Services</Button>
                                </div>
                                {/*<Col md="6" xl="5" className="">*/}
                                <Col>
                                    <img src="" className="img-fluid"/>
                                </Col>
                            </Row>
                        </Container>
                    </Mask>
                </View>

                <About/>
                <Services/>
                <Contact/>

            </div>


        )
    }
}

export default Home;