import {Button, FlatList, Text, View} from 'react-native';
import {useContext} from 'react';
import BlogContext from '../context/BlogContext';

export default function IndexScreen() {

  const {data,addBlogPost} = useContext(BlogContext)

  return (
    <View>
      <Button onPress={addBlogPost} title={'Add Post'}/>
      <FlatList data={data} keyExtractor={(blogPost) => blogPost.title } renderItem={({item}) => {
        return <Text>{item.title}</Text>
      }}/>
    </View>
  )
}