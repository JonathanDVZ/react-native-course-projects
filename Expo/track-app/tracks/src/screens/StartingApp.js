import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartingApp = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 25
  }
});

export default StartingApp;
