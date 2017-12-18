/* @flow */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
// $FlowFixMe
import 'CSS/main.css';

// --- Components
import Details from './components/Details';
import FourOhFour from './components/404';
import Header from './components/Header';
import Landing from './components/Landing';

import preload from '../MOCK_DATA.json';

const Wrap = styled.div`
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`;

class Routing extends React.Component<*, *> {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent<*, *> & { target: HTMLInputElement }) =>
    this.setState({
      searchTerm: event.target.value
    });

  render() {
    return (
      <BrowserRouter>
        <Wrap>
          <Header handleChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} />
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <Landing people={preload.people} tags={preload.tags} searchTerm={this.state.searchTerm} {...props} />
              )}
            />
            <Route path="/details/:id" component={Details} />
            <Route component={FourOhFour} />
          </Switch>
        </Wrap>
      </BrowserRouter>
    );
  }
}

export default Routing;
