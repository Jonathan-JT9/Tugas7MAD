import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Exercise6 = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSignIn = () => {
    setTitle(`Selamat Datang ${email}`);
    console.log({name, username, email, address, phone});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Title text="Name" />
      <TextInput
        placeholder="Masukan Nama Lengkap anda"
        onChangeText={e => setName(e)}
      />

      <Title text="Username" />
      <TextInput
        placeholder="Masukan password anda"
        onChangeText={e => setUsername(e)}
      />

      <Title text="Email" />
      <TextInput
        placeholder="Masukan Email anda"
        onChangeText={e => setEmail(e)}
      />

      <Title text="Address" />
      <TextInput
        placeholder="Masukan Alamat anda"
        onChangeText={e => setAddress(e)}
      />

      <Title text="Phone Number" />
      <TextInput
        placeholder="Masukan Nomor Telepon anda"
        keyboardType="numeric"
        onChangeText={e => {
          const onlyNumbers = e.replace(/[^0-9]/g, '');
          setPhone(onlyNumbers);
        }}
        value={phone}
      />

      <Button text="Register" onPress={onSignIn} />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
