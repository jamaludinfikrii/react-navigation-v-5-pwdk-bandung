import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import UserReducer from './src/redux/reducers/userReducer'
import InitApp from './InitApp'

const userStore = createStore(UserReducer)

const App = () => {

  return (
    <Provider store={userStore}>
      <InitApp/>
    </Provider>
  )
}



export default App
