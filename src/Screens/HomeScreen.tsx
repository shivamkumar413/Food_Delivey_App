import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-screens'
import SearchBarView from '../Components/atoms/SearchBar/SearchBarView'
import RestaurantList from '../Components/molecules/Restaurants/RestaurantList'
import Header from '../Components/molecules/Header/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeScreen() {

  const [isSticky, setIsSticky] = React.useState(false);
  const insets = useSafeAreaInsets()
  return (
    <ScrollView 
      style={StyleSheet.compose(
        styles.container,
        {marginTop : isSticky ? insets.top : 0}
      )}
      stickyHeaderIndices={[1]}
      onScroll={(e)=>{
        //console.log(e.nativeEvent.contentOffset.y)
        const y = e.nativeEvent.contentOffset.y;
          if (y > 77) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }

      }}
      scrollEventThrottle={16}
    >
      <Header screenText='Hot Food' time={20}/>
      <SearchBarView />
      <RestaurantList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})