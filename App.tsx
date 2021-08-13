import React from 'react';
import { AlbumProvider } from './src/contexts/album-context';
import { PhotoProvider } from './src/contexts/detail-context';
import Menu from './src/navigators/Menu';

const App = () => {

  return (
    <AlbumProvider>
      <PhotoProvider>
        <Menu />
      </PhotoProvider>
    </AlbumProvider>
  );
};

export default App;