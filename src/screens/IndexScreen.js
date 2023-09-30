import {Button, FlatList, Text, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/BlogContext';

export default function IndexScreen() {

  const {state, addBlogPost} = useContext(Context)

  return (
    <View>
      <Button onPress={addBlogPost} title={'Add Post'}/>
      <FlatList data={state} keyExtractor={(blogPost) => blogPost.title} renderItem={({item}) => {
        return <Text>{item.title}</Text>
      }}/>
    </View>
  )
}