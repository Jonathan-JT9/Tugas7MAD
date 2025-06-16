import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const handleSubscribe = () => {
    Alert.alert('Subscribed!', 'Thank you for subscribing!');
  };

  return (
    <ScrollView style={styles.scroll}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('./assets/jonathan.jpg')}
        />
        <Text style={styles.name}>Jonathan Given Tambuku</Text>
        <Text style={styles.title}>Software Developer</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text>Email: nathantambuku13@gmail.com</Text>
        <Text>Phone: +62 895-3401-09524</Text>
        <Text>Location: Manado, Indonesia</Text>
      </View>

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text>
          A passionate and detail-oriented developer with a strong foundation in
          React Native, JavaScript, and mobile UI design.
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text>Universitas Klabat</Text>
        <Text>Bachelor of Computer Science, 2021 - 2025</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>- React Native</Text>
        <Text>- Javascript</Text>
        <Text>- UI/UX Design</Text>
        <Text>- Git & GitHub</Text>
      </View>

      {/* Portfolio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Portfolio</Text>
        <Image
          style={styles.img}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.img}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>

      {/* Contact Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Me</Text>
        <TextInput style={styles.input} placeholder="Enter your message here" />
      </View>

      {/* Subscribe Button */}
      <View style={styles.subscribeContainer}>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={handleSubscribe}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },
  name: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginTop: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  img: {
    height: 100,
    width: 100,
    marginVertical: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    fontSize: 16,
    padding: 20,
    marginTop: 10,
  },
  subscribeContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  subscribeButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  subscribeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
