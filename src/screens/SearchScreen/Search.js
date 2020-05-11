import React from 'react'
import { View, Text, Button } from 'react-native'
import {connect} from 'react-redux'

const Search = (props) => {
  return (
    <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
      <Text>Ini Page Search</Text>
      <Button 
        title='Open Drawer' 
        onPress={() => props.navigation.openDrawer()}
      />
      <View>
        <Text>
          {props.data.user}
        </Text>
        <Text>
          {props.data.email}
        </Text>
      </View>
    </View>
  )
}
const mapStateToProps = (state) => {
  return{
    data : state
  }
}


export default connect(mapStateToProps)(Search);