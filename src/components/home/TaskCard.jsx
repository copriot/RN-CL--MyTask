/* eslint-disable react/react-in-jsx-scope */
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import themeColors from '../../theme';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {setCategory} from '../../utils/function';
import {screens} from '../../utils/routesNames';
import {tasksValues} from '../../utils/constant';
import {Timer1, TimerStart} from 'iconsax-react-native';

const TaskCard = ({item}) => {
  console.log({item});
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(screens.TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: tasksValues.find(task => task.status === item.status)
            ?.color,
          padding: 3,
          borderRadius: 17,
          marginHorizontal: 4,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {tasksValues.find(task => task.status === item?.status)?.icon}
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.description}>🚀Dead Line💣 </Text>
          <Text style={styles.description}>
            {moment(item.startDate).format('DD/MM/YYYY')}
          </Text>
          <Text>
            '' <TimerStart size="18" color="#dce775" variant="Bold" />
            ''
          </Text>
          <Text style={styles.description}>
            {moment(item.endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
      <View
        style={{
          fontSize: 14,
          fontWeight: '300',
          color: 'white',
          position: 'absolute',
          top: 5,
          right: 15,
        }}>
        <Text style={styles.description}>{setCategory(item.category)}</Text>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 15,
    gap: 10,
    borderWidth: 2,
    borderColor: themeColors.lightGray,
    borderRadius: 10,
    backgroundColor: themeColors.background,
    shadowColor: themeColors.iconYellow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    color: themeColors.neonYellow,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: themeColors.neonYellow,
    fontSize: 14,
    fontWeight: '400',
  },
});
