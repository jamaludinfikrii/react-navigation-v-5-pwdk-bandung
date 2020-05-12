import React, { useState } from 'react'
import { View, Text, Button, TextInput, Alert, AsyncStorage } from 'react-native'
import Axios from 'axios'
import {saveDataToUserReducer} from './../../redux/actions/userActions'
import { connect } from 'react-redux'

const Login = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onLoginPress = () => {
    if(email && password){
      Axios.post('http://192.168.1.104:4000/auth/login',{email,password})
      .then((res) => {
        console.log(res.data)
        if(res.data.error){
          return Alert.alert('Error' , res.data.message)
        }else{
          AsyncStorage.setItem('dataUser',res.data.data,(err => {
            if(err) console.log(err)
            props.saveDataToUserReducer(res.data.data) // {email ;" " , id : , role : }

          }))
          // simpan data di persistance storage, AsynchStorage,
          // Simpan data User di global State
               // karena biar bisa diakses di semua screen
               // Biar bisa redirect ke main menu
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }else{
      return Alert.alert("Error","All Form Must be filled")
    }
  }
  

  return (
    <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
      <Text>Ini Page Login</Text>
      <TextInput placeholder='email' onChangeText={(text) => setEmail(text)} value={email} />
      <TextInput placeholder='password' onChangeText={(text) => setPassword(text)} value={password} />
      <Button title='login' onPress={onLoginPress} />
      <Button 
        title='Belum Punya Akun? Daftar'
        onPress={() => props.navigation.navigate('Register')}
      />
    </View>
  )
}

export default connect(null,{saveDataToUserReducer})(Login);
