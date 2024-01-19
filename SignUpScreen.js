// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = async () => {
    // Clear previous errors
    setUsernameError('');
    setEmailError('');
    setPasswordError('');

    // Validation logic
    if (!username.trim()) {
      setUsernameError('Username is required.');
      return;
    }

    if (!/^[a-zA-Z]+$/.test(username)) {
      setUsernameError('Username should contain only characters.');
      return;
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address.');
      return;
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      return;
    }

    if (!/\d+/.test(password)) {
      setPasswordError('Password must include numeric values.');
      return;
    }

    // If validation passes, you can proceed with signup logic
    // Save user data to AsyncStorage
    try {
      const userData = {
        username: username,
        email: email,
        // You may want to hash the password before saving it
        password: password,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
      // Handle error saving data
      return;
    }

    // Navigate to the Login screen after signing up
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/navy-blue-geometrical-patterned-mobile-wallpaper-vector_53876-167963.jpg?w=360&t=st=1705643354~exp=1705643954~hmac=d9f3d4c880b27295fc6fdf7a2d332767cd06f5f8fdaff37da43510aac3552978' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ffffff" // Set placeholder text color to white
          onChangeText={(text) => setUsername(text)}
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff" // Set placeholder text color to white
          onChangeText={(text) => setEmail(text)}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffffff" // Set placeholder text color to white
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.loginLinkText}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
            Login
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // You can add a background image if desired
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textShadowColor: '#2c3e50', // Add text shadow for emphasis
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'rgba(52, 73, 94, 0.5)', // Add a semi-transparent background
  },
  signUpButton: {
    backgroundColor: '#3498db',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#2980b9', // Add shadow to the button
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  loginLinkText: {
    color: '#ffffff',
    textDecorationLine: 'underline', // Add underline to the link text
  },
  loginLink: {
    color: '#e74c3c', // Red color for the link
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#e74c3c',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
