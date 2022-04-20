import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'App' }}
        />
        <Stack.Screen
          name="Components"
          component={ComponentsScreen}
          options={{ title: 'Components' }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'List' }}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{ title: 'Image' }}
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{ title: 'Counter' }}
        />
        <Stack.Screen
          name="Color"
          component={ColorScreen}
          options={{ title: 'Color' }}
        />
        <Stack.Screen
          name="Square"
          component={SquareScreen}
          options={{ title: 'Square' }}
        />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={{ title: 'Text' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
