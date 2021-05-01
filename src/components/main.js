import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Projects from './projects';
import Page3 from './page3';
import Page4 from './page4';

const Main = () => {
    return(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
    </Switch>
    )
};

export default Main;