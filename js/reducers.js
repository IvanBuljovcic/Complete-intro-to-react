/* @flow */

/**
 * Reducer = takes `action` and `state` and returns a new `state`
 * setSearchTerm = reducer
 */
import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// --- Set name to be the same as the state name
const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }

  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    /* --- Same as below
    * const key = action.payload.imdbID;
    * const obj = {}
    * obj[key] = action.payload
    */

    return Object.assign({}, state, {
      [action.payload.imdbID]: action.payload
    });
  }

  return state;
};

const rootReducer = combineReducers({
  searchTerm,
  apiData
});

export default rootReducer;
