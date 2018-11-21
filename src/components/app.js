import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navBar';
import Footer from './footer';
import Home from './pages/home';
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="Contact" exact path="/contact" component={Contact} />
                    <Route name="Services" exact path="/services" component={Services} />
                    <Route name="About" exact path="/about" component={About} />
                    <Route name="Home" exact path="/" component={Home} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;