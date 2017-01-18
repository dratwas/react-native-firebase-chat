/*
** @flow
*/

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Router from '../routes';
import Icon from '../components/Icon';
import HomeButton from '../components/HomeButton';

type HomeScreenProps = {
  navigator: Function,
}

class HomeScreen extends Component {
  props: HomeScreenProps

  render() {
    const height = Dimensions.get('window').height;
    return (
      <View style={[styles.container, { height }]}>
        <View style={styles.icon}>
          <Icon height={200} width={200} name="chat" />
        </View>
        <View style={styles.buttons}>
          <HomeButton
            title="log in"
            onPress={() => (this.props.navigator.push(Router.getRoute('loginScene')))}
            backgroundColor="#E82754"
          />
          <HomeButton title="sign up" backgroundColor="#3CB2E2" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F01B',
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
