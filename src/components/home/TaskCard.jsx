import {StyleSheet, Text, View} from 'react-native';
import themeColors from '../../theme';

const TaskCard = ({item}) => {
  console.log({item});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item?.title || 'There isnt title'}</Text>
      <Text style={styles.description}>
        {item?.description || ' There is no description'}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.description}>
          {item?.startDate || 'Start Date is not written'}
        </Text>
        <Text style={styles.description}>
          {item?.endDate || 'End Date is not written'}
        </Text>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: themeColors.lightGray,
    borderRadius: 10,
    backgroundColor: '#000000',
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
