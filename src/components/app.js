import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './navBar';
import Footer from './footer';
import Home from './pages/home';
import Terms from "./pages/terms";
import NotFound from "./pages/notFound";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route name="Terms" exact path="/terms-and-conditions" component={Terms} />

                        <Route name="Contact" exact path="/index#contact" component={Home}/>
                        <Route name="Services" exact path="/index#services" component={Home}/>
                        <Route name="About" exact path="/index#about" component={Home}/>
                        <Route name="Home" exact path="/index" component={Home}/>
                        <Route name="Home" exact path="/" component={Home}/>
                        <Route name="NotFound" path="*" component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;