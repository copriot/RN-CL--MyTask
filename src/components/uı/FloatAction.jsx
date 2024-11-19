import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PenAdd} from 'iconsax-react-native';
import {Dimensions} from 'react-native';
import themeColors from '../../theme';

const {width, height} = Dimensions.get('screen');
const FloatAction = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <PenAdd size="36" color={themeColors.iconYellow} variant="Broken" />
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
    backgroundColor: themeColors.background,
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: themeColors.lightGray,
  },
});
