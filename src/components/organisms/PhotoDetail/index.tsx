import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, Button, } from 'react-native';
import { usePhotos } from '../../../contexts/detail-context';
import { useNavigation } from '@react-navigation/native';

const PhotoDetails = () => {
  const navigation = useNavigation();
  const { photos, setPhotoDetail, setSelectedAlbum, fetchPhotoContext } = usePhotos();

  useEffect(() => {
    fetchPhotoContext();
  }, []);

  const window = () => {
    setSelectedAlbum(null);
  };

  return (
    <View>
      <Button title="Regresar" onPress={() => window()} />
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.texto}> {item.title}</Text>
              <Image
                style={styles.image}
                source={{ uri: item.thumbnailUrl }}
              />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 4
  },
  item: {
    padding: 10
  },
  texto: {
    color: 'black',
    textAlign: 'center'
  }
});

export default PhotoDetails;