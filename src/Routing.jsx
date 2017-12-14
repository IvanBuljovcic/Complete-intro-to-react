/* @flow */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// --- Components
import FourOhFour from './components/404';
import Landing from './components/Landing';
import AppHeader from './components/AppHeader';

import preload from '../MOCK_DATA.json';

const Routing = () => (
  <BrowserRouter>
    <div className="app">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={props => <Landing people={preload.people} {...props} />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
