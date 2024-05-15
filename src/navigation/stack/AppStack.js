import React from 'react';
import Home from '../../screen/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="main_index" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default AppStack;
