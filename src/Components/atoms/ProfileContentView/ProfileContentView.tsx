import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ComponentType } from 'react'

type Props = {
    propText : string,
    iconName : string,
    Icon : ComponentType<any>
}

export default function ProfileContentView({propText,iconName,Icon} : Props) {
  return (
    <View style={styles.container}>
        <Icon 
            name={iconName} 
            size={24} 
            style={styles.icon}
        />
        <Text style={styles.text}>{propText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomColor : 'gray',
        borderBottomWidth : 0.2,
        marginHorizontal : 10,
        paddingVertical : 9,
        gap : 15
    },
    text : {
        fontSize : 13,
        color : 'gray'
    },
    icon : {
        color : 'black',
        marginLeft : 5,
    }
})