import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button, Input, Icon } from 'react-native-elements';
import { auth } from './../utils/firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const loginAction = async () => {
    setError('');
    if (email !== '' && password !== '') {
      setLoading(true);
      await auth
        .signInWithEmailAndPassword(email, password)
        .catch(async () => {
          await auth
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
              console.log(error);
              setLoading(false);
              setError('Authentication Failed');
            })
            .then(() => setLoading(false));
        })
        .then(() => setLoading(false));
    } else setError('You must enter email and password');
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
          onChangeText={(text) => setEmail(text)}
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
          onChangeText={(text) => setPassword(text)}
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
        <Text style={styles.errorText}>{error}</Text>
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

export default LoginForm;
