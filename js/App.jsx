/* @flow */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
// import Perf from 'react-addons-perf';
import { Provider } from 'react-redux';
import store from './store';

// --- Data
import preload from '../data.json';

// --- Components
import Details from './Details';
import Landing from './Landing';
import Search from './Search';

/* !!! --- NOT FOR PRODUCTION --- !!! */
// window.Perf = Perf;
// Perf.start();
/* !!! --- NOT FOR PRODUCTION --- !!! */

// --- 404 Component
const FourOhFour = () => <h1>404</h1>;

/**
 * Either BrowserRouter or Provider can be top level
 * Provider being inside BrowserRouter is easier for Server-Side rendering
 */
// --- App Component
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
          <Route
            path="/details/:id"
            component={(props: { match: Match }) => (
              <Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} {...props} />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
