import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ListItem } from 'react-native-elements';

const EmployeeItem = ({ employee, navigation }) => {
  const { navigate } = navigation;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigate('EmployeeEdit', employee)}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{employee.name}</ListItem.Title>
          <ListItem.Subtitle>{employee.phone}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableWithoutFeedback>
  );
};

export default EmployeeItem;
