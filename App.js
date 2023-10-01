import IndexScreen from './src/screens/IndexScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  ShowScreen: ShowScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}