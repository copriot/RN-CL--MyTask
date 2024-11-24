import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {screens} from '../utils/routesNames';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import themeColors from '../theme';
import {Moon, Sun1} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: themeColors.background}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: darkMode ? themeColors.textColor : 'black',
            color: darkMode ? themeColors.textColor : 'black',
            headerStyle: {
              backgroundColor: darkMode
                ? themeColors.background
                : themeColors.textColor,
            },
            contentStyle: {
              backgroundColor: darkMode
                ? themeColors.background
                : themeColors.textColor,
            },
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <TouchableOpacity
                onPress={() => setDarkMode(!darkMode)}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginRight: 10,
                  padding: 10,
                }}>
                <Text>
                  {darkMode ? (
                    <Sun1 size="32" color="#dce775" variant="Bold" />
                  ) : (
                    <Moon size="32" color="#555555" variant="Bold" />
                  )}
                </Text>
              </TouchableOpacity>
            ),
          }}>
          <Stack.Screen name={screens.TASKS} component={Home} />
          <Stack.Screen name={screens.ADDTASKS} component={AddTask} />
          <Stack.Screen name={screens.TASKDETAIL} component={TaskDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
