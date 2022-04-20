import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import TrackContext from '../context/TrackStore/StoreContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    fetchTracks();
    const listener = navigation.addListener('focus', () => {
      fetchTracks();
    });

    return listener;
  }, [navigation]);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item, i }) => (
          <TouchableOpacity
            key={i}
            onPress={() =>
              navigation.navigate('TrackDetail', { _id: item._id })
            }
          >
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
};

const styles = StyleSheet.create({});

export default TrackListScreen;
