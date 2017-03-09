/*
** @flow
*/

import {
  // CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
} from '../actions/auth';
import type { AuthState, Action } from '../types';

const initialState: AuthState = {
  user: null,
};

export default function authReducer(state: AuthState = initialState, action: Action):AuthState {
  switch (action.type) {
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
  }
  return state;
}

export const getUser = (state: AuthState) => state.user;
