import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import UserReducer from './src/redux/reducers/userReducer'
import InitialRouter from './src/routers/InitialRouter'

const userStore = createStore(UserReducer)

const App = () => {
  return (
    <Provider store={userStore}>
      < InitialRouter/>
    </Provider>
  )
}



export default App
