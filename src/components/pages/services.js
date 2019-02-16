import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa } from 'mdbreact';

class Services extends Component {
    render() {
        return(
            <div>
                <Container id="services">
                    <section className="text-center my-5">
                        <h2 className="h1-responsive font-weight-bold my-5">Our Services</h2>
                        <p className="grey-text w-responsive mx-auto mb-5">As subject matter experts, we can provide expert advice when it comes to protecting your business from large amount of cybersecurity attacks that occur everyday. With the use of our decades of experience and unique skills, we provide world-class security consulting services. We will efficiently work with your team and offer solutions that will enable your business to succeed.</p>
                        <Row className="text-center">
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1 h-50" waves>
                                    <img src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="security consulting photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Security Consulting</h4>
                                    {/*<p className="grey-text"></p>*/}
                                    {/*<Button color="indigo" size="sm"><Fa icon="clone" className="left"/> left</Button>*/}
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1 h-50" waves>
                                    <img src="https://images.pexels.com/photos/241028/pexels-photo-241028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="threat and vuln assessment photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Threat and Vulnerability Assessment</h4>
                                    {/*<p className="grey-text"></p>*/}
                                    {/*<Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>*/}
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1 h-50" waves>
                                    <img src="https://images.pexels.com/photos/274886/pexels-photo-274886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="vuln reme photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Vulnerability Remediation</h4>
                                    {/*<p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>*/}
                                    {/*<Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>*/}
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1 h-50" waves>
                                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=500&q=60" alt="pen testing photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Penetration Testing</h4>
                                    {/*<p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>*/}
                                    {/*<Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>*/}
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1 h-50" waves>
                                    <img src="https://images.unsplash.com/photo-1533729064966-ab1bac752600?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e78ce32685ef29f516564179f2725e96&auto=format&fit=crop&w=500&q=60" alt="IR photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Incident Response and Incident Response Forensics</h4>
                                    {/*<p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>*/}
                                    {/*<Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>*/}
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1 h-50" waves>
                                    <img src="https://marketplace.canva.com/MACWo8Nemso/1/screen/canva-hacking%2C-hacker%2C-computer%2C-internet%2C-security%2C-data-MACWo8Nemso.jpg" alt="forensics photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Digital Forensics</h4>
                                    {/*<p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>*/}
                                    {/*<Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>*/}
                                </CardBody>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
        );
    };
}

export default Services;