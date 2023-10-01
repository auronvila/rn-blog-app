import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {styles} from '../styles/styles';

export default function IndexScreen(props) {
  const {state, deleteBlogPost} = useContext(Context)


  return (
    <View>
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
