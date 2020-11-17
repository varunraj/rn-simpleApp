import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsScreen1 from './src/screens/ComponentsScreen1';
import ListScreen from './src/screens/ListScreen'
import ListScreen1 from './src/screens/ListScreen1'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import CounterScreen1 from './src/screens/CounterWithReducer'
import MultipleCounters from './src/screens/MultipleCounters'
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareScreen'
import SquareScreen1 from './src/screens/SquareScreenWithReducer'
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Components1: ComponentsScreen1,
    List:ListScreen,
    List1:ListScreen1,
    Image:ImageScreen,
    Counter: CounterScreen,
    Counter1: CounterScreen1,
    MultipleCounters: MultipleCounters,
    Color:ColorScreen,
    Square:SquareScreen,
    Square1:SquareScreen1,
    Text:TextScreen,
    Box:BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
