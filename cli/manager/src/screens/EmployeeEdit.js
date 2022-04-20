import React from 'react';
import EmployeeForm from '../components/EmployeeForm';

const EmployeeUpdate = ({ route }) => (
  <EmployeeForm editScreen={true} route={route} />
);

export default EmployeeUpdate;
