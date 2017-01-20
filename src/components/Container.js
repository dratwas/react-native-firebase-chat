/*
** @flow
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';

import type { Style } from '../types';

type ContainerProps = {
  children?: any,
  style?: Style,
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <View style={[styles.container, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
