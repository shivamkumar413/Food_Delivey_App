import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/molecules/Header/Header'
import SearchBarView from '../Components/atoms/SearchBar/SearchBarView'

export default function InstamartScreen() {
  return (
    <ScrollView>
      <Header screenText='Grocery' time={10}/>
      <SearchBarView />
      <Text>InstamartScreen</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})