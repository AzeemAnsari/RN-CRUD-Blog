import React, { useContext } from 'react';

import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreatePost = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      page="Create"
      onSave={(title, content) => addBlogPost(title, content, () => navigation.navigate('Home'))}
    />
  );
};

export default CreatePost;
