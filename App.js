import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogList from './src/screens/BlogList';
import CreatePost from './src/screens/CreatePost';
import { Provider } from './src/context/BlogContext';
import BlogDetail from './src/screens/BlogDetail';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import EditPost from './src/screens/EditPost';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BlogList}
            options={{
              title: 'Home',
            }}
          />
          <Stack.Screen name="Create" component={CreatePost} options={{ title: 'Create Post' }} />
          <Stack.Screen
            name="Blog Detail"
            component={BlogDetail}
            // options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="Edit"
            component={EditPost}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
