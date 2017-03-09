/*
** @flow
*/


import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import app from './app';
import auth, * as authSelectors from './auth';

export default combineReducers({
  app,
  auth,
});

export const getUser = createSelector(state => state.auth, authSelectors.getUser);
