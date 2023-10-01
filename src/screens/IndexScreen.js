import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {styles} from '../styles/styles';

export default function IndexScreen(props) {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context)
  return (
    <View>
      <Button onPress={addBlogPost} title={'Add Post'}/>
      <FlatList data={state} keyExtractor={(blogPost) => blogPost.title} renderItem={({item}) => {
        return <TouchableOpacity onPress={() => props.navigation.navigate('ShowScreen', {id: item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather color={'red'} style={styles.icon} name={'trash'}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      }}/>
    </View>
  )
}