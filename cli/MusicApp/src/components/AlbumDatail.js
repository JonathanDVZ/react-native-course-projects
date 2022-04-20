import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements';

const AlbumDetail = ({ album }) => (
  <Card>
    <Card.Title style={styles.cardTitle}>{album.name}</Card.Title>
    <Card.Title style={styles.cardSubtitle}>
      {album.artists.map(
        (artist, index) => `${index > 0 ? ' - ' : ''}${artist.name}`
      )}
    </Card.Title>
    <Card.Divider />
    <Card.Image source={{ uri: album.images[0].url }} />
    <Button
      buttonStyle={styles.btn}
      title="open in spotify"
      type="outline"
      onPress={() => Linking.openURL(album.external_urls.spotify)}
    />
  </Card>
);

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 17,
    textAlign: 'left'
  },
  cardSubtitle: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500'
  },
  btn: {
    marginTop: 15,
    width: '100%'
  }
});

export default AlbumDetail;
