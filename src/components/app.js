import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navBar';
import Footer from './footer';
import Home from './pages/home';
import Vision from "./pages/vision";
import Services from "./pages/services";
import Team from "./pages/team";
import Testimonials from "./pages/testimonials";
import Blog from "./pages/blog";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="Blog" exact path="/blog" component={Blog} />
                    <Route name="Testimonials" exact path="/testimonials" component={Testimonials} />
                    <Route name="Team" exact path="/team" component={Team} />
                    <Route name="Services" exact path="/services" component={Services} />
                    <Route name="vision" exact path="/vision" component={Vision} />
                    <Route name="home" exact path="/" component={Home} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;