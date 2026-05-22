import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-screens'
import SearchBarView from '../Components/atoms/SearchBar/SearchBarView'
import RestaurantList from '../Components/molecules/Restaurants/RestaurantList'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchBarView />
      <RestaurantList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})