import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import RatingBox from '../RatingBox/RatingBox';


type menuItemType = {
    name : string,
    image : string,
    price : number,
    description : string,
    rating : number,
    numberOfRating : number,
    isVeg : boolean,
    category : string,
}

type FoodDetailModalProps = {
    visible : boolean,
    setVisible : (visible: boolean) => void,
    itemDetail ?: menuItemType
}

export default function FoodDetailModal({visible,setVisible,itemDetail} : FoodDetailModalProps) {
  return (
    <Modal
        animationType='slide'
        visible={visible}
        transparent={true}
      >
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <AntDesign 
                style={styles.closeIcon}
                color={'black'}
                name="close" 
                size={24} 
                onPress={() => setVisible(false)} 
            />
            <View
                style={{
                    height: 450,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 0,

                }}
            >
                <Image 
                    source={{uri : itemDetail?.image}}
                    style={styles.image}
                />
                <View style={styles.nameContainer}>
                    <View>
                        {itemDetail?.isVeg ? <MaterialCommunityIcons name="square-circle" color={'green'} size={16}/> : <MaterialCommunityIcons name="square-circle" color={'red'} size={16}/>}
                        <Text style={styles.nameText}>{itemDetail?.name}</Text>
                    </View>
                     <Pressable style={styles.addButton}>
                        <Text  style={styles.addButtonText}>ADD</Text>
                    </Pressable>
                </View>
                <View
                    style={styles.priceContainer}
                >
                    <Text style={styles.priceText}>₹{itemDetail?.price}</Text>

                    <RatingBox 
                        rating={itemDetail?.rating}
                        numberOfRating={itemDetail?.numberOfRating}
                    />
                    <Text style={{fontSize : 12,marginTop : 2,textAlign:'justify'}}>{itemDetail?.description}</Text>
                </View>
                
            </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    nameContainer :{
        marginVertical : 15,
        marginHorizontal : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    closeIcon : {
        position : 'absolute',
        top : 230,
        right : 170,
        zIndex : 1,
        backgroundColor : 'white',
        borderRadius : 16,
        padding : 5,
    },
    image : {
        width : '100%',
        height : 250,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
    },
    addButton :{
        borderColor : 'gray',
        borderWidth : 1,
        paddingHorizontal : 25,
        paddingVertical : 4,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 6,
    },
    addButtonText : { 
        color : 'green',
        fontSize : 13,
        fontWeight : '500',
    },
    nameText : {
        fontSize : 18,
        fontWeight : '600'
    },
    priceContainer : {
        marginHorizontal : 10,
        marginVertical : 1,
    },
    priceText : {
        fontSize : 14,
        fontWeight : '500',
        color : 'black',
    }
})