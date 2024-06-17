import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Image
          source={{
            uri: 'https://pipedream.com/s.v0/app_mvNhzR/logo/orig',
          }}
          style={styles.image}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Ingrese el pokemon..."
        />
        <Button
          title="Buscar Pokemon"
          onPress={() => {
            // Lógica de búsqueda de pokemon
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
});