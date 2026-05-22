import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-screens'
import SearchBarView from '../Components/atoms/SearchBar/SearchBarView'

export default function HomeScreen() {
  return (
    <View>
      <SearchBarView />
    </View>
  )
}

const styles = StyleSheet.create({})