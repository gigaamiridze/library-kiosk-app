import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import { Selection } from '../screens';
import { Routes } from '../constants';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <Header /> }}>
      <Stack.Screen name='Bottom Tab Navigation' component={BottomTabNavigation} />
      <Stack.Screen name={Routes.SELECTION} component={Selection} />
    </Stack.Navigator>
  )
}

export default StackNavigation;
