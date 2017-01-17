/*
** @flow
*/

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


const middlewares = [thunk];

export function confugureStore(initialState: Object) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );
}

export default confugureStore({});
