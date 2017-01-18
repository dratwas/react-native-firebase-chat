/*
** @flow
*/

import React, { Component } from 'react';
import {
  StatusBar,
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
/* $FlowFixMe */
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Router from './routes';


import store from './store';

class ReactNativeFirebaseChat extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar
          barStyle="light-content"
        />
        <StackNavigation initialRoute={Router.getRoute('homeScene')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeFirebaseChat', () => () => (
  <Provider store={store}>
    <ReactNativeFirebaseChat />
  </Provider>
));
