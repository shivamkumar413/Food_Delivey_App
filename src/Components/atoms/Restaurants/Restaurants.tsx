import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export type Props = {
    id : number;
    name : string;
    location : string;
    rating : number;
    distance : number;
    description : string;
    specificTag : string;
    image : string;
}

export default function Restaurants({
    id, name, location,
    rating, distance,
    description, specificTag, image }: Props
    ){
  return (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.specificTag}>{specificTag}</Text>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <View style={styles.ratingContainer}>
                <AntDesign name="star" size={16} color="silver" style={{backgroundColor:"green" , borderRadius :20}}/>
                <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>{location}</Text>
                <Text style={styles.location}>{distance} km</Text>
            </View>

            <View style={styles.innerContainer}>
                <Text style={{ fontWeight : '600' ,fontSize:12,}}>
                    FREE DELIVERY
                </Text>
                <View style={{marginLeft : 10 }}>
                    <Text style={{ fontWeight : '600' ,fontSize:12,textAlign:'center'}}>One</Text>
                    <Text style={{ fontSize:12}}>Benefits</Text>
                </View>
            </View> 
        </View>     

    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        
        marginBottom : 30,
    },
    image : {
        width : '40%',
        height : 150,
        borderRadius : 10,
    },
    name : {
        fontSize : 15,
        fontWeight : '600',
        marginHorizontal : 5,
    },
    specificTag : {
        fontSize : 12,
        fontWeight : '500',
        marginHorizontal : 5,
    },
    infoContainer : {
        flex : 1,
        marginLeft : 10,
        overflow : 'hidden',
        minWidth : 0,
    },
    rating : {
        fontSize : 12,
        fontWeight : '600',
        marginHorizontal : 5,
    },
    ratingContainer : {
        flexDirection : 'row',
        marginHorizontal : 5,
    },
    locationContainer : {
        flexDirection : 'row',
    },
    location : {
        fontSize : 12,
        fontWeight : '400',
        marginHorizontal : 3,
    },
    description : {
        fontSize : 12,
        fontWeight : '400',
        marginHorizontal : 5,
        marginTop : 5,
    },
    innerContainer : {
        flex : 1,
        flexDirection : 'row',
        width : '100%',
        alignItems : 'center',
        paddingVertical : 2,
        paddingHorizontal : 10,
        marginTop : 8,
        borderRadius : 50,
        borderColor : 'gray',
        borderWidth : 0.5,
    }

})