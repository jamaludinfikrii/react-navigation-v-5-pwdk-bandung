import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/HomeScreen/Home'
import ProductDetail from '../screens/HomeScreen/ProductDetail'

const Stack = createStackNavigator()

function HomeProductDetailRoutes (){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{header : () => null}} name='home' component={Home} />
            <Stack.Screen name='detail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default HomeProductDetailRoutes;