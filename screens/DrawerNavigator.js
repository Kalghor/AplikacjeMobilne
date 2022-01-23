import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import HistoryExpenses from '../screens/HistoryExpenses';
import Dashboard from '../screens/Dashboard';
import DebtListScreen from '../screens/DebtListScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import TargetScreen from '../screens/TargetScreen';
import ScheduledTransactionsScreen from '../screens/ScheduledTransactionsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="HistoryExpenses" component={HistoryExpenses} />
      <Drawer.Screen name="DebtListScreen" component={DebtListScreen} />
      <Drawer.Screen name="ShoppingListScreen" component={ShoppingListScreen} />
      <Drawer.Screen name="TargetScreen" component={TargetScreen} />
      <Drawer.Screen name="ScheduledTransactionsScreen" component={ScheduledTransactionsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
