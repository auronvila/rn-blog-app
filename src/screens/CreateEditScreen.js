import React, {useState, useEffect, useContext} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Context} from '../context/BlogContext';
import {styles} from '../styles/styles';

export default function CreateEditScreen(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost, state, editBlogPost} = useContext(Context);
  const editPost = state.find((post) => post.id === props.navigation.getParam('id'));

  useEffect(() => {
    if (editPost) {
      setContent(editPost.content);
      setTitle(editPost.title);
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
          if (editPost && !isButtonDisabled) {
            editBlogPost(title, content, editPost.id, () => {
              // pop sends the user back 1 screen we can think it functions as a navigate function.
              props.navigation.pop();
            })
            return
          }
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
          {editPost ? 'Edit Blog Post' : 'Add Blog Post'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
