import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditPost = ({ navigation, route }) => {
  const { state, editPost } = useContext(Context);
  const { id } = route.params;
  const getPost = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      page="Edit"
      initialValues={{ title: getPost.title, content: getPost.content }}
      onSave={(title, content) => editPost(id, title, content, () => navigation.pop())}
    />
  );
};

export default EditPost;
