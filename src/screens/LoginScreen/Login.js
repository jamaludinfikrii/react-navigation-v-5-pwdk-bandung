import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

const Login = (props) => {


  return (
    <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
      <Text>Ini Page Login</Text>
      <Button 
        title='Belum Punya Akun? Daftar'
        onPress={() => props.navigation.navigate('Register')}
      />
    </View>
  )
}

export default Login
