import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenSignup from './src/screen/ScreenSignup';
import ScreenHome from './src/screen/ScreenHome';
import ScreenSignin from './src/screen/ScreenSignin';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="signup" component={ScreenSignup}  />
            <Stack.Screen name="signin" component={ScreenSignin}  />
            <Stack.Screen name="home" component={ScreenHome}  />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App