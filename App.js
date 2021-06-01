import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CarItem from './components/CarItem/Index';
import CarList  from './components/CarsList/Index';
import Haeder from './components/Header/Index';
export default function App() {
  return (
    <View style={styles.container}>
      <Haeder/>
      <CarList/>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
