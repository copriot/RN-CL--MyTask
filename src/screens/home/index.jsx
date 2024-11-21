import {FlatList, RefreshControl, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatAction from '../../components/uı/FloatAction';
import {screens} from '../../utils/routesNames';

import themeColors from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/TaskCard';

const Home = ({navigation}) => {
  useEffect(() => {
    getTask();
  }, []);
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getTask = async () => {
    let myTask = [];
    try {
      const task = await AsyncStorage.getItem('task');
      myTask.push(JSON.parse(task));
      setTasks(myTask);
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true); //yenileme baslatmak için refreshing  statesini true cek
    getTask(); //get Task fonk calistir tasks statesini güncelle
    setRefreshing(false); //tekrar refreshing statesini false cekerek refreshing i bitir
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => {
          return <TaskCard item={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

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
