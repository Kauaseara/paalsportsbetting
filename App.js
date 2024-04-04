import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Root from './app/StackNavigator';


const App = () =>  {
  return (
    <NavigationContainer>
     <Root />
    </NavigationContainer>
  );
}

export default App;

