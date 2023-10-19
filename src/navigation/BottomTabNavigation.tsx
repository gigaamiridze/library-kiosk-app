import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Services, Categories, Contact } from '../screens';
import { TabBarIcon } from '../components';
import { Routes } from '../constants';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.SERVICES}
      screenOptions={screenOptions}
    >
      <Tab.Screen 
        name={Routes.SERVICES} 
        component={Services} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon 
              focused={focused}
              fillIcon='cog'
              outlineIcon='cog-outline'
            />
          )
        }}
      />
      <Tab.Screen 
        name={Routes.CATEGORIES} 
        component={Categories} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon 
              focused={focused}
              fillIcon='grid'
              outlineIcon='grid-outline'
            />
          )
        }}
      />
      <Tab.Screen 
        name={Routes.CONTACT} 
        component={Contact} 
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon 
              focused={focused}
              fillIcon='call'
              outlineIcon='call-outline'
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;
