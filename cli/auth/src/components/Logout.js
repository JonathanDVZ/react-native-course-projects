import React from 'react';
import { Card, Button } from 'react-native-elements';
import { auth } from './../utils/firebase';

const Logout = () => (
  <Card>
    <Button title="Logout" type="outline" onPress={() => auth.signOut()} />
  </Card>
);

export default Logout;
