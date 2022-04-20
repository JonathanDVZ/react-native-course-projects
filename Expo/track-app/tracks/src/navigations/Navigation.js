import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoreContext from '../context/AuthStore/StoreContext';
import AuthStack from './AuthStack';
import MainTab from './MainTab';
import StartingApp from './../screens/StartingApp';
import { navigationRef, isReadyRef } from './../navigationRef';

const Stack = createStackNavigator();

const Navigation = () => {
  const { token, gettingToken, tryLocalSignin } = useContext(StoreContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {gettingToken ? (
        <Stack.Navigator>
          <Stack.Screen name="loading" component={StartingApp} />
        </Stack.Navigator>
      ) : token ? (
        <MainTab />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
