import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerOptions from './../utils/headerOptions';
import LoginScreen from './../screens/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...headerOptions,
          title: 'Please Login'
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
