import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useRestaurantScreenHeaderStore } from '../../../Stores/useRestaurantScreenHeaderStore'

export default function RestaurantScreenHeader() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const { headerText,setHeaderShown } = useRestaurantScreenHeaderStore()

    function handleGoBack():void{
        navigation.goBack();
        setHeaderShown(false);
    }
  return (
    <View style={StyleSheet.compose(
        styles.container,
        {marginTop : insets.top}

    )}>
        <Ionicons 
            name='arrow-back-outline' 
            size={24}
            onPress={handleGoBack}
        />
        <Text style={styles.headerText}>{headerText}</Text>
        <Ionicons 
            name='search-outline' 
            size={24}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 20,
        paddingBottom : 20,
        paddingHorizontal : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        elevation : 20,
        
        // backgroundColor : 'red'
    },
    headerText : {
        fontSize : 18,
        fontWeight : '400'
    }
})