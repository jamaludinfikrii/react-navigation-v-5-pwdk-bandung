import React from 'react'
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
import Register from '../screens/RegisterScreen/Register'
import Login from '../screens/LoginScreen/Login'


const Stack = createStackNavigator()

function LoginRegisterRoutes(){
    return(
        <Stack.Navigator screenOptions={{
            header : () => null,
            cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS
        }} initialRouteName='Login'>
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default LoginRegisterRoutes;