/*
** @flow
*/

'use strict';

import { createStore, applyMiddleware } from 'redux';
/* $FlowFixMe */
import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import thunk from 'redux-thunk';
import reducers from './reducers';
import firebase from './firebase';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

const middlewares = [thunk, firebase];

export function configureStore(initialState: Object) {
  return createStoreWithNavigation(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );
}

export default configureStore({});
