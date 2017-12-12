/**
 * Reducer = takes `action` and `state` and returns a new `state`
 * setSearchTerm = reducer
 */
import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: ''
};

const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });
/**
   * Object.assign => left merge
   * {} == new object
   * assign `state` to new object, does NOT modify the original state
   * DO NOT MODIFY ORIGINAL STATE
   * Return NEW object
   * Overwrites only `searchTerm`
   */

const rootReducer = (
  state = DEFAULT_STATE, // If state is not defined, state is set to DEFAULT_STATE
  action
) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);

    default:
      return state;
  }
};

export default rootReducer;
