import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginRegisterRoutes from './src/routers/LoginRegisterRoutes'
import MainMenuApp from './src/routers/MainMenuApp'

const App = () => {
  const user = 'fikri'


  return (
    <NavigationContainer>
      {user
      ?
      <MainMenuApp />
      :
      <LoginRegisterRoutes/>
      }
    </NavigationContainer>
  )
}

export default App
