/*
** @flow
*/

import React from 'react';
/* $FlowFixMe */
import { createRouter } from '@exponent/ex-navigation';


import HomeScreen from './containers/HomeScreen';
import LoginScreen from './containers/LoginScreen';
import SignupScreen from './containers/SignupScreen';
import MainScreen from './containers/MainScreen';


const createRoute = (screen: React.Element<*> | Class<*>, title: string) => ({ // eslint-disable-line
  render: Router._makeRoute(screen),
  config: {
    navigationBar: {
      title,
    },
  },
});

const Router = createRouter(() => ({
  homeScene: () => ({ render: Router._makeRoute(HomeScreen) }),
  loginScene: () => createRoute(LoginScreen, 'Log In'),
  signupScene: () => createRoute(SignupScreen, 'Sign Up'),
  mainScene: () => createRoute(MainScreen, 'Main screen'),
}));

export default Router;
