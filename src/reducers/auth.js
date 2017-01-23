/*
** @flow
*/

import {
  // CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  // CREATE_USER_FAILED,
} from '../actions/auth';
import type { AuthState, Action } from '../types';

const initialState: AuthState = {
  user: null,
};

export default function authReducer(state: AuthState = initialState, action: Action):AuthState {
  switch (action.type) {
    case CREATE_USER_SUCCESS: {
      console.log(action, 'action');
      return {
        ...state,
        user: action.payload,
      };
    }
  }
  return state;
}

export const getUser = (state: AuthState) => {
  console.log(state, 'staet');
  return state.user;
};
