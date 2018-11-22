import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa } from 'mdbreact';

class Services extends Component {
    render() {
        return(
            <div>
                <Container>
                    <section className="text-center my-5">
                        <h2 className="h1-responsive font-weight-bold my-5">Our best projects</h2>
                        <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
                        <Row className="text-center">
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1" waves>
                                    <img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="sample photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Title of the news</h4>
                                    <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                    <Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1" waves>
                                    <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" alt="sample photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Title of the news</h4>
                                    <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                    <Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>
                                </CardBody>
                            </Col>
                            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <View className="overlay rounded z-depth-1" waves>
                                    <img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" alt="sample photo" className="img-fluid"/>
                                    <a>
                                        <Mask overlay="white-slight"/>
                                    </a>
                                </View>
                                <CardBody className="pb-0">
                                    <h4 className="font-weight-bold my-3">Title of the news</h4>
                                    <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                    <Button color="indigo" size="sm"><Fa icon="clone" className="left"/> View project</Button>
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