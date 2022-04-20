import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrackListScreen from './../screens/TrackListScreen';
import TrackDetailScreen from './../screens/TrackDetailScreen';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function TrackListFlowStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: 'Track List'
        }}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{
          title: 'Track Detail'
        }}
      />
    </Stack.Navigator>
  );
}
