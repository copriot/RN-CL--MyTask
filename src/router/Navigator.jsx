import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {screens} from '../utils/routesNames';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';
import themeColors from '../theme';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: themeColors.textColor,
          headerTitleStyle: {color: themeColors.textColor},
          //  headerTintColor: {color: '#fff'},
          // Header kısmını
          headerStyle: {
            backgroundColor: themeColors.background, // Header'ın arka plan rengi
          },
          // Ekranların içerik kısmının arka plan rengi
          contentStyle: {
            backgroundColor: themeColors.background, // Ekranın iç kısmı için arka plan rengi
          },
        }}>
        <Stack.Screen name={screens.TASKS} component={Home} />
        <Stack.Screen name={screens.ADDTASKS} component={AddTask} />
        <Stack.Screen name={screens.TASKDETAIL} component={TaskDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
