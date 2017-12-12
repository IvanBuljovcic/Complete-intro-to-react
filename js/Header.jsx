/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Header = (props: { showSearch?: boolean, handleSearchTermChange: Function, searchTerm: string }) => {
  let utilSpace;

  if (props.showSearch) {
    utilSpace = (
      <input
        value={props.searchTerm}
        type="text"
        placeholder="Search"
        // A) onChange={this.handleSearchTermChange.bind(this)} -- Creates a new function each time Render is called
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">S-Video</Link>
      </h1>

      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
