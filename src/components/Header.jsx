/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

// $FlowFixMe
require('CSS/components/_main-header.css');

type Props = {
  handleChange?: Function,
  searchTerm?: string
};

const Header = (props: Props) => (
  <header className="main-header">
    <Link to="/" className="header__logo">
      <img src="http://placehold.it/200x60" alt="Logo" />
    </Link>

    <form className="header__search">
      <input type="text" placeholder="Search for people" value={props.searchTerm} onChange={props.handleChange} />
    </form>

    <span className="header__results">0 people found</span>
  </header>
);

Header.defaultProps = {
  handleChange: function noop() {},
  searchTerm: ''
};

export default Header;
