import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.cuadro}>
        <View  >
          <Text style={styles.texto}> Navegacion</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cuadro: {
    display: 'flex',
    flexDirection: "row",
    padding: 16,
    margin: 5
  },
  texto: {
    flexDirection: "row",
    maxWidth: 300,
    color: 'black'
  },
});

export default Home;