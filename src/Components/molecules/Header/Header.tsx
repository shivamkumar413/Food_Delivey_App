import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({screenText,time} : {screenText : string,time : number}) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    // const [location, setLocation] = React.useState<Location.LocationObject | null>(null);
    // const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
    // const [text,setText] = React.useState<string | null>(null);

    //     useEffect(()=>{
    //         async function getCurrentLocation() {
        
    //             let { status } = await Location.requestForegroundPermissionsAsync();
    //             if (status !== 'granted') {
    //                 setErrorMsg('Permission to access location was denied');
    //                 return;
    //             }

    //             let location = await Location.getCurrentPositionAsync({});
    //             setLocation(location);
    //             let text = JSON.stringify(location)
    //             setText(text)
    //         }

    //         getCurrentLocation();
    //     },[])
    

  return (
    <View style={StyleSheet.compose(
        styles.container,
        {   
            marginTop : insets.top,
            marginBottom : 5
        }
    )}>
        <View>
            <Text style={{fontSize : 11,fontWeight : '500'}}>Get {screenText} in </Text>
            <Text style={styles.minuteText}>{time} minutes</Text>
            <Pressable>
                <Text>Address</Text>
            </Pressable>
        </View>
        <View>
            <Ionicons 
                onPress={()=>navigation.navigate('Profile')}
                name='person' 
                size={25} 
                color={'white'} 
                style={styles.iconPerson}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row', 
        justifyContent : 'space-between',
        marginHorizontal : 15,
    },
    iconPerson : {
        padding : 8,
        backgroundColor : 'tomato',
        borderRadius : 20
    },
    minuteText : {
        fontSize : 25,
        fontWeight : '600',
        marginVertical : 0,
    }
})