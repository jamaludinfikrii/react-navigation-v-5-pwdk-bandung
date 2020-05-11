import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import Home from '../screens/HomeScreen/Home'
import ProductDetail from '../screens/HomeScreen/ProductDetail'
import { Text } from 'react-native'
import EditProduct from '../screens/EditProduct/EditProduct'

const Stack = createStackNavigator()

function HomeProductDetailRoutes (){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{header : () => null}} name='home' component={Home} />
            {/* <Stack.Screen name='detail' options={(props) => {
                return{
                    headerTitle : props.route.params.name
                }
            }}  component={ProductDetail} /> */}

            <Stack.Screen name='detail' options={{headerTitle : "Product Detail",
            // headerRight : () => {
            //     // return (
            //     //     <Text onPress={() => props.navigation.navigate('edit') } style={{fontWeight :"500",marginRight : 10}}>
            //     //         Edit
            //     //     </Text>
            //     // )
            // }
            }} component={ProductDetail} />

            <Stack.Screen name='edit' component={EditProduct} />



            
        </Stack.Navigator>
    )
}

export default HomeProductDetailRoutes;