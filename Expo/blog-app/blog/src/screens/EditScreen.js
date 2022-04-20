import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import StoreContext from '../context/StoreContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, editBlogPost } = useContext(StoreContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
