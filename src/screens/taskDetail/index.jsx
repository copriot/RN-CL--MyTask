import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme';
import {Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {tasksValues} from '../../utils/constant';

const TaskDetail = ({route}) => {
  const {item} = route?.params;
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
});
