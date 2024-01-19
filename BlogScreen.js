import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BlogScreen = () => {
  const navigation = useNavigation();

  const [blogs, setBlogs] = useState([
    {
      id: '1',
      author: 'Ali Rehman',
      title: 'Music: A Universal Language Explored',
      content: `
        <p>In the vast expanse of creative expression, music emerges as the universal language that transcends boundaries and resonates with the depths of the human soul. Leading the charge in navigating the diverse world of melodies is Pitchfork. Renowned for its discerning taste, Pitchfork dissects albums with a critical lens, guiding audiences through the intricacies of various genres. From indie to mainstream, Pitchfork provides a comprehensive view of the musical landscape.</p>
        <p>Complementing this, Stereogum stands as a champion of the indie scene. With a commitment to amplifying emerging artists, Stereogum offers a platform for new voices to reach a broader audience. Through reviews, interviews, and features, Stereogum contributes to the ever-evolving narrative of contemporary music, reflecting the dynamism of this art form.</p>
      `,
      likes: 0,
      isLiked: false,
    },
    {
      id: '2',
      author: 'Jane Smith',
      title: 'Beauty: Beyond Skin-Deep',
      content: `
        <p>Amidst sounds, stories, and visuals, the pursuit of beauty emerges as a common thread, explored in blogs like Into The Gloss. Going beyond the superficial, Into The Gloss dives into the stories behind makeup and skincare routines. It explores beauty as a form of self-expression and empowerment, acknowledging that the quest for beauty is as diverse as the individuals who seek it.</p>
        <p>Complementary to this, Temptalia becomes a haven for beauty enthusiasts, dissecting makeup products with a keen eye for detail. Guiding consumers through the ever-evolving landscape of cosmetics, Temptalia ensures that beauty is not just a product but a canvas upon which individuals paint their identity.

        In the world of beauty blogging, these platforms celebrate the diverse ways in which beauty intertwines with personal expression, providing a space for exploration and celebration of individuality.</p>
      `,
      likes: 0,
      isLiked: false,
    },
    {
        id: '3',
        author: 'Amna ali',
        title: 'Art: Visual Language and Cultural Reflections',
        content: `
          <p>Art, a visual language that speaks volumes without uttering a word, takes center stage in platforms like Hyperallergic. Merging criticism with news, Hyperallergic offers a lens through which to view the evolving art world. From traditional paintings to avant-garde installations, Hyperallergic captures the essence of contemporary art, fostering a deeper appreciation for the ways in which artists challenge societal norms..</p>
          <p>Complementing this, Juxtapoz focuses on contemporary and street art, embracing the unconventional and blurring the lines between high and low art forms. It becomes a platform where the avant-garde meets the mainstream, celebrating the diversity of artistic expressions.

          These blogs become virtual galleries, bringing art to our screens and inspiring us to see the beauty in the seemingly mundane, fostering a deeper connection with the cultural reflections embedded in artistic creations.</p>
        `,
        likes: 0,
        isLiked: false,
      },
      
    
  ]);

  const navigateToPostBlog = () => {
    navigation.navigate('PostBlog');
  };

  const handleLike = (blogId) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId
          ? { ...blog, likes: blog.isLiked ? blog.likes - 1 : blog.likes + 1, isLiked: !blog.isLiked }
          : blog
      )
    );
  };



  const renderBlogItem = ({ item }) => (
    <TouchableOpacity style={styles.blogItem}>
      <View style={styles.headerContainer}>
        <Icon name="user" size={20} color="#3498db" style={styles.icon} />
        <Text style={styles.blogAuthor}>{item.author}</Text>
      </View>
      <Text style={styles.blogTitle}>{item.title}</Text>
      <HTML source={{ html: item.content }} />
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={() => handleLike(item.id)}>
          <Icon
            name="heart"
            size={20}
            color={item.isLiked ? 'red' : 'white'}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
        <Text style={styles.likeText}>{item.likes} Likes</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/navy-blue-geometrical-patterned-mobile-wallpaper-vector_53876-167963.jpg?w=360&t=st=1705643354~exp=1705643954~hmac=d9f3d4c880b27295fc6fdf7a2d332767cd06f5f8fdaff37da43510aac3552978' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Blogs</Text>

        {/* Post Blog Button */}
        <TouchableOpacity style={styles.postBlogButton} onPress={navigateToPostBlog}>
          <Text style={styles.postBlogButtonText}>Post Blog</Text>
        </TouchableOpacity>

        <FlatList
          data={blogs}
          keyExtractor={(item) => item.id}
          renderItem={renderBlogItem}
        />
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
    color: 'white',
  },
  blogItem: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  blogAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  likeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  likeIcon: {
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
  },
  likeText: {
    fontSize: 14,
    color: '#2c3e50',
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
});

export default BlogScreen;
