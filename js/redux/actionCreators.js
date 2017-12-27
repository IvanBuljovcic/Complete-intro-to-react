/* @flow */

import axios from 'axios';
import {
  ADD_API_DATA,
  POST_API_DATA,
  SET_SELECT_VALUE,
  SET_TEXT
} from './actions';

export function setSelectValue(selectValue: string) {
  return {
    type: SET_SELECT_VALUE,
    payload: selectValue
  }
}

export function addAPIData(apiData: Show) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}

export function postAPIData(article: ArticleType) {
  return {
    type: POST_API_DATA,
    payload: article
  }
}

export function setFormText(setText: string) {
  return {
    type: SET_TEXT,
    payload: setText
  }
}

export function getAPIDetails(key: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${key}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error('Axios error', error); // eslint-disable-line no-console
      });
  };
}

export function postAPIDetails(articleName: string) {
  return (dispatch: Function) => {
    axios
      .post(
        `http://localhost:3000/${articleName}`
      )
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error('Axios error', error); // eslint-disable-line no-console
      });
  };
}
