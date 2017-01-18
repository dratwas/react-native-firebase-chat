/*
** @flow
*/

import React from 'react';
/* $FlowFixMe */
import { createRouter } from '@exponent/ex-navigation';

import LoginScreen from './containers/LoginScreen';
import HomeScreen from './containers/HomeScreen';

const createRoute = (screen: React.Element<*>, title: string) => ({
  render: Router._makeRoute(screen),
  config: {
    navigationBar: {
      title,
    },
  },
});

/**
* This is where we map route names to route components. Any React
* component can be a route, it only needs to have a static `route`
* property defined on it, as in HomeScreen below
*/

const Router = createRouter(() => ({
  loginScene: () => createRoute(LoginScreen, 'Log In'),
  homeScene: () => ({ render: Router._makeRoute(HomeScreen) }),
}));

export default Router;
