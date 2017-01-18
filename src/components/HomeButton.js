/*
** @flow
*/

import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

type HomeButtonProps = {
  title: string,
  onPress: Function,
  backgroundColor?: string,
};

export default function HomeButton({ title, onPress, backgroundColor }: BasicButtonProps) {
  const width = Dimensions.get('window').width;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, { width }, backgroundColor && { backgroundColor }]}>
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
