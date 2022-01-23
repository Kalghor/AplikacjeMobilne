import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator'
import SensorScreen from '../screens/Sensor';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{}}
      />
      <Stack.Screen name="SensorScreen" component={SensorScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
