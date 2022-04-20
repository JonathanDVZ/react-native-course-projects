import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button, Input, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './../actions/index';

const LoginForm = ({
  email,
  emailChanged,
  password,
  passwordChanged,
  loading,
  loginUser,
  error
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loginAction = async () => {
    setErrorMessage('');
    if (email !== '' && password !== '') {
      loginUser({ email, password });
    } else setErrorMessage('You must enter email and password');
  };

  return (
    <Card>
      <Card.Title style={styles.cardTitle}>Login form</Card.Title>
      <Card.Divider />
      <View>
        <Input
          autoCapitalize="none"
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => emailChanged(text)}
          rightIcon={
            <Icon
              type="material-community"
              name="email"
              size={24}
              color="#86949e"
            />
          }
        />
        <Input
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={(text) => passwordChanged(text)}
          rightIcon={
            <Icon
              type="material-community"
              name={hidePassword ? 'eye-off' : 'eye'}
              size={24}
              color="#86949e"
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
        <Button
          title="Login"
          type="outline"
          onPress={() => loginAction()}
          loading={loading}
        />
        {errorMessage !== '' ||
          (error !== '' && (
            <Text style={styles.errorText}>
              {errorMessage !== '' ? errorMessage : error}
            </Text>
          ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    fontWeight: '400'
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
