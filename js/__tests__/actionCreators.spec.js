/* @flow */

import { setSearchTerm, addAPIData } from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      rating: '5.8',
      description: 'The personal and professional life of Dev, a 30-year-old actor in New York.',
      imdbID: 'tt4635276',
      poster: 'mon.jpg',
      title: 'Master of None',
      trailer: '6bFvb3WKISk',
      year: '2015–'
    })
  ).toMatchSnapshot();
});
