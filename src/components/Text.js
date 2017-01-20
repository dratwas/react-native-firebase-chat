/*
** @flow
*/

import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import type { Style } from '../types';
import { FONT_GRAY, FONT_BLUE } from '../colors';

type TextProps = {
  children?: string,
  style?: Style,
}

type TextLinkProps = {
  onPress: Function,
  children: any,
  style?: Style,
}

export default function Text({ children, style, ...passProps }: TextProps) {
  return (
    <RNText style={[styles.text, style]} {...passProps}>{children}</RNText>
  );
}

Text.Link = ({ onPress, children, style }: TextLinkProps) => (
  <Text style={[styles.textLink, style]} onPress={onPress}>{children}</Text>

);

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    color: FONT_GRAY,
  },
  textLink: {
    color: FONT_BLUE,
    textAlign: 'center',
    fontSize: 10,
  },
});
