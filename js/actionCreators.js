/* @flow */

import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function addAPIData(apiData: Show) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}

export function getAPIDetails(imdbID: string) {
  // THUNK
  /*
    Go do what ever and let me know when youre done.
  */
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error('Axios error', error); // eslint-disable-line no-console
      });
  };
}
