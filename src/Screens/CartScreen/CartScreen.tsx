import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCartStore } from '../../Stores/useCartStore'

export default function CartScreen() {

  const { cart } = useCartStore()

  return (
    <View>
      <Text>CartScreen</Text>
      <FlatList 
        data={cart}
        renderItem={({item})=>(
          <View>
            <Text>{item.itemName} : {item.numberOfItem}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})