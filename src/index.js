/*
** @flow
*/

import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
/* $FlowFixMe */
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import navigatorConfig from './navigatorConfig';
import Router from './routes';
import { initFirebase } from './actions';
import store from './store';
import { getUser } from './reducers';

import type { State, User } from './types';

type ReactNativeFirebaseChatProps = {
  isLoggedIn: User,
  navigator: Object,
}
class ReactNativeFirebaseChat extends Component {
  props: ReactNativeFirebaseChatProps
  componentDidMount() {
    store.dispatch(initFirebase());
  }

  render() {
    return (
      <StackNavigation
        id="root"
        navigatorUID="root"
        defaultRouteConfig={navigatorConfig}
        initialRoute={Router.getRoute('homeScene')}
      />
    );
  }
}
const ConnectedView = connect(
  (state: State) => ({
    isLoggedIn: getUser(state),
  }),
)(ReactNativeFirebaseChat);

AppRegistry.registerComponent('ReactNativeFirebaseChat', () => () => (
  <Provider store={store}>
    <NavigationProvider router={Router}>
      <StatusBar
        barStyle="light-content"
      />
      <ConnectedView />
    </NavigationProvider>
  </Provider>
));
