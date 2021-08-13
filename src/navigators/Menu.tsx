import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeMain from '../screens/Home';
import Home from '../components/organisms/Home/Index';

const Menu = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="AlbumList" component={Home} />
        <Screen name="Home" component={HomeMain} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Menu;