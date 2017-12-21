/* @flow */

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string
};

/* --- Only for internal use, inside this file --- */
declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

/* --- Export of actions, for external use --- */
export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
