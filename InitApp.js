import React, { useState, useEffect } from 'react'
import InitialRouter from './src/routers/InitialRouter'
import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import { AsyncStorage } from 'react-native'
import {saveDataToUserReducer} from './src/redux/actions/userActions'
import {connect} from 'react-redux'


const InitApp = (props) => {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
      getDataUserInStorage()
  }, [])

  const getDataUserInStorage = () => {
    AsyncStorage.getItem('dataUser',(err,result) => {
      if(err) throw err
      if(result){
        console.log(result)
        props.saveDataToUserReducer(JSON.parse(result))
        setLoading(false)
      }else{
          setLoading(false)
      }
    })
  }

  if(loading){
    return (
        <SplashScreen />
    )
  }

  return (
      <InitialRouter/>
  )
}



export default connect(null,{saveDataToUserReducer})(InitApp)
