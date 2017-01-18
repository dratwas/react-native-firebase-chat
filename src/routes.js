/*
** @flow
*/

import React from 'react';
/* $FlowFixMe */
import { createRouter } from '@exponent/ex-navigation';

import Home from './containers/Home';

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
  homeScene: () => createRoute(Home, 'Home screen'),
}));

export default Router;
