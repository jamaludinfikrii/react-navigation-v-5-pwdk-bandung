import React from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'

const Filter = (props) => {
    
  return (
    <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
      <Text>Ini Page Filter</Text>
      <Text>{props.data.user}</Text>
    </View>
  )
}
const mapStateToProps = (state) => {
    return{
      data : state
    }
}

export default connect(mapStateToProps)(Filter)