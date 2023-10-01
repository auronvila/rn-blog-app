import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useContext, useState} from 'react';
import {Context} from '../context/BlogContext';
import {styles} from '../styles/styles';

export default function CreateScreen(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);

  return (
    <View>
      <Text style={styles.formTitle}>Enter Title</Text>
      <TextInput style={[styles.title, styles.input]} value={title} onChangeText={(event) => setTitle(event)}/>
      <Text style={styles.formTitle}>Enter Content</Text>
      <TextInput style={[styles.title, styles.input]} value={content} onChangeText={(event) => setContent(event)}/>
      <TouchableOpacity onPress={() => {
        addBlogPost(title, content, () => {
          props.navigation.navigate('Index')
        })
      }} style={styles.buttonStyle}><Text
        style={{color: 'white', fontSize: 17}}>Add Blog Post</Text></TouchableOpacity>
    </View>
  )
}