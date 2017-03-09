/**
* @flow
*/

import { Component } from 'react';
import Router from '../routes';

type AfterLoginRedirectProps = {
  navigation: Object,
}

export default class AfterLoginRedirect extends Component {
  props: AfterLoginRedirectProps

  componentDidMount() {
    this.props.navigation.replace(Router.getRoute('mainScene'));
  }

  render() {
    return null;
  }
}
