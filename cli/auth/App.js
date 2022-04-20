import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import Logout from './src/components/Logout';
import { auth } from './src/utils/firebase';

const App = () => {
  const [user, sethUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged((authUser) => {
      if (isMounted) authUser ? sethUser(authUser) : sethUser(null);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <SafeAreaView>
      <View>
        <Header headerText="Authentication" />
        {user ? <Logout /> : <LoginForm />}
      </View>
    </SafeAreaView>
  );
};

export default App;
