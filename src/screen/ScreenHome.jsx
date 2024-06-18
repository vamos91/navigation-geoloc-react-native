import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenPage1 from './ScreenPage1';
import ScreenPage2 from './ScreenPage2';

const Tab = createBottomTabNavigator()

const ScreenHome = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="page1" component={ScreenPage1} />
        <Tab.Screen name="page2" component={ScreenPage2} />
    </Tab.Navigator>

  )
}

export default ScreenHome