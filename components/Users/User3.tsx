// components/Users/User2.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const User3 = () => (
  <View style={styles.card}>
    <Image source={{ uri: 'https://reqres.in/img/faces/3-image.jpg' }} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.name}>Emma Wong</Text>
      <Text style={styles.email}>emma.wong@reqres.in</Text>
    </View>
  </View>
);

export default User3;

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, marginBottom: 12, backgroundColor: '#fff', borderRadius: 10, elevation: 2 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  info: { marginLeft: 16 },
  name: { fontWeight: 'bold', fontSize: 16 },
  email: { color: '#555' },
});
