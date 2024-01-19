// WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SignUp');
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/navy-blue-geometrical-patterned-mobile-wallpaper-vector_53876-167963.jpg?w=360&t=st=1705643354~exp=1705643954~hmac=d9f3d4c880b27295fc6fdf7a2d332767cd06f5f8fdaff37da43510aac3552978' }}
      style={styles.container}
    >
      <Text style={styles.title}> Blog It!!!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Set a background color
  },
  title: {
    fontSize: 50, // Increase font size
    marginBottom: 20,
    color: 'white', // Change text color
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowColor: '#7f8c8d', // Add text shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1, // Add letter spacing
    textDecorationLine: 'underline', // Add underline
    textAlign: 'center', // Center-align text
    backgroundColor: 'rgba(52, 73, 94, 0.5)', // Add a semi-transparent background
    borderRadius: 10, // Add border radius
    padding: 15, // Add padding
  },
});

export default WelcomeScreen;
