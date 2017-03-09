/*
** @flow
*/

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Router from '../routes';
import Container from '../components/Container';
import InputWithLabel from '../components/InputWithLabel';
import Text from '../components/Text';
import Button from '../components/Button';
import AfterLoginRedirect from './AfterLoginRedirect';

import { loginUserRequest } from '../actions';
import { getUser } from '../reducers';
import store from '../store';

import type { State, User } from '../types';

type LoginScreenProps = {
  navigator: Object,
  activeUser: User,
}
type LoginScreenState = {
  email: string,
  password: string,
}

class LoginScreen extends Component<void, LoginScreenProps, LoginScreenState> {
  props: LoginScreenProps
  initialState: LoginScreenState = {
    email: '',
    password: '',
  }
  state: LoginScreenState = this.initialState;

  onChangeFactory = (prop: string) => (value: string) => this.setState({ [prop]: value });

  setEmail = this.onChangeFactory('email');
  setPassword = this.onChangeFactory('password');

  logIn = () => {
    const { email, password } = this.state;
    store.dispatch(loginUserRequest({ email, password }));
  }

  render() {
    const { email, password } = this.state;
    if (this.props.activeUser) {
      return <AfterLoginRedirect navigation={this.props.navigator} />;
    }
    return (
      <Container style={styles.container}>
        <InputWithLabel autoCapitalize="none" onChange={this.setEmail} value={email}>
          USER NAME
        </InputWithLabel>
        <InputWithLabel secureTextEntry autoCapitalize="none" onChange={this.setPassword} value={password}>
          PASSWORD
        </InputWithLabel>
        <Text.Link
          style={styles.textLink}
          onPress={() => (this.props.navigator.push(Router.getRoute('loginScene')))}
        >
          Forgot your password?
        </Text.Link>
        <Button
          style={styles.button}
          onPress={this.logIn}
          disabled={!email || !password}
        >
          Log In
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 40,
  },
  textLink: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 40,
  },
});

export default connect(
  (state: State) => ({
    activeUser: getUser(state),
  }),
)(LoginScreen);
