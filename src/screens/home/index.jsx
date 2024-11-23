import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatAction from '../../components/uı/FloatAction';
import {screens} from '../../utils/routesNames';

import themeColors from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/TaskCard';
import {Text} from 'react-native-svg';
import Header from '../../components/home/Header';

const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(savedTask));
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true); //yenileme baslatmak için refreshing  statesini true cek
    getTask(); //get Task fonk calistir tasks statesini güncelle
    setRefreshing(false); //tekrar refreshing statesini false cekerek refreshing i bitir
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ListHeaderComponent={<Header />}
        renderItem={({item}) => {
          return <TaskCard item={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <FloatAction onPress={() => navigation.navigate(screens.ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.background,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
  empty: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginVertical: 20,
  },
});
