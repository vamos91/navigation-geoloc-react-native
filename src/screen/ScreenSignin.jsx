import { View, Text, Button, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

const ScreenSignin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ScreenSignin</Text>

      <AntDesign name="user" size={24} color="black" />
      <Button 
        title="Signin" 
        onPress={() => navigation.navigate('home')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})

export default ScreenSignin