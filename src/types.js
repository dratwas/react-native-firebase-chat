/*
** @flow
*/

export type Action = {
  type: string,
  payload: Object,
};

type ValidStyle = Object | number;

export type Style = ValidStyle | ValidStyle[];
