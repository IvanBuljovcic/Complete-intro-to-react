/* @flow */

/**
 * Reducer = takes `action` and `state` and returns a new `state`
 * setSearchTerm = reducer
 */
import {
  combineReducers
} from 'redux';

import {
  ADD_API_DATA,
  POST_API_DATA,
  SET_SELECT_VALUE,
  SET_TEXT
} from './actions';

const selectValue = (state = '', action: Action) => {
  if (action.type === SET_SELECT_VALUE) {
    return action.payload;
  }

  return state
};

const setText = (state = '', action: Action) => {
  if (action.type === SET_TEXT) {
    return action.payload;
  }

  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, {
      [action.payload.version.key]: action.payload
    });
  }

  return state;
};

const article = (state = {}, action: Action) => {
  if (action.type === POST_API_DATA) {
    return Object.assign({}, state, {
      [action.payload.version.key]: action.payload
    })
  }
}


const rootReducer = combineReducers({
  apiData,
  selectValue,
  setText
});

export default rootReducer;
