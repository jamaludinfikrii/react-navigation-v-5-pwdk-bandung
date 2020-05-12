import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

class SplashScreen extends Component {
    render() {
        return (
            <View style={{flex : 1,justifyContent: "center",alignItems: "center"}}>
                <Text style={{fontWeight : "500"}}> Latihan .... </Text>
                <ActivityIndicator size="small" color="#00ff00" />
            </View>
        )
    }
}


export default  SplashScreen;