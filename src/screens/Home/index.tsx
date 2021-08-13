import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAlbumes } from '../../contexts/album-context';
import AlbumList from '../../components/organisms/AlbumList';
import PhotoDetails from '../../components/organisms/PhotoDetail';

const HomeMain: React.FC = () => {
  const { selectedAlbum, setSelectedAlbum } = useAlbumes();
  useEffect(() => {
    setSelectedAlbum(null);
  }, []);

  return <View>{selectedAlbum ?
    <PhotoDetails /> : <AlbumList />}</View>;
};

export default HomeMain;
