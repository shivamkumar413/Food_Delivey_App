import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

type Props = {
    itemCount : number | undefined,
    onAddPress : ()=>void,
    onMinusPress : ()=>void,
}

export default function AddButtonwithplusminus({itemCount,onAddPress,onMinusPress}: Props) {
  return (
    <View style={styles.container}>
        <AntDesign 
            onPress={onMinusPress}
            name='minus' 
            size={15} 
            color={'green'} 
            style={styles.antDesginIcon}/>
        <Text style={styles.itemCountText}>{itemCount}</Text>
        <AntDesign 
            onPress={onAddPress}
            name='plus' 
            size={15} 
            color={'green'} 
            style={styles.antDesginIcon}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 5,
        justifyContent : 'space-between',
        borderRadius : 6,
        borderColor : 'gray',
        borderWidth : 1,
    },
    antDesginIcon : {
        marginHorizontal : 8
    },
    itemCountText : {
        fontSize : 15,
        fontWeight : '500',
        color : 'black'
    }
})