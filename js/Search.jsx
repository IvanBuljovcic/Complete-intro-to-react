/* @flow */

// --- Imports
import React, { Component } from 'react';

// --- Components
import Header from './Header';
import ShowCard from './ShowCard';

type Props = {
  shows: Array<Show>
};

type State = {
  searchTerm: string
};

/* C)
* Also needs to be imported along with <Props, State, Show>
  type Show = {
    title: string,
    description: string,
    year: string,
    imdbID: string,
    trailer: string,
    poster: string
  };
*/

/* --- Search Class --- */
class Search extends Component<Props, State> {
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

  defaultProps = {
    shows: []
  };

  // B)
  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent<{}> & { target: HTMLInputElement }) => {
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
        <Header searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} showSearch />

        {/*
          - When passing variables like Date, pass the variable TO the component, do not assign it from the component.
          - The component should always look the same, given the same parameters
        */}
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
