import React, { Component } from 'react';
import preload from '../data.json';

import ShowCard from './ShowCard';

class Search extends Component {
  /* B) Replaced via state object when defining handleSearchTermChange as arrow function

    constructor(props) {
      super(props);

      this.state = {
        searchTerm: 'This is some sort of debug statement'
      };

      // A) Happens ONCE in the constructor instead of each time Render is called
      this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }
  */

  // B)
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });

    /* DO NOT set state as below.
      This method does not trigger a change that React will know to watch for.
      ------
      this.state.searchTerm = event.target.value;
    */
  };

  // MUST have a render method and it MUST return markup
  render() {
    return (
      <div className="search">
        <header>
          <h1>S-Video</h1>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
            // A) onChange={this.handleSearchTermChange.bind(this)} -- Creates a new function each time Render is called
            onChange={this.handleSearchTermChange}
          />
        </header>

        {/*
          - When passing variables like Date, pass the variable TO the component, do not assign it from the component.
          - The component should always look the same, given the same parameters
        */}
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard
                title={show.title}
                description={show.description}
                poster={show.poster}
                year={show.year}
                key={show.imdbID}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
