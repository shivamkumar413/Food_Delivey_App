import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
        {
          marginTop : isSticky ? insets.top : 0,
        }
      )}
      stickyHeaderIndices={[2]}
      onScroll={(e)=>{
        //console.log(e.nativeEvent.contentOffset.y)
        const y = e.nativeEvent.contentOffset.y;
        const sticky = y > 77;
        if (sticky !== isSticky) {
          setIsSticky(sticky);
        }

      }}
      scrollEventThrottle={16}
    >
      <StatusBar barStyle={'dark-content'}/>
      <Header screenText='Hot Food' time={20}/>
      <View style={{
          paddingVertical : isSticky ? 20 : 0,
          backgroundColor : '#F7F7F7'
      }}>
        <SearchBarView />
      </View>
      
      <RestaurantList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer : {

  }
})