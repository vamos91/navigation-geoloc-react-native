import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';


const ScreenSignup = ({navigation}) => {
    const [email, SetEmail] = useState('')

    const handleClick = () => {
      navigation.navigate('signin')
    }
  return (
    <View style={styles.container}>
      <Text>ScreenSignup</Text>
      <View style={styles.userInput}>
        <TextInput 
            mode='outlined'
            type="text"
            placeholder='Email'
            onChangeText={(value) => SetEmail(value)}
            value={email}
        />
         <TextInput
            mode='outlined' 
            type="text"
            placeholder='Password'
            
        />
         <TextInput 
            mode='outlined'
            type="text"
            placeholder='Confirm password'
           
        />
      </View>
      <Text>{email}</Text>
        
      <Button 
        title="Signup" 
        onPress={() => handleClick()}
        //onPress={() => navigation.navigate('signin')}
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
    },
    userInput:{
        width: '90%',
        gap: 10
    }
})

export default ScreenSignup