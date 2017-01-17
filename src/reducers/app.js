/*
** @flow
*/
import type { Action } from '../types';

const initialState: Object = {};

export default function appReducer(state: Object = initialState, action: Action) {
  const { type } = action;

  if (type === 'MOCK_SUCCESS') {
    console.log(action.payload); // eslint-disable-line
  }

  if (type === 'MOCK_SUCCESS') {
    console.log(action.payload); // eslint-disable-line
  }

  return state;
}
