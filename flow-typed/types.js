/* @flow */

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Person = {
  avatar: string,
  description: string,
  gender: string,
  id: string,
  first_name: string,
  last_name: string
};
