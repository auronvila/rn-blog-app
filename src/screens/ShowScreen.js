import {Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'

export default function ShowScreen(props) {
  const {state} = useContext(Context)

  const blogPost = state.find(post => post.id === props.navigation.getParam('id'))
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}
ShowScreen.navigationOptions = (props) => {
  return {
    headerRight: () => (
      <TouchableOpacity style={{marginRight: 15}}
                        onPress={() => props.navigation.navigate('Create', {id: props.navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35}/>
      </TouchableOpacity>
    ),
  };
}