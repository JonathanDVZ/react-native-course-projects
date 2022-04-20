import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
  const { headerText } = props;
  return (
    <View style={syles.view}>
      <Text style={syles.text}>{headerText}</Text>
    </View>
  );
};

const syles = StyleSheet.create({
  view: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
});

export default Header;
