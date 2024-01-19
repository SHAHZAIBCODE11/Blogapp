import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';

const PostBlogScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState('');

  const handlePostBlog = () => {
    // Basic validations
    if (!username.trim() || !content.trim()) {
      setError('Username and Content are required.');
      return;
    }

    if (content.trim().length < 1000) {
      setError('Content must be at least 500 characters long.');
      return;
    }

    // Clear error if validations pass
    setError('');

    // ... (unchanged logic for posting a blog)

    // Show confirmation modal
    setIsModalVisible(true);
  };

  const handleViewLatestNews = () => {
    // Navigate to the NewsScreen
    navigation.navigate('NewsScreen');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/6c/75/13/6c7513fa1bde7c07552f2664772d2187.jpg' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Post a Blog</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.textArea}
          placeholder="Content (Minimum 500 words)"
          multiline
          numberOfLines={10}
          value={content}
          onChangeText={(text) => setContent(text)}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.postBlogButton} onPress={handlePostBlog}>
          <Text style={styles.postBlogButtonText}>Post Blog</Text>
        </TouchableOpacity>

        {/* Button to view latest news */}
        <TouchableOpacity style={styles.viewNewsButton} onPress={handleViewLatestNews}>
          <Text style={styles.viewNewsButtonText}>View Latest News</Text>
        </TouchableOpacity>
      </View>

      {/* Modal to show confirmation message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Blog Posted!</Text>
        </View>
      </Modal>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  textArea: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    color: 'black',
  },
  postBlogButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  postBlogButtonText: {
    fontSize: 18,
    color: 'white',
  },
  viewNewsButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  viewNewsButtonText: {
    fontSize: 18,
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PostBlogScreen;
