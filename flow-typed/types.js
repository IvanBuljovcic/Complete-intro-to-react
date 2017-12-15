/* @flow */

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Person = {
  id: string,
  avatar: string,
  name: {
    first_name: string,
    last_name: string
  },
  gender: string,
  description: string,
  birth_date: string,
  tags: Array<string>
};
