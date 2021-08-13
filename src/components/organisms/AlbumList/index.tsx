import React, { useEffect } from 'react';
import { Text, FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';
import { useAlbumes } from '../../../contexts/album-context';
import AlbumListItem from '../../molecules/AlbumListItem';

const AlbumList = () => {

  const { albums, fetchAlbumContext } = useAlbumes();

  useEffect(() => {
    fetchAlbumContext();
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <>
          <Text style={styles.container}>Albumes</Text>
          <FlatList
            data={albums}
            renderItem={({ item, index }) => (
              <AlbumListItem
                key={item.id}
                Album={item}
                index={index}
              />
            )}
          />
        </>
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    padding: 10,
    marginBottom: 15,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#CCC'
  },
  center: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default AlbumList;