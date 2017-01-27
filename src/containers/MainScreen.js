/*
** @flow
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../components/Container';
import Text from '../components/Text';
import { getUser } from '../reducers';

import type { State, User } from '../types';

type MainScreenProps = {
  user: User,
}

class MainScreen extends Component<void, MainScreenProps, void> {
  props: MainScreenProps
  render() {
    return (
      <Container>
        <Text>beka beka</Text>
      </Container>
    );
  }
}

export default connect(
  (state: State) => ({
    activeUser: getUser(state),
  }),
)(MainScreen);
