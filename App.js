import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginRegisterRoutes from './src/routers/LoginRegisterRoutes'
import MainMenuApp from './src/routers/MainMenuApp'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import UserReducer from './src/redux/reducers/userReducer'

const userStore = createStore(UserReducer)

const App = () => {
  const user = 'fikri'


  return (
    <Provider store={userStore}>
      <NavigationContainer>
        {user
        ?
        <MainMenuApp />
        :
        <LoginRegisterRoutes/>
        }
      </NavigationContainer>
    </Provider>
  )
}

export default App
