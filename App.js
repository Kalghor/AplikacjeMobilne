import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabsNavigator from './screens/TabsNavigator';



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  

  return (
    <NavigationContainer>
     <TabsNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
