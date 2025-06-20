import React from 'react';
import {StyleSheet, View} from 'react-native';

const BalanceCard = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 24,
  },
});
