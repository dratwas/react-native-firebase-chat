/*
** @flow
*/

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DEFAULT_SIZE = 60;

type IconProps = {
  height: number,
  width: number,
  name: string,
  style?: any,
};

type ImagePaths = { [key: string]: number };

const paths: ImagePaths = {
  chat: require('../../assets/chat.png'),
};

export default function Icon({ height, width, name, style }: IconProps) {
  const styles = setIconSize(height, width || DEFAULT_SIZE, DEFAULT_SIZE);
  return (
    <View>
      <Image
        style={[styles.icon, style]}
        source={paths[name]}
        resizeMode="contain"
      />
    </View>
  );
}

const setIconSize = (height: number, width: number) => StyleSheet.create({
  icon: {
    height,
    width,
  },
});
