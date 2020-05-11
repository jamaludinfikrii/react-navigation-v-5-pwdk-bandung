import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Search from '../screens/SearchScreen/Search'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeProductDetailRoutes from './HomeProductdetail'
import AccountRouters from './AccountRouters'
import SearchRouter from './SearchRouter'

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
            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <AntDesign name='search1' size={props.size} color={props.color} />
                    )
                }
            }} name='Search' component={SearchRouter} />
            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <AntDesign name='user' size={props.size} color={props.color} />
                    )
                }
            }} name='Account' component={AccountRouters} />
        </Tab.Navigator>
    )
}


export default MainMenuApp
