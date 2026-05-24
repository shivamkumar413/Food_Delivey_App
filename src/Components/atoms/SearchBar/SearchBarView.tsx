import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import SearchBarModal from './SearchBarModal'

export default function SearchBarView() {

    const [searchText, setSearchText] = React.useState('')
    const arr = ["Sweets","Biryani","EatRight","Pizza","Cake"]
    const [isModalOpen,setIsModalOpen] = React.useState(false)

    useEffect(()=>{
        const timer = setTimeout(() => {
            let randomText = searchText;

            while (randomText === searchText) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                randomText = arr[randomIndex];
            }

            setSearchText(randomText);
        }, 2000);

    },[searchText])
        
    function handleModalOpen(){
        setIsModalOpen(true);
    }
    

  return (
    <Pressable
        style={styles.container}
        onPress={handleModalOpen}
    >
      <Ionicons name="search" size={20} color="#000" />
      <Text style={styles.text}>Search for {`'${searchText}'`}</Text>
      <SearchBarModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container : {
        zIndex : 10,
        marginHorizontal : 10,
        marginBottom : 10,
        paddingHorizontal : 10,
        paddingVertical : 15,
        
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : '#f7f4f4',
        fontSize : 20,
        borderRadius : 10,
        borderColor : 'gray',
        borderWidth : 1,
    },
    text : {
        fontSize : 15,
        marginHorizontal : 10,
    },
})