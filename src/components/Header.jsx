/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

// $FlowFixMe
require('CSS/components/_main-header.css');

const Header = () => (
  <header className="main-header">
    <Link to="/" className="header__logo">
      <img src="http://placehold.it/200x60" alt="Logo" />
    </Link>

    <form className="header__search">
      <input type="text" placeholder="Search for people" />
    </form>

    <span className="header__results">0 people found</span>
  </header>
);

export default Header;
