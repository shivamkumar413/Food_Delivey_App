import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCartStore } from '../../Stores/useCartStore'
import AddButtonwithplusminus from '../../Components/atoms/AddButtonwithplusminus/AddButtonwithplusminus'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function CartScreen() {

  const { cart,addToCart,removeFromCart } = useCartStore()
  const [totalPrice,setTotalPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(()=>{
    cart.reduce(
      (acc , curr) => acc + (curr.numberOfItem ?? 0),
      0 
      ) === 0 ? navigation.goBack() : null;
  },[cart])

  useEffect(()=>{
    const sum = cart.reduce(
      (acc , curr) => acc + (curr.itemPrice ?? 0 )* (curr.numberOfItem ?? 0),
      0 
    )
    setTotalPrice(sum)
  },[cart,handleAddToCart,handleRemoveFromCart])

  

  function handleAddToCart(itemName : string,itemImage : string,itemPrice : number){
        addToCart({
            itemName : itemName,
            itemImage : itemImage,
            itemPrice : itemPrice
        })
        //console.log(cart)
    }

    function handleRemoveFromCart(itemName : string){
        removeFromCart({
            itemName : itemName,
        })
        //console.log(cart.length)        
    }

  return (
    <View style={{flex : 1}}>
      <View style={styles.container}>
        <FlatList 
          data={cart}
          renderItem={({item})=>(
            <View style={styles.flatListContainer}>
              <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center', gap : 5,borderBottomColor : 'gray',borderBottomWidth : 0.5,}}>
                {item.isVeg ? <MaterialCommunityIcons name="square-circle" color={'green'}/> : <MaterialCommunityIcons name="square-circle" color={'red'}/>}
                <Text style={styles.itemNameText}>{item.itemName} </Text>
              </View>
              
              <View style={{flexDirection : 'row',gap : 10,alignItems : 'center'}}>
                <AddButtonwithplusminus 
                  itemCount={item.numberOfItem}
                  onAddPress={()=>handleAddToCart(item.itemName,(item.itemImage ?? ''),(item.itemPrice ?? 0))}
                  onMinusPress={()=>handleRemoveFromCart(item.itemName)}
                />
                <Text style={styles.itemPriceText}>₹{item.itemPrice}</Text>
              </View>
            </View>
          )}
        />

      </View>

      <View style={styles.payButtonContainer}>
          <View>
            <Text style={{fontSize : 13,fontWeight : '600'}}>Pay on Delivery(Cash/ UPI)</Text>
            <Text style={{fontSize : 10,color : 'gray',fontWeight : '300'}}>Pay cash or ask for QR code</Text>
          </View>
          <Pressable style={styles.payButton}>
            <Text style={{color : '#FFFFFF'}}>Pay ₹{totalPrice}</Text>
          </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'white',
    marginVertical : 10,
    marginHorizontal : 15,
    borderRadius : 10,
    elevation : 5,
    paddingVertical : 10,
    paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  flatListContainer : {
    marginVertical : 5,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingVertical : 5,
  },
  itemNameText : {
    fontSize : 13,
    fontWeight : '500',
    paddingVertical : 6,
  },
  itemPriceText : {
    fontSize : 12,
    fontWeight : '400'
  },
  payButtonContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    position : 'absolute',
    bottom : 0,
    left : 0,
    right : 0,
    paddingVertical : 15,
    paddingHorizontal : 15,
    backgroundColor : 'white',
    elevation : 5,
    alignItems : 'center'
  },
  payButton : {
    backgroundColor : '#16A34A',
    borderRadius : 10,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    paddingHorizontal : 12,
    paddingVertical : 10
  }
})