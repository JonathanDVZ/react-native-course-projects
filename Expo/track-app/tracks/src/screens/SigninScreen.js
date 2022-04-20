import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import StoreContext from '../context/AuthStore/StoreContext';

const SigninScreen = ({ navigation }) => {
  const { errorMessage, signin, clearErrorMessage } = useContext(StoreContext);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      clearErrorMessage();
    });

    return listener;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        navigation={navigation}
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: () => false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
