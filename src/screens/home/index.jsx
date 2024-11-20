import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatAction from '../../components/uı/FloatAction';
import {screens} from '../../utils/routesNames';
import {Dimensions} from 'react-native';
import themeColors from '../../theme';

const {width, height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>

      <FloatAction onPress={() => navigation.navigate(screens.ADDTASKS)} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.background,
    flex: 1,
  },
});
