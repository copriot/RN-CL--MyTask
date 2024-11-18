import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {screens} from '../utils/routesNames';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screens.TASKS} component={Home} />
        <Stack.Screen name={screens.ADDTASKS} component={AddTask} />
        <Stack.Screen name={screens.TASKDETAIL} component={TaskDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
