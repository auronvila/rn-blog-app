import {Text, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/BlogContext';

export default function ShowScreen(props) {
  const {state} = useContext(Context)

  const blogPost = state.find(post => post.id === props.navigation.getParam('id'))
  return (
    <View>
      <Text>showScrenn - {blogPost.title}</Text>
    </View>
  )
}