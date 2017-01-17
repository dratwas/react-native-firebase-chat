/*
** @flow
*/

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const middlewares = [thunk];

export function confugureStore(initialState: Object) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
  );
}

export default confugureStore({});
