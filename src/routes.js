/*
** @flow
*/

import React from 'react';
/* $FlowFixMe */
import { createRouter } from '@exponent/ex-navigation';

import LoginScreen from './containers/LoginScreen';
import HomeScreen from './containers/HomeScreen';

const createRoute = (screen: React.Element<*> | Class<*>, title: string) => ({ // eslint-disable-line
  render: Router._makeRoute(screen),
  config: {
    navigationBar: {
      title,
    },
  },
});

const Router = createRouter(() => ({
  loginScene: () => createRoute(LoginScreen, 'Log In'),
  homeScene: () => ({ render: Router._makeRoute(HomeScreen) }),
}));

export default Router;
