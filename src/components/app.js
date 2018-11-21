import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navBar';
import Footer from './footer';
import HomePage from './pages/homePage';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;