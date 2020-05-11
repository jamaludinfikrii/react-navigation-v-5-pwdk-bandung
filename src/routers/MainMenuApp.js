import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Search from '../screens/SearchScreen/Search'
import Account from '../screens/AccountScreen/Account'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeProductDetailRoutes from './HomeProductdetail'
import Home from '../screens/HomeScreen/Home'

const Tab = createBottomTabNavigator()

function MainMenuApp(){
    return(
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <AntDesign name='home' size={props.size} color={props.color} />
                    )
                }
            }} name='Home' component={HomeProductDetailRoutes} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Account' component={Account} />
        </Tab.Navigator>
    )
}


export default MainMenuApp
