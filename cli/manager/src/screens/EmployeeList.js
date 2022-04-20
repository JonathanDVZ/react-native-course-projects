import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions/index';
import EmployeeItem from './../components/EmployeeItem';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const EmployeeList = ({ employees, employeeFetch, navigation }) => {
  useEffect(() => {
    employeeFetch();
  }, []);

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <EmployeeItem employee={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { employees: state.employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
