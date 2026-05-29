import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileContentView from '../../atoms/ProfileContentView/ProfileContentView'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function ProfileContentArea() {
  return (
    <View style={styles.container}>
        <ProfileContentView 
            propText='My Vouchers'
            iconName='ticket-outline'
            Icon={Ionicons}
        />
        <ProfileContentView 
            propText='My Orders'
            iconName='shopping-outline'
            Icon={MaterialCommunityIcons}
        />
        <ProfileContentView 
            propText='Adresses'
            iconName='location-outline'
            Icon={Ionicons}
        />
        <ProfileContentView 
            propText='Favourites'
            iconName='favorite-outline'
            Icon={MaterialIcons}
        />
        <ProfileContentView 
            propText='Settings'
            iconName='settings-outline'
            Icon={Ionicons}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        paddingVertical : 10,
        marginHorizontal : 20,
        marginVertical : 20,
        elevation : 5,
        borderRadius : 10,
    }
})