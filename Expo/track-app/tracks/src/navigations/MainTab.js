import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackListFlowStack from './TrackListFlowStack';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackListFlow"
        component={TrackListFlowStack}
        options={{
          title: 'Tracks',
          tabBarIcon: () => <FontAwesome name="th-list" size={20} />
        }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          title: 'Add Track',
          tabBarIcon: () => <FontAwesome name="plus" size={20} />
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: () => <FontAwesome name="gear" size={20} />
        }}
      />
    </Tab.Navigator>
  );
}
