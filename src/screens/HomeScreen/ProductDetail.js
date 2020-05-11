import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


function ProductDetail (props){
    return(
        <View style={{justifyContent: "center",flex:1,alignItems:'center'}}>
            <Text>
                Product : {props.route.params.name}
            </Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("edit")}
            >
                <Text>
                    Edit
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetail;