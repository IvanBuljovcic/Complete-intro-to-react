/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

// --- Styles
// $FlowFixMe
require('CSS/components/_app-header.css');

const AppHeader = (props: { results: string }) => (
  <header className="app-header">
    <Link to="/" className="header__logo">
      <img src="/public/img/logo-marvel.svg" alt="Marvel logo" />
    </Link>

    <div className="header__search">
      <input type="text" placeholder="Search for any character, power, secret identity" />
    </div>

    <div className="header__results">
      <span>{props.results}</span> results found
    </div>
  </header>
);

export default AppHeader;
