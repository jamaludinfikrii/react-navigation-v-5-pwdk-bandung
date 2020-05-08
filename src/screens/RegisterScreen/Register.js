import React from 'react'
import { View, Text, Button } from 'react-native'

const Register = (props) => {
  return (
    <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
      <Text>Ini Page Register</Text>
      <Button 
        title='Sudah Punya Akun? Login'
        onPress ={() => props.navigation.navigate('Login')}
      />
    </View>
  )
}

export default Register
