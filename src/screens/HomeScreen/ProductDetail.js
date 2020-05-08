import React from 'react'
import { View, Text } from 'react-native'


function ProductDetail (props){
    return(
        <View style={{justifyContent: "center",flex:1,alignItems:'center'}}>
            <Text>
                Product : {props.route.params.name}
            </Text>
        </View>
    )
}

export default ProductDetail;