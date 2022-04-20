import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card, Button, Input, Icon } from 'react-native-elements';
import Confirm from './../components/Confirm';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import {
  employeeUpdate,
  employeeCreate,
  employeeSave,
  employeeDelete
} from '../actions/index';

const EmployeeForm = ({
  route,
  name,
  phone,
  shift,
  employeeUpdate,
  employeeCreate,
  employeeSave,
  employeeDelete,
  editScreen
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleOverlay, setVisibleOverlay] = useState(false);

  useEffect(() => {
    if (editScreen) {
      const { name, phone, shift, uid } = route.params;
      employeeUpdate({ prop: 'name', value: name });
      employeeUpdate({ prop: 'phone', value: phone });
      employeeUpdate({ prop: 'shift', value: shift });
    } else {
      employeeUpdate({ prop: 'name', value: '' });
      employeeUpdate({ prop: 'phone', value: '' });
      employeeUpdate({ prop: 'shift', value: 'Monday' });
    }
  }, []);

  const onButtonPress = () => {
    if (name !== '' && phone !== '' && shift !== '') {
      setErrorMessage('');
      if (editScreen) {
        const { uid } = route.params;
        employeeSave({ name, phone, shift, uid });
      } else employeeCreate({ name, phone, shift });
    } else setErrorMessage('You must enter name, phone and shift');
  };

  const onTextPress = () => {
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  const toggleOverlay = () => {
    setVisibleOverlay(!visibleOverlay);
  };

  const onAccept = () => {
    const { uid } = route.params;
    employeeDelete({ uid });
    toggleOverlay();
  };

  const onDecline = () => {
    toggleOverlay();
  };

  return (
    <Card>
      <Card.Title style={styles.cardTitle}>Employee form</Card.Title>
      <Card.Divider />
      <View>
        <Input
          autoCapitalize="none"
          placeholder="Name"
          value={name}
          onChangeText={(value) => employeeUpdate({ prop: 'name', value })}
        />
      </View>
      <Card.Divider />
      <View>
        <Input
          autoCapitalize="none"
          placeholder="Phone"
          value={phone}
          onChangeText={(value) => employeeUpdate({ prop: 'phone', value })}
        />
      </View>
      <Card.Divider />
      <View>
        <Text style={styles.pickerTitle}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={(value) => employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </View>
      <Card.Divider />
      <Button
        title={editScreen ? 'Save Changes' : 'Create'}
        type="outline"
        onPress={() => onButtonPress()}
      />
      {editScreen && (
        <View>
          <Button
            title="Text Schedule"
            type="outline"
            onPress={() => onTextPress()}
            containerStyle={styles.marginTopBtn}
          />
          <Button
            title="Fire Employee"
            type="outline"
            onPress={() => toggleOverlay()}
            containerStyle={styles.marginTopBtn}
          />
          <Confirm
            visible={visibleOverlay}
            toggleOverlay={toggleOverlay}
            overlayText="Are you sure you want to delete this?"
            onAccept={onAccept}
            onDecline={onDecline}
          />
        </View>
      )}
      {errorMessage !== '' && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
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
  },
  pickerTitle: {
    fontSize: 18,
    marginLeft: 7
  },
  marginTopBtn: {
    marginTop: 10
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
  employeeSave,
  employeeDelete
})(EmployeeForm);
