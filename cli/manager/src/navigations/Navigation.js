import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { navigationRef, isReadyRef } from './../RootNavigation';
import { auth } from './../utils/firebase';

const Stack = createStackNavigator();

const Navigation = () => {
  const [user, sethUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged((authUser) => {
      if (isMounted) {
        setLoading(false);
        authUser ? sethUser(authUser) : sethUser(null);
      }
    });
    return () => {
      isMounted = false;
    };
  });

  if (loading)
    return (
      <SafeAreaView>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {!user ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 25
  }
});

export default Navigation;
