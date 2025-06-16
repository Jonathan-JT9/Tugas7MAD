import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.boxBlack} />
        <View style={styles.boxYellow} />
        <View style={styles.boxBlack} />
        <View style={styles.boxRed} />
      </View>

      {/* Middle Content */}
      <View style={styles.middleContent}>
        <Image source={require('./assets/ukl.png')} style={styles.logo} />
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.boxBlack} />
        <View style={styles.boxYellow} />
        <View style={styles.boxBlack} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topBar: {
    backgroundColor: 'red',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },

  bottomBar: {
    backgroundColor: 'blue',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  boxBlack: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    marginRight: 20,
  },

  boxYellow: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    marginRight: 20,
  },

  boxRed: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    marginRight: 10,
  },

  middleContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  logo: {
    width: 400,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
});
