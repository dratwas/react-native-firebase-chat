/*
** @flow
*/

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Router from '../routes';
import Container from '../components/Container';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';

import { createUserRequest } from '../actions';
import store from '../store';

type SignupScreenProps = {
  navigator: Object,
}
type SignupScreenState = {
  email: string,
  displayName: string,
  password: string,
  repassword: string,
}

class SignupScreen extends Component<void, SignupScreenProps, SignupScreenState> {
  props: SignupScreenProps
  initialState: SignupScreenState = {
    email: '',
    displayName: 'DratwaCwel',
    password: 'qweqwe',
    repassword: 'qweqwe',
  }
  state: SignupScreenState = this.initialState;

  onChangeFactory = (prop: string) => (value: string) => this.setState({ [prop]: value });

  setEmail = this.onChangeFactory('email');
  setDisplayName = this.onChangeFactory('displayName');
  setPassword = this.onChangeFactory('password');
  setRepassword = this.onChangeFactory('repassword');

  handleCreateUser = () => {
    const { email, displayName, password, repassword } = this.state;
    if (password === repassword) {
      store.dispatch(createUserRequest({ email, password, displayName }));
    }
  }

  render() {
    const { email, displayName, password, repassword } = this.state;
    return (
      <Container style={styles.container}>
        <InputWithLabel onChange={this.setEmail} value={email}>
          EMAIL ADDRESS
        </InputWithLabel>
        <InputWithLabel onChange={this.setDisplayName} value={displayName}>
          NICKNAME
        </InputWithLabel>
        <InputWithLabel onChange={this.setPassword} value={password}>
          PASSWORD
        </InputWithLabel>
        <InputWithLabel onChange={this.setRepassword} value={repassword}>
          RE-PASSWORD
        </InputWithLabel>
        <Button
          style={styles.button}
          onPress={this.handleCreateUser}
          disabled={!email || !password || !repassword}
        >
          Create account
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

export default SignupScreen;
