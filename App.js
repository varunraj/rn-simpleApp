import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsScreen1 from './src/screens/ComponentsScreen1';
import ListScreen from './src/screens/ListScreen'
import ListScreen1 from './src/screens/ListScreen1'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Components1: ComponentsScreen1,
    List:ListScreen,
    List1:ListScreen1
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
