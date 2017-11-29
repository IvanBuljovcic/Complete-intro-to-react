import React from 'react';
import preload from '../data.json';

import ShowCard from './ShowCard';

const Search = () => (
  <div className="search">
    {/*
      When passing variables like Date, pass the variable TO the component, do not assign it from the component.
      The component should always look the same, given the same parameters
    */}
    <div>
      {preload.shows.map(show => (
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

export default Search;
