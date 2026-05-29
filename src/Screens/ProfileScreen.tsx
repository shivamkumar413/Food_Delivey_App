import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import ProfileContentArea from '../Components/organisms/ProfileContentArea/ProfileContentArea';

export default function ProfileScreen() {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
        tabBarStyle: {
            display: 'none',
        },
    });

    return () => {
        navigation.getParent()?.setOptions({
            tabBarStyle: undefined,
        });
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      
      <View style={styles.HeaderContainer}>
        <AntDesign 
          onPress={()=>navigation.goBack()}
          name='arrow-left' 
          color="white" 
          style={{marginHorizontal : 20}} 
          size={20} 
        />
        <Text style={
          StyleSheet.compose(
            styles.headerText,
            {
              marginTop : 35,
              fontSize : 20,
              fontWeight : '500'
            }
        )}>
          Name
        </Text>
        <Text style={styles.headerText}>Email</Text>
      </View>

        <ProfileContentArea 

        />

      <Pressable
        style={StyleSheet.compose(
          styles.logoutBtn,
          {}
        )}
        // @ts-ignore
        onPress={()=>navigation.navigate('Login')}
      >
        <Ionicons 
          name='log-out-outline' 
          size={25}
          color={'#C2410C'}
          style={{marginLeft : 10}}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  HeaderContainer : {
    height : 180,
    backgroundColor:'#1D0807',
    paddingTop : 50,
    paddingBottom : 20,
    borderBottomLeftRadius : 30,
    borderBottomRightRadius : 30,
  },
  headerText : {
    color : '#FFFFFF',
    marginHorizontal : 20,
    fontSize : 12,
    marginTop : 5,
  },
  logoutBtn : {
    flexDirection : 'row',
    backgroundColor : '#FFF7ED',
    borderColor: 'gray',
    borderWidth: 0.5,
    marginHorizontal : 20,
    paddingVertical : 10,
    paddingHorizontal : 10,
    alignItems : 'center',
    borderRadius : 10,
  },
  logoutText : {
    fontSize : 18,
    color : '#C2410C',
    marginHorizontal : 5,
  }
})