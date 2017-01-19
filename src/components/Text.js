/*
** @flow
*/

import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import type { Style } from '../types';
import { FONT_GRAY } from '../colors';

type TextProps = {
  value: string,
  style?: Style,

}

export default function Text({ value, style, ...passProps }: TextProps) {
  return (
    <RNText style={[styles.text, style]} {...passProps}>{value.toUpperCase()}</RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: FONT_GRAY,
  },
});
