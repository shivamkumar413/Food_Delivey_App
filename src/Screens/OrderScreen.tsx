import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useOrderStore } from '../Stores/useOrderStore'

export default function OrderScreen() {

  // const { foodOrders } = useOrderStore()

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Order Screen</Text>
      {/* <FlatList 
        data={foodOrders}
        keyExtractor={(item)=>item.itemName}
        renderItem={({item})=>{
          return(
          <View>

            <Text>{item.itemName} </Text>
          </View>
          )
        }}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({})