/*
** @flow
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Input from './Input';
import Text from './Text';

import type { Style } from '../types';

type InputWithLabelProps = {
  label: string,
  value: string,
  onChange: Function,
  placeholder?: string,
  style?: Style,
  inputStyle?: Style,
}

export default function InputWithLabel({
  label,
  value,
  onChange,
  placeholder,
  style,
  inputStyle,
}: InputWithLabelProps) {
  return (
    <View style={[styles.container, style]}>
      {label && <Text value={label} />}
      <Input style={inputStyle} value={value} onChange={onChange} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
});
