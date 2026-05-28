import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBarView from '../Components/atoms/SearchBar/SearchBarView'
import RestaurantList from '../Components/molecules/Restaurants/RestaurantList'
import Header from '../Components/molecules/Header/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useCartStore } from '../Stores/useCartStore'
import CartDropdown from '../Components/molecules/CartDropdown/CartDropdown'

export default function HomeScreen() {

  const { cart } = useCartStore()
  return (
    <View style={{flex : 1}}>
    
      <RestaurantList />
      { 
          (cart.length > 0) &&
            <CartDropdown 
              totalItemCount={
                cart.reduce(
                  (acc,curr) => acc + (curr.numberOfItem ?? 0),
                  0, 
                )
              }
            />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer : {

  }
})