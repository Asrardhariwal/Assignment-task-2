import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Data} from './apidata/Data';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Data />
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
