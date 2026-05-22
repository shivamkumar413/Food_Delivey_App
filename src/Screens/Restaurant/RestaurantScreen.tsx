import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RestaurantScreen({route} : any) {

    const {id,name} = route.params;
    return (
        <View>
        <Text>RestaurantScreen {id}: {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})