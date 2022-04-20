import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import headerOptions from './../utils/headerOptions';
import EmployeeListScreen from './../screens/EmployeeList';
import EmployeeCreateScreen from './../screens/EmployeeCreate';
import EmployeeEditScreen from './../screens/EmployeeEdit';
import { navigate } from './../RootNavigation';
import { auth } from './../utils/firebase';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="EmployeeList">
      <Stack.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
        options={{
          ...headerOptions,
          title: 'Employees',
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => auth.signOut()}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableWithoutFeedback>
          ),
          headerRight: () => (
            <Icon
              type="material-community"
              name="plus"
              size={30}
              containerStyle={styles.icon}
              onPress={() => navigate('EmployeeCreate')}
            />
          )
        }}
      />
      <Stack.Screen
        name="EmployeeCreate"
        component={EmployeeCreateScreen}
        options={{
          ...headerOptions,
          title: 'Edit Employee'
        }}
      />
      <Stack.Screen
        name="EmployeeEdit"
        component={EmployeeEditScreen}
        options={{
          ...headerOptions,
          title: 'Update Employee'
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10
  },
  logoutText: {
    color: 'blue',
    fontSize: 17,
    marginLeft: 15
  }
});

export default MainStack;
