import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Overlay, Card } from 'react-native-elements';

const Confirm = ({
  visible,
  toggleOverlay,
  overlayText,
  onAccept,
  onDecline
}) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlay}
    >
      <View style={styles.container}>
        <Text>{overlayText}</Text>
        <View style={styles.btnOptions}>
          <Button
            title="Yes"
            type="outline"
            containerStyle={styles.btn}
            onPress={() => onAccept()}
          />
          <Button
            title="No"
            type="outline"
            containerStyle={styles.btn}
            onPress={() => onDecline()}
          />
        </View>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: '80%'
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  btnOptions: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    justifyContent: 'space-between'
  },
  btn: {
    width: '45%'
  }
});

export default Confirm;
