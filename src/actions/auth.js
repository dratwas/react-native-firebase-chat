/*
** @flow
*/

import type { Action, CreateUser, User } from '../types';

export const CREATE_USER_REQUEST = 'CREATE_USER_ACTION_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_ACTION_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_ACTION_FAILED';


export const createUserRequest = (payload: CreateUser) => ({
  type: CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccess = (payload: User): Action => ({
  type: CREATE_USER_SUCCESS,
  payload,
});

export const createUserFailed = (action: Action) => ({
  type: CREATE_USER_FAILED,
  payload: action.error,
});
