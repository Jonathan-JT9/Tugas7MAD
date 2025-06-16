import React from 'react';
import {View, StyleSheet} from 'react-native';

import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title'; 

const Login = () => {
  return (
    <View style={styles.container}>
      <Title>Welcome</Title>

      <TextInput placeholder="Masukan email anda" />
      <TextInput placeholder="Masukan password anda" />

      <Button text="Sign In Google" color="red" textColor="white" />
      <Button text="Sign In Facebook" color="blue" textColor="white" />
      <Button text="Sign in Apple" color="black" textColor="white" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
});
