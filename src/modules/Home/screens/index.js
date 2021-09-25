import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './index.style';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

export default Home;
