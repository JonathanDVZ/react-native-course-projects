import React, { useEffect } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  LayoutAnimation
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from './../actions';

const ListItem = ({ library, expanded, selectLibrary }) => {
  const { id, title, description } = library;

  useEffect(() => {
    LayoutAnimation.spring();
  }, [expanded]);

  return (
    <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
      <Card>
        <Card.Title style={styles.title}>{title}</Card.Title>
        <Card.Divider />
        {expanded && (
          <View>
            <Text>{description}</Text>
          </View>
        )}
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'left'
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
