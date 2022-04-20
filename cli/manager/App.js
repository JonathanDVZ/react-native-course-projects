import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import Navigation from './src/navigations/Navigation';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
