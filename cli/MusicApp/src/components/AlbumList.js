import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AlbumDetail from './AlbumDatail';
import spotify from './../api/spotify';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            albums: { items }
          }
        } = await spotify.get('/browse/new-releases');
        setAlbums(items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={albums}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AlbumDetail album={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%'
  }
});

export default AlbumList;
