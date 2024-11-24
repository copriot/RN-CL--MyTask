import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme';
import {Button, Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import status, {tasksValues} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../utils/routesNames';
const TaskDetail = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params;

  const deleteTask = async () => {
    try {
      // Mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (!savedTasks) return; // Eğer görev yoksa durdur

      const parsedTasks = JSON.parse(savedTasks);
      // Silinecek görevi filtrele
      const filteredTasks = parsedTasks.filter(task => task.id !== item.id);
      // Güncellenmiş görev listesini kaydet
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  const updateTask = async newStatus => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (!savedTasks) return; // Eğer görev listesi boşsa işlemi durdur

      const parsedTasks = JSON.parse(savedTasks);
      const updatedTasks = parsedTasks.map(task => {
        // Görev ID'sine göre eşleşeni güncelle
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus,
          };
        }
        return task; // Diğer görevleri olduğu gibi döndür
      });

      // Güncellenen görev listesini kaydet
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      console.log('Task Updated:', updatedTasks);
    } catch (error) {
      console.log('HATAAAA UPDATE', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>Title:</Text>
          <Text style={styles.description}>{item.title}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>Start Date:</Text>
          <Text style={styles.description}>
            {moment(item.startDate).format('DD-MM-YYYY')}
          </Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>End Date:</Text>
          <Text style={styles.description}>
            {moment(item.endDate).format('DD-MM-YYYY')}
          </Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>Category:</Text>
          <Text style={styles.description}>{setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>Status:</Text>
          <Text style={styles.description}>
            {tasksValues.find(task => task.status == item.status).title}
          </Text>
        </View>
        <Divider />
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Button
          status="primary"
          onPress={() => {
            updateTask(status.PENDING);
            navigation.navigate(screens.TASKS);
          }}
          style={styles.button}>
          Start
        </Button>
        <Button
          status="success"
          onPress={() => {
            updateTask(status.COMPLETED);
            navigation.navigate(screens.TASKS);
          }}
          style={styles.button}>
          Complated
        </Button>
        <Button
          status="danger"
          onPress={() => {
            updateTask(status.CANCEL);
            navigation.navigate(screens.TASKS);
          }}
          style={styles.button}>
          Cancel
        </Button>
        <Button
          onPress={async () => {
            await deleteTask();
            navigation.navigate(screens.TASKS);
          }}
          status="warning"
          style={styles.button}>
          Delete
        </Button>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,

    fontWeight: 'bold',
    color: themeColors.neonYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: themeColors.neonYellow,
    fontWeight: 600,
  },
  button: {
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
  },
});
