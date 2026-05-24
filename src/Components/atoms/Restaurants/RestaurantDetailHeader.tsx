import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons'

type Props = {
    name : string,
    distance : number,
    location : string,
    rating : number
}

export default function RestaurantDetailHeader({name,distance,location,rating} : Props) {
  return (
        
        <View style = {styles.restaurantInfoContainer}>
            <View style={styles.innerContainer}>
                <View style={{flex : 1,}}>
                    <Text style={styles.restaurantName}>{name}</Text>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center',marginVertical : 2}}>
                        <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center',marginVertical : 2}}>
                            <Text style={styles.distanceText}>{distance} km</Text>
                            <Text style={styles.locationText}>{location}</Text>
                        </View>
                        <View style={{marginLeft : 20, flexDirection : 'row', alignItems : 'center', backgroundColor : '#EAFBE7', paddingHorizontal : 5, borderRadius : 5}}>
                            <Foundation name='star' size={12} color={'green'}/>
                            <Text style={styles.ratingText}>{rating}</Text>
                        </View>
                    </View>
                </View>
                          
            </View>
                
        </View>
  )
}

const styles = StyleSheet.create({
    restaurantInfoContainer : {
        
        padding : 10,
        margin : 10,
        elevation : 5,
        backgroundColor : 'white',
        borderRadius : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    innerContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
    },
    restaurantName : {
        fontSize : 20,
        fontWeight : '600',
    },
    distanceText : {
        borderRightColor : 'gray',
        borderRightWidth : 1,
        paddingRight : 5,
        color : 'gray',
        fontSize : 12,
        fontWeight : '600',
    },
    locationText : {
        paddingLeft : 5,
        color : 'gray',
        fontSize : 12,
        fontWeight : '600',
    },
    ratingText : {
        marginHorizontal : 5,
        fontSize : 10,
        fontWeight : '500',
        color : 'green',
    },
})