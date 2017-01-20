/*
** @flow
*/

import React from 'react';
import { View, TextInput as RNInput, StyleSheet } from 'react-native';

import type { Style } from '../types';
import { FONT_GRAY } from '../colors';

type InputProps = {
  value: string,
  onChange: Function,
  style?: Style,
}

export default function Input({ value, onChange, style, ...passProps }: InputProps) {
  return (
    <View style={styles.container}>
      <RNInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChange}
        {...passProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: FONT_GRAY,
    marginBottom: 5,
  },
  input: {
    color: FONT_GRAY,
    height: 20,
    fontSize: 18,
    marginTop: 10,
  },
});
