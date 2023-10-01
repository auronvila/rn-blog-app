import {Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'
import {styles} from '../styles/styles';

export default function ShowScreen(props) {
  const {state} = useContext(Context)

  const blogPost = state.find(post => post.id === props.navigation.getParam('id'))
  return (
    <View style={styles.container}>
      <Text style={styles.showTitle}>Your blog Title</Text>
      <Text style={[styles.showTitle,styles.showTitle2]}>{blogPost.title}</Text>
      <Text style={styles.showTitle}>Your Blog Content</Text>
      <Text style={[styles.showTitle,styles.showTitle2]}>{blogPost.content}</Text>
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