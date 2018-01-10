/* @flow */

import axios from 'axios';
import { addAPIData } from './actionCreators';

export default function getAPIDetails(imdbID: string) {
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
