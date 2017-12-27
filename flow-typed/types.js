/* @flow */

declare
var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type ArticleType = {
  ID: string,
  articleName: string,
  title: string,
  text: string,
  active: boolean,
  version: string,
  createdAt: string
}

/* --- Only for internal use, inside this file --- */
declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT < A: ActionType, P > = { |
  type: A,
  payload: P |
};

/* --- Export of actions, for external use --- */
export type Action = ActionT < 'SET_SEARCH_TERM', string > | ActionT < 'ADD_API_DATA', Show > ;
