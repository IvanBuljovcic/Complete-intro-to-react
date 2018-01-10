/* @flow */

import moxios from 'moxios';
import { setSearchTerm, addAPIData } from '../actionCreators';
import getAPIDetails from '../asyncActions';

const strangerThings = {
  rating: '5.8',
  description: 'The personal and professional life of Dev, a 30-year-old actor in New York.',
  imdbID: 'tt4635276',
  poster: 'mon.jpg',
  title: 'Master of None',
  trailer: '6bFvb3WKISk',
  year: '2015–'
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(strangerThings)).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn();

  moxios.withMock(() => {
    const thunk = getAPIDetails(strangerThings.imdbID);

    thunk(dispatchMock);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request
        .respondWith({
          status: 200,
          response: strangerThings
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${strangerThings.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(strangerThings));
          done();
        });
    });
  });
});
