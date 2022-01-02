import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ page, initialValues, onSave }) => {
  const isEditPage = page === 'Edit';
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{isEditPage ? 'Edit' : 'Enter'} Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(val) => setTitle(val)} />
      <Text style={styles.label}>{isEditPage ? 'Edit' : 'Enter'} Content</Text>
      <TextInput
        style={[styles.input, styles.content]}
        multiline
        numberOfLines={10}
        value={content}
        onChangeText={(val) => setContent(val)}
      />
      <Button
        title="Save Post"
        onPress={() => {
          onSave(title, content);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
  },
  input: {
    fontSize: 18,
    borderColor: '#888',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  content: {
    height: 100,
  },
});

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default BlogPostForm;
