import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StoreContext from '../context/StoreContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(StoreContext);
  const { id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
