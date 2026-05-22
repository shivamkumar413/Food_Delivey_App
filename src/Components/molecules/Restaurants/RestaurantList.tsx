import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { restaurants } from '../../../utils/Mockdata/Restaurants'
import Restaurants from '../../atoms/Restaurants/Restaurants'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack' 
import { HomeStackParamList } from '../../../StackRoutes/HomeScreenStackRoute'

type NavigationProp = StackNavigationProp<
  HomeStackParamList,
  'HomeStack'
>

export default function RestaurantList() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top restaurants to explore</Text>
      <Text style={{fontSize : 12, fontWeight : '400',marginBottom : 5}}>Featured Restaurants</Text>
      <FlatList 
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Pressable onPress={()=>navigation.navigate('RestaurantScreen', item)}>
            <Restaurants 
              id={item.id}
              name={item.name}
              location={item.location}
              rating={item.rating}
              distance={item.distance}
              description={item.description}
              specificTag={item.specificTag}
              image={item.image}
            />
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      marginHorizontal : 10,
    },
    text : {
      fontSize : 15,
      fontWeight : '500',
      marginVertical : 2, 
      marginTop : 10
    }
})