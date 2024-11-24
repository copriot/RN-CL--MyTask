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
import status from '../../utils/constant';
import themeColors from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/TaskCard';
import {Text} from 'react-native-svg';
import Header from '../../components/home/Header';

const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [complated, setComplated] = useState(0);
  const [cancel, setCancel] = useState(0);

  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      const parsedTasks = JSON.parse(savedTask);
      setTasks(parsedTasks);

      // Sayaçlar
      let complatedCount = 0;
      let pendingCount = 0;
      let ongoingCount = 0;
      let cancelCount = 0;

      // Döngü ile görevlerin statüsüne göre sayımları yapıyoruz
      //parsedTasksi task a çevirerek döndüm
      for (const task of parsedTasks) {
        switch (task.status) {
          case 1: // Ongoing
            ongoingCount++;
            break;
          case 2: // Pending
            pendingCount++;
            break;
          case 3: // Complated
            complatedCount++;
            break;
          case 4: // Canceled
            cancelCount++;
            break;
          default:
            console.warn('Unknown status of task');
            break;
        }
      }

      // State'leri güncelle
      setOngoing(ongoingCount);
      setPending(pendingCount);
      setComplated(complatedCount);
      setCancel(cancelCount);
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
        ListHeaderComponent={
          <Header
            ongoing={ongoing}
            pending={pending}
            complated={complated}
            cancel={cancel}
          />
        }
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
