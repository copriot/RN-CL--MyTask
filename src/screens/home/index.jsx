import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatAction from '../../components/uı/FloatAction';
import {screens} from '../../utils/routesNames';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <FloatAction onPress={() => navigation.navigate(screens.ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
