/* eslint-disable react-native/no-inline-styles */
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme';
import {
  ArrowCircleRight,
  DocumentUpload,
  Driving,
  NoteText,
  Xrp,
} from 'iconsax-react-native';

const Header = () => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: themeColors.ONGOING,
      icon: <Driving size="32" color={themeColors.textColor} />,
    },
    {
      id: 2,
      title: 'Pending',
      color: themeColors.PENDING,
      icon: <DocumentUpload size="32" color={themeColors.textColor} />,
    },
    {
      id: 3,
      title: 'Complated',
      color: themeColors.COMPLATED,
      icon: <NoteText size="32" color={themeColors.textColor} />,
    },
    {
      id: 4,
      title: 'Cancel',
      color: themeColors.CANCEL,
      icon: <Xrp size="32" color={themeColors.textColor} />,
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const Task = ({item}) => {
    return (
      <Pressable
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '45%',
          backgroundColor: item.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                color: themeColors.textColor,
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 5,
              }}>
              {item.title}
            </Text>
            <Text style={{color: themeColors.textColor}}>{10} Task</Text>
          </View>

          <View>
            <ArrowCircleRight size="22" color={themeColors.textColor} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
      />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            margin: 10,
            marginHorizontal: 20,
            color: themeColors.textColor,
          }}>
          All TASKS
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
