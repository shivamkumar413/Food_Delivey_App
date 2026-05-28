import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

type Props = {
    totalItemCount : number
}

export default function CartDropdown({totalItemCount} : Props) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{totalItemCount} item added</Text>
      <Pressable
        // @ts-ignore
        onPress={()=>navigation.navigate('CartScreen')}
      >
        <Text style={styles.text}>View Cart  {'>'}</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        flexDirection : 'row',
        backgroundColor : 'green',
        elevation : 5,
        paddingVertical : 18,
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        borderRadius : 15,
    },
    text : {
        marginHorizontal : 10,
        fontSize : 16,
        fontWeight : '500',
        color : 'white'
    }
})