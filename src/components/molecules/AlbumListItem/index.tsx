import styled from '@emotion/native';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useAlbumes } from '../../../contexts/album-context';
import IAlbum from '../../../models/IAlbum';

export interface AlbumListItemProps {
  Album: IAlbum;
  index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({ Album, index }) => {
  const { setSelectedAlbum } = useAlbumes();
  const onPress = () => {
    setSelectedAlbum(index);
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}. {Album.title}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
    background-color: #F1F1F1;
    border-radius: 32px;
    padding: 8px 12px;
    margin: 4px 0;
`;
export default AlbumListItem;