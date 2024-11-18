import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PenAdd} from 'iconsax-react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const FloatAction = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <PenAdd size="36" color="#dce775" variant="Broken" />
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
    borderRadius: 32,
    position: 'absolute',
    backgroundColor: '#555555',
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: '#697689',
  },
});
