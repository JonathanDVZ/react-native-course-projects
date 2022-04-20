import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const LibraryList = ({ libraries }) => (
  <FlatList
    data={libraries}
    keyExtractor={(library) => library.id.toString()}
    renderItem={({ item }) => <ListItem library={item} />}
  />
);

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
