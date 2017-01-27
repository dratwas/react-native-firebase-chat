/*
** @flow
*/

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Container from '../components/Container';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';

import AfterLoginRedirect from './AfterLoginRedirect';

import { createUserRequest } from '../actions';
import { getUser } from '../reducers';
import store from '../store';


import type { User, State } from '../types';

type SignupScreenProps = {
  activeUser: User,
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
    if (this.props.activeUser) {
      return <AfterLoginRedirect navigation={this.props.navigator} />;
    }

    return (
      <Container style={styles.container}>
        <InputWithLabel clearButtonMode="while-editing" onChange={this.setEmail} value={email}>
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

export default connect(
  (state: State) => ({
    activeUser: getUser(state),
  }),
)(SignupScreen);
