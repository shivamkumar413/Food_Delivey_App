import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons'

export default function RatingBox({rating,numberOfRating} : {rating : number | undefined,numberOfRating : number | undefined}) {
  return (
    <View style={{width : 80,height : 25,flexDirection : 'row', alignItems : 'center', backgroundColor : '#e4f7e0', paddingHorizontal : 5, borderRadius : 5}}>
        <Foundation name='star' size={10} color={'green'}/>
        <Text style={styles.ratingText}>{rating} ({numberOfRating})</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ratingText : {
        marginHorizontal : 5,
        fontSize : 10,
        fontWeight : '500',
        color : 'green',
    }, 
})