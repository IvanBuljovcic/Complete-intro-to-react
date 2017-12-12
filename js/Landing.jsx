/* @flow */

import React, { Component, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';

import { setSearchTerm } from './actionCreators';

class Landing extends Component<*, *> {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    clearSearchTerm: Function,
    history: RouterHistory
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();

    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>S-Video</h1>

        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
          />
          <Link to="/search" onClick={this.props.clearSearchTerm}>or Browse All</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },

  clearSearchTerm() {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

/**
 * Connect => injects objects as props into {component}
 */
