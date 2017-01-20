/*
** @flow
*/

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Router from '../routes';
import Container from '../components/Container';
import InputWithLabel from '../components/InputWithLabel';
import Text from '../components/Text';
import Button from '../components/Button';

type LoginScreenProps = {
  navigator: Object,
}
type LoginScreenState = {
  username: string,
  password: string,
}

class LoginScreen extends Component<void, LoginScreenProps, LoginScreenState> {
  props: LoginScreenProps
  initialState: LoginScreenState = {
    username: '',
    password: '',
  }
  state: LoginScreenState = this.initialState;

  onChangeFactory = (prop: string) => (value: string) => this.setState({ [prop]: value });

  setUserName = this.onChangeFactory('username');
  setPassword = this.onChangeFactory('password');

  logIn = () => {
    this.props.navigator.push(Router.getRoute('loginScene'));
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container style={styles.container}>
        <InputWithLabel onChange={this.setUserName} value={username}>
          USER NAME
        </InputWithLabel>
        <InputWithLabel label="password" onChange={this.setPassword} value={password}>
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
          disabled={!!username && !!password}
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

export default LoginScreen;
