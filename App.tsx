import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import User1 from './components/Users/User1';
import User2 from './components/Users/User2';
import User3 from './components/Users/User3';
import User4 from './components/Users/User4';
import User5 from './components/Users/User5';
import User6 from './components/Users/User6';
import User7 from './components/Users/User7';
import User8 from './components/Users/User8';
import User9 from './components/Users/User9';
import User10 from './components/Users/User10';
import User11 from './components/Users/User11';
import User12 from './components/Users/User12';

const App = () => (
  <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
    <User1 />
    <User2 />
    <User3 />
    <User4 />
    <User5 />
    <User6 />
    <User7 />
    <User8 />
    <User9 />
    <User10 />
    <User11 />
    <User12 />
  </ScrollView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
});
