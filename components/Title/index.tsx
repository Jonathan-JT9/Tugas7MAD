import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Button = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
});
