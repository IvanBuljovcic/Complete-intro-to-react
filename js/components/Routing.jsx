/* @flow */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import type { Match } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../redux/store'

import data from '../../data.json';

// --- Components
import Home from './Home';
import Article from './Article';

type Props = {
  match: Match
}

// --- Routing Component
const Routing = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={props => <Home articles={data.articles} {...props} />} />
        <Route path="/article/:articleName" component={(props: Props) => (
          <Article article={data.articles.find(
            article => props.match.params.articleName === article.articleName
          )} {...props} />

        )} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

export default Routing;
