import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Header headerText="Tech Stack" />
        <LibraryList />
        <View>
          <Text>App!</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
