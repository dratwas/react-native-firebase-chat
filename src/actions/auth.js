/*
** @flow
*/

import type { Action, CreateUser, User } from '../types';

export const CREATE_USER_REQUEST = 'CREATE_USER_ACTION_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_ACTION_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_ACTION_FAILED';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_ACTION_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_ACTION_SUCCESS';


export const createUserRequest = (payload: CreateUser) => ({
  type: CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccess = (payload: User): Action => ({
  type: CREATE_USER_SUCCESS,
  payload,
});

export const createUserFailed = (error: Object) => ({
  type: CREATE_USER_FAILED,
  payload: error,
});

export const loginUserRequest = (payload: Object) => ({
  type: LOGIN_USER_REQUEST,
  payload,
});

export const loginUserSuccess = (payload: User) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});
