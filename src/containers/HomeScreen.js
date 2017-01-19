/*
** @flow
*/

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Router from '../routes';
import Icon from '../components/Icon';
import HomeButton from '../components/HomeButton';

import { BACKGROUND_DARK_BLUE, CYAN, VIOLET } from '../colors';
import { NAVBAR_HEIGHT } from '../constants';

type HomeScreenProps = {
  navigator: Function,
}

class HomeScreen extends Component {
  props: HomeScreenProps

  render() {
    const height = Dimensions.get('window').height - NAVBAR_HEIGHT;
    return (
      <View style={[styles.container, { height }]}>
        <View style={styles.icon}>
          <Icon height={200} width={200} name="chat" />
        </View>
        <View style={styles.buttons}>
          <HomeButton
            title="log in"
            onPress={() => (this.props.navigator.push(Router.getRoute('loginScene')))}
            backgroundColor={CYAN}
            color={VIOLET}
          />
          <HomeButton
            title="sign up"
            onPress={() => (this.props.navigator.push(Router.getRoute('homeScene')))}
            backgroundColor={VIOLET}
            color={CYAN}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_DARK_BLUE,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default HomeScreen;
