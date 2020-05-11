import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Account from '../screens/AccountScreen/Account'
import EditAccount from '../screens/AccountScreen/EditAccount'
import MyContact from '../screens/AccountScreen/MyContact'

const TopTab = createMaterialTopTabNavigator()
const AccountRouters = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='My Account' component={Account} />
            <TopTab.Screen name='Edit Account' component={EditAccount}/>
            <TopTab.Screen name='My Contact' component={MyContact}/>
        </TopTab.Navigator>
    )
}

export default AccountRouters
