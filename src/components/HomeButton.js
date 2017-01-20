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
  color: string,
};

export default function HomeButton({ title, onPress, backgroundColor, color }: HomeButtonProps) {
  const width = Dimensions.get('window').width;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, { width }, backgroundColor && { backgroundColor }]}>
        <Text style={[styles.buttonText, color && { color }]}>{title.toUpperCase()}</Text>
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
    fontSize: 24,
  },
});
