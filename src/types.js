/*
** @flow
*/

type ValidStyle = Object | number;

export type Style = [] | ValidStyle;

export type Action = {
  type: string,
  payload: Object,
  error?: Object,
};

export type User = {
  email: string,
  displayName: string,
  uid: string,
};

export type AuthState = {
  user: ?User,
};

export type LoginUser = {
  email: string,
  password: string,
};

export type CreateUser = {
  email: string,
  displayName: string,
  password: string,
};

export type State = {
  auth: AuthState,
}
