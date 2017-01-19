/*
** @flow
*/

import React, { Component } from 'react';

import Container from '../components/Container';
import InputWithLabel from '../components/InputWithLabel';

type LoginScreenState = {
  username: string,
  password: string,
}

class LoginScreen extends Component<void, {}, LoginScreenState> {

  initialState: LoginScreenState = {
    username: '',
    password: '',
  }

  state: LoginScreenState = this.initialState;

  onChangeFactory = (prop: string) => (value: string) => this.setState({ [prop]: value });

  setUserName = this.onChangeFactory('username');
  setPassword = this.onChangeFactory('password');

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <InputWithLabel
          label="user name"
          onChange={this.setUserName}
          value={username}
          placeholder="test"
        />
        <InputWithLabel
          label="password"
          onChange={this.setPassword}
          value={password}
          placeholder="test"
        />
      </Container>
    );
  }
}

export default LoginScreen;
