import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const FloatAction = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Add size="32" color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: height * 0.1,
    height: height * 0.1,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#2CCCE4',
    bottom: 20,
    right: 20,
  },
});
