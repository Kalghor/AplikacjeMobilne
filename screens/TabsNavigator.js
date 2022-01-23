import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import Dashboard from '../screens/Dashboard';
import DebtListScreen from '../screens/DebtListScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={StackNavigator} />
      <Tabs.Screen name="Dashboard" component={Dashboard} />
      <Tabs.Screen name="DebtListScreen" component={DebtListScreen} />
      <Tabs.Screen name="ShoppingListScreen" component={ShoppingListScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
