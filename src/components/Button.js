/*
** @flow
*/

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';

import type { Style } from '../types';
import { FONT_GRAY, VIOLET, TRANSPARENT, WHITE } from '../colors';

type ButtonProps = {
  children?: string,
  onPress: Function,
  style?: Style,
  disabled?: boolean,
}

export default function Button({ children, onPress, style, disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, disabled && styles.disabled, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 27,
    backgroundColor: VIOLET,
  },
  disabled: {
    backgroundColor: FONT_GRAY,
  },
  text: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: TRANSPARENT,
  },
});
