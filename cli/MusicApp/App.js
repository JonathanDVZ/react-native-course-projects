/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <SafeAreaView>
    <View style={styles.viewContainer}>
      <Header headerText="New Releases!" />
      <AlbumList />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  viewContainer: {
    minHeight: '100%'
  }
});

export default App;
