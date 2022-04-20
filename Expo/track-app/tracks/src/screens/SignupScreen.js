import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StoreContext from '../context/AuthStore/StoreContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { errorMessage, signup, clearErrorMessage } = useContext(StoreContext);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      clearErrorMessage();
    });

    return listener;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        navigation={navigation}
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;
