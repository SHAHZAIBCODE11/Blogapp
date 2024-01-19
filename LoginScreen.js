// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    // Fetch user data from AsyncStorage
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (!userDataString) {
        setLoginError('User does not exist. Please sign up.');
        return;
      }

      const userData = JSON.parse(userDataString);

      // Check if the entered username and password match the stored data
      if (userData.username === username && userData.password === password) {
        // Navigate to BlogScreen if login is successful
        navigation.navigate('BlogScreen');
      } else {
        setLoginError('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error fetching data
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/navy-blue-geometrical-patterned-mobile-wallpaper-vector_53876-167963.jpg?w=360&t=st=1705643354~exp=1705643954~hmac=d9f3d4c880b27295fc6fdf7a2d332767cd06f5f8fdaff37da43510aac3552978' }} // Replace with your image URI
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ecf0f1" // Set placeholder text color to white
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ecf0f1" // Set placeholder text color to white
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ecf0f1', // Text color
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ecf0f1', // Border color
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: '#ecf0f1', // Text color
  },
  loginButton: {
    backgroundColor: '#3498db', // Blue color
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Text color
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
