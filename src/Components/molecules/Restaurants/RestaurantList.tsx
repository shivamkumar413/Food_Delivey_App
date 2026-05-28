import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { restaurants } from '../../../utils/Mockdata/Restaurants'
import Restaurants from '../../atoms/Restaurants/Restaurants'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack' 
import { HomeStackParamList } from '../../../StackRoutes/HomeScreenStackRoute'
import SearchBarView from '../../atoms/SearchBar/SearchBarView'
import Header from '../Header/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useCartStore } from '../../../Stores/useCartStore'

type NavigationProp = StackNavigationProp<
  HomeStackParamList,
  'HomeStack'
>

export default function RestaurantList() {
  const navigation = useNavigation<NavigationProp>();
  const [showHomeScreenHeader,setShowHomeScreenHeader] = React.useState(false);
  const insets = useSafeAreaInsets();
  const { cart } = useCartStore();
  return (
    <View style={StyleSheet.compose(
      styles.container,
      {
      }
    )}>
      
      <FlatList 
        scrollEnabled={true}
        data={restaurants}
        onScroll={(e)=>{
        //console.log(e.nativeEvent.contentOffset.y)
        const y = e.nativeEvent.contentOffset.y;
        if(y>77){
          setShowHomeScreenHeader(true);
        }
        if(y<=77){
          setShowHomeScreenHeader(false)
        }

      }}
      scrollEventThrottle={16}
        ListHeaderComponent={
          <>
            <StatusBar barStyle={'dark-content'}/>
            {
              showHomeScreenHeader ? 
              <View style={{marginVertical : 100,backgroundColor : 'white'}}>
            
              </View> : 
              <>
                <Header screenText='Hot Food' time={20}/>
                <View style={{
                    // paddingVertical : isSticky ? 20 : 0,
                    backgroundColor : '#F7F7F7'
                }}>
                  <SearchBarView />
                  
                </View>
              </>
            }
            
            <Text style={StyleSheet.compose(
              styles.text,
              {}
              // {marginTop : showHomeScreenHeader ? 140 : 0}
            )}>Top restaurants to explore</Text>
            <Text style={styles.text2}>Featured Restaurants</Text>
          </>
        }
        ListFooterComponent={
          <View
            style={{paddingVertical : (cart.reduce(
              (acc,curr) => acc + (curr.numberOfItem ?? 0),
              0,
              ) > 0) ?  25: 0}}
          >
          {/* <Text>Hello</Text> */}
          </View>
        }
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

       {
        showHomeScreenHeader && 
        <View 
          style={{
            position : 'absolute',
            top : -insets.top,
            left : 0,
            right : 0,
            marginTop : insets.top,
            paddingTop : insets.top + 10,
            paddingBottom : 20,
            backgroundColor : '#F8F8F8'
          }}
        >

          <SearchBarView />
        </View>
      } 
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      marginHorizontal : 0,
    },
    text : {
      fontSize : 15,
      fontWeight : '500',
      marginVertical : 2, 
      marginTop : 10,
      marginHorizontal : 10,
    },
    text2 : {
      fontSize : 12,
       fontWeight : '400',
       marginBottom : 5,
       marginHorizontal : 10,
    }
})