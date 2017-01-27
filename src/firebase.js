/*
** @flow
*/

import * as firebase from 'firebase';
import {
  CREATE_USER_REQUEST,
  LOGIN_USER_REQUEST,
  createUserSuccess,
  loginUserSuccess,
} from './actions';

const config = {
  apiKey: 'AIzaSyDf-2VSZk7Kj4mrqkFyAlZ80nIGk535Nyw',
  authDomain: 'reactnativefirebasechat.firebaseapp.com',
  databaseURL: 'https://reactnativefirebasechat.firebaseio.com',
  storageBucket: 'reactnativefirebasechat.appspot.com',
  messagingSenderId: '236727844854',
};

const firebaseMiddleware = (store: Object) => (next: Function) => (action: Object) => {
  if (action.type === 'INITIALIZE_APP') {
    firebase.initializeApp(config);
    next(action);
    return null;
  }
  if (action.type === CREATE_USER_REQUEST) {
    createUser(store, action.payload);
    return next(action);
  }
  if (action.type === LOGIN_USER_REQUEST) {
    loginUser(store, action.payload);
    return next(action);
  }
  return next(action);
};

async function createUser(store, { email, password, displayName }) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    await user.updateProfile({ displayName });
    store.dispatch(createUserSuccess(santinizeUser(user)));
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
}

async function loginUser(store, { email, password }) {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    store.dispatch(loginUserSuccess(santinizeUser(user)));
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
}

const santinizeUser = ({ uid, email, displayName }) => ({
  uid,
  email,
  displayName,
});


export default firebaseMiddleware;
