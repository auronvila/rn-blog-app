import React, {useState, useEffect, useContext} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Context} from '../context/BlogContext';
import {styles} from '../styles/styles';

export default function CreateScreen(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost, state} = useContext(Context);

  const editBlogPost = state.find((post) => post.id === props.navigation.getParam('id'));

  useEffect(() => {
    if (editBlogPost) {
      setContent(editBlogPost.content);
      setTitle(editBlogPost.title);
    }
  }, []);

  const isButtonDisabled = !title.trim() || !content.trim();
  const buttonStyle = isButtonDisabled ? [styles.buttonStyle, styles.isButtonDisabled] : styles.buttonStyle;

  return (
    <View>
      {isButtonDisabled && <Text style={styles.errorMessage}>Form cannot be submitted if the inputs are empty</Text>}
      <Text style={styles.formTitle}>Enter Title</Text>
      <TextInput
        style={[styles.title, styles.input]}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.formTitle}>Enter Content</Text>
      <TextInput
        style={[styles.title, styles.input]}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!isButtonDisabled) {
            addBlogPost(title, content, () => {
              props.navigation.navigate('Index');
            });
          }
        }}
        style={buttonStyle}
        disabled={isButtonDisabled}
      >
        <Text style={{color: 'white', fontSize: 17}}>
          {editBlogPost ? 'Edit Blog Post' : 'Add Blog Post'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
