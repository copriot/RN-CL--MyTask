import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatAction from '../../components/uı/FloatAction';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <FloatAction />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
