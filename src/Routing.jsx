/* @flow */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// --- Components
import FourOhFour from './components/404';
import Landing from './components/Landing';

const Routing = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
