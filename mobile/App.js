import React from 'react';

import {View, StyleSheet} from 'react-native'

import Routes from './src/routes'

export default function App() {
  return (
    <View style={styles.container}>
      <Routes/> 
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    padding:14
  }
})
