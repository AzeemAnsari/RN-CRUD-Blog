import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const BlogDetail = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const { id, title } = route.params;

  const getPost = state.find((post) => post.id === id);

  //   console.log(getPost);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { id, title })}>
            <Feather name="edit-2" size={30} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <View>
      <Text style={styles.title}>{getPost.title}</Text>
      <Text style={styles.content}>{getPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default BlogDetail;
