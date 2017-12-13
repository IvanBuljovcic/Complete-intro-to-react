/* @flow */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// --- Components
import FourOhFour from './components/404';
import Landing from './components/Landing';
import AppHeader from './components/AppHeader';

// {props.shows
// .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
// .map(show => <ShowCard key={show.imdbID} {...show} />)}

const Routing = () => (
  <BrowserRouter>
    <div className="app">
      <AppHeader results="0" />
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
