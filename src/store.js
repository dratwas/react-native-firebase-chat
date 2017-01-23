/*
** @flow
*/

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import firebase from './firebase';


const middlewares = [thunk, firebase];

export function configureStore(initialState: Object) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );
}

export default configureStore({});
