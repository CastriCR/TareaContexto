import axios from 'axios';
import React, { createContext, useContext, useMemo, useState } from 'react';
import IPhoto from '../models/IPhoto';
import { useAlbumes } from './album-context';

export default interface DetailContextProps {
  photos: IPhoto[];
  setPhotoDetail: (fotos: IPhoto[]) => void;
  fetchPhotoContext: () => Promise<void>;
  setSelectedAlbum: (album: number | null) => void;
}

const PhotoContext = createContext<DetailContextProps>({
  photos: [],
  setPhotoDetail: () => { },
  fetchPhotoContext: () => Promise.resolve(),
  setSelectedAlbum: () => { },

});

export const PhotoProvider: React.FC = ({ children }) => {
  const [photos, setPhotoDetail] = useState<IPhoto[]>([]);
  const { selectedAlbum, setSelectedAlbum } = useAlbumes();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const fetchPhotoContext = async () => {
    let idAlbum: number | null;
    idAlbum = (selectedAlbum == null) ? 1 : selectedAlbum;
    try {
      const photoData = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?albumId=' + idAlbum,
      );
      setPhotoDetail(photoData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(() => {
    return {
      photos,
      setPhotoDetail,
      fetchPhotoContext,
      selectedPhoto,
      setSelectedPhoto,
      selectedAlbum,
      setSelectedAlbum
    };
  }, [photos,
    setPhotoDetail,
    fetchPhotoContext,
    selectedPhoto,
    setSelectedPhoto,
    selectedAlbum,
    setSelectedAlbum]);

  return <PhotoContext.Provider value={val}>{children}</PhotoContext.Provider>;
};
export const usePhotos = () => useContext(PhotoContext);
