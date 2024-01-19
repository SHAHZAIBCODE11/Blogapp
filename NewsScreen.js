// NewsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

const NEWS_API_KEY = 'f0cd08eb4d34419ebf9bc18ee57e88cb'; // Add your news API key here

const NewsScreen = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from your API
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
      );
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/navy-blue-geometrical-patterned-mobile-wallpaper-vector_53876-167963.jpg?w=360&t=st=1705643354~exp=1705643954~hmac=d9f3d4c880b27295fc6fdf7a2d332767cd06f5f8fdaff37da43510aac3552978' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Latest News</Text>

        {newsData.length > 0 ? (
          <FlatList
            data={newsData}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.newsItem}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.loadingText}>Loading news...</Text>
        )}
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  newsItem: {
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  newsDescription: {
    color: 'white',
  },
  loadingText: {
    color: 'white',
  },
});

export default NewsScreen;
