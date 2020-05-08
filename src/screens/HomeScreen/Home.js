import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { data } from './data'
import { SafeAreaView } from 'react-native-safe-area-context'


const Home = (props) => {
  return (
    <SafeAreaView>
    <FlatList
      keyExtractor = {(item) => String(item.id)}
      data={data}
      renderItem={({item}) => {
        return(
          <View style={{borderWidth: 1,borderColor : 'grey', padding : 10}}>
            <Text style={{fontWeight: "bold",marginBottom : 20}} 
            onPress={() => props.navigation.navigate('detail',{name : item.nama_produk})}>
              {item.nama_produk}
            </Text>
            <Text style={{color : "orange"}}>
              Rp . {item.harga}
            </Text>
            <Text>
              {item.kategori}
            </Text>
          </View>
        )
      }}
    />
    </SafeAreaView>
  )
}

export default Home
