import {FlatList, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useContext, useEffect} from 'react';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {styles} from '../styles/styles';

export default function IndexScreen(props) {
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context)
  useEffect(() => {
    getBlogPosts()
    const listener = props.navigation.addListener('didFocus', ()=> {
      getBlogPosts()
    })

    return () => {
      listener.remove();
    }
  }, []);

  return (
    <View>
      {state.length === 0 &&
        <Text style={{alignSelf: 'center', fontWeight: 'bold', marginTop:15,}}>Please press the plus icon to add a blog post</Text>}
      <FlatList data={state} keyExtractor={(blogPost) => blogPost.title} renderItem={({item}) => {
        return <TouchableOpacity onPress={() => props.navigation.navigate('Show', {id: item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather color={'red'} style={styles.icon} name={'trash'}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      }}/>
      <StatusBar barStyle={'default'}/>
    </View>
  )
}
IndexScreen.navigationOptions = (props) => {
  return {
    headerRight: () => (
      <TouchableOpacity style={{marginRight: 15}} onPress={() => props.navigation.navigate('Create')}>
        <Feather name="plus" size={30}/>
      </TouchableOpacity>
    ),
  }
}
