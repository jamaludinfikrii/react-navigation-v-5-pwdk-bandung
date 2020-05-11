import React from 'react'
// import { View, Text } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Search from '../screens/SearchScreen/Search'
import Filter from '../screens/SearchScreen/Filter'


const Drawer = createDrawerNavigator()
const SearchRouter = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Search' component={Search} />
            <Drawer.Screen name='Filter' component={Filter} />
        </Drawer.Navigator>
    )
}

export default SearchRouter;
