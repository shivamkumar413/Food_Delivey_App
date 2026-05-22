import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

type Props = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

export default function SearchBarModal({isModalOpen,setIsModalOpen}: Props) {

    const arr = ["Sweets","Biryani","EatRight","Pizza","Cake"]
    const [searchPlaceholderText, setSearchPlaceholderText] = React.useState('')
    const [searchText, setSearchText] = React.useState('')



    useEffect(()=>{
        const timer = setTimeout(() => {
            let randomText = searchPlaceholderText;
    
            while (randomText === searchPlaceholderText) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                randomText = arr[randomIndex];
            }
    
            setSearchPlaceholderText(randomText);
        }, 2000);
    
    },[searchPlaceholderText])
  return (
      <Modal
        animationType='slide'
        visible={isModalOpen}
        transparent={true}
      >
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <View
                style={{
                    height: 300,
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    padding: 20,

                }}
            >
                <AntDesign name="arrow-left" size={20} color='black' 
                    onPress={() => setIsModalOpen(false)}
                />
                <TextInput 
                    style={styles.searchTextInput}
                    placeholder={`Try '${searchPlaceholderText}'`}
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <Text
                    style={{fontSize : 12, marginTop : 10, fontWeight : 'medium'}}
                >
                    RECENTLY SEARCHED RESTAURANTS
                </Text>
                {/* <View>
                    <Text 
                        style={{
                            borderRadius : 20,
                            backgroundColor : 'red',
                            width : '50%'
                        }}
                    >Good Flippin Burgers</Text>
                </View> */}
            </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    searchTextInput : {
        backgroundColor : '#f7f4f4',
        borderRadius : 10,
        marginTop : 20,
        paddingHorizontal : 15,
        paddingVertical : 15,
        borderColor : 'gray',
        borderWidth : 1,
    }
})