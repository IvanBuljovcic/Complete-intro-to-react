/* @flow */

import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'master' });

  expect(state).toEqual({ searchTerm: 'master', apiData: {} });
});

test('ADD_API_DATA', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '5.8',
        description: 'The personal and professional life of Dev, a 30-year-old actor in New York.',
        imdbID: 'tt4635276',
        poster: 'mon.jpg',
        title: 'Master of None',
        trailer: '6bFvb3WKISk',
        year: '2015–'
      }
    }
  );

  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt4635276: {
        rating: '5.8',
        description: 'The personal and professional life of Dev, a 30-year-old actor in New York.',
        imdbID: 'tt4635276',
        poster: 'mon.jpg',
        title: 'Master of None',
        trailer: '6bFvb3WKISk',
        year: '2015–'
      }
    }
  });
});
