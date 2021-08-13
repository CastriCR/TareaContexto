import axios from 'axios';
import React, { createContext, useContext, useMemo, useState } from 'react';
import IAlbum from '../models/IAlbum';

export default interface AlbumContextProps {
  albums: IAlbum[];
  setAlbum: (albums: IAlbum[]) => void;
  selectedAlbum: number | null;
  setSelectedAlbum: (album: number | null) => void;
  fetchAlbumContext: () => Promise<void>;
}

const AlbumContext = createContext<AlbumContextProps>({
  albums: [],
  setAlbum: () => { },
  selectedAlbum: null,
  setSelectedAlbum: () => { },
  fetchAlbumContext: () => Promise.resolve(),
});

export const AlbumProvider: React.FC = ({ children }) => {

  const [albums, setAlbum] = useState<IAlbum[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const fetchAlbumContext = async () => {
    try {
      const albumes = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      setAlbum(albumes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(() => {
    return {
      albums,
      setAlbum,
      selectedAlbum,
      setSelectedAlbum,
      fetchAlbumContext
    };
  }, [albums,
    setAlbum,
    selectedAlbum,
    setSelectedAlbum,
    fetchAlbumContext]);

  return <AlbumContext.Provider value={val}>{children}</AlbumContext.Provider>;
};
export const useAlbumes = () => useContext(AlbumContext);