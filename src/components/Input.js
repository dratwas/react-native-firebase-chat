/*
** @flow
*/

import React from 'react';
import { TextInput as RNInput, StyleSheet } from 'react-native';

import type { Style } from '../types';
import { FONT_GRAY } from '../colors';

type InputProps = {
  value: string,
  onChange: Function,
  style?: Style,
}

export default function Input({ value, onChange, style, ...passProps }: InputProps) {
  return (
    <RNInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChange}
      {...passProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: FONT_GRAY,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: FONT_GRAY,
    paddingBottom: 10,
  },
});
