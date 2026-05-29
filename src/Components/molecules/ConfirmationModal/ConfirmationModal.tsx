import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCartStore } from '../../../Stores/useCartStore';

type Props = {
    isVisible : boolean;
    onYesPress : ()=>void;
    onNoPress : ()=>void;
    name : string,
}


export default function ConfirmationModal({isVisible,onYesPress,onNoPress,name} : Props) {

    const { restaurantName } = useCartStore()
  return (
    <Modal
        visible={isVisible}
        transparent={true}
        animationType='slide'  
    >   
        <View
            style={{
                flex: 1,
                justifyContent: 'space-around',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <View
                style={{
                    height: 200,
                    backgroundColor: 'white',
                    borderRadius : 20,
                    paddingVertical: 20,
                    paddingHorizontal : 12,
                    marginHorizontal : 40,
                }}
            >
                <Text style={{fontSize : 15,fontWeight : '500'}}>Replace Cart Item</Text>
                <Text
                    style={styles.text}
                    numberOfLines={4}
                >
                    Your cart contains dishes from {restaurantName}. Do you want to discard the selection
                    and add dishes from {name}
                </Text>

                <View style = {styles.buttonContainer}>
                    <Pressable 
                        style={StyleSheet.compose(
                            styles.button,
                            {
                                backgroundColor : '#FFF7ED'
                            }
                        )}
                        onPress={onNoPress}    
                    >
                        <Text style={StyleSheet.compose(
                            styles.buttonText,
                            {
                                color : '#9A3412'
                            }
                        )}>No</Text>
                    </Pressable>
                                    
                    <Pressable style={styles.button}
                        onPress={onYesPress}
                    >
                        <Text style={StyleSheet.compose(
                            styles.buttonText,
                            {color : '#8A3B00'}
                        )}>Replace</Text>
                    </Pressable>    
                </View>  
        
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    text : {
        marginTop : 3,
        fontSize : 11,
        color : 'gray',
        fontWeight : '500',

    },
    buttonContainer : {
        flexDirection : 'row',
        gap : 10,
        marginHorizontal : 10
    },
    button : {
        width : '48%',
        marginTop : 35,
        backgroundColor : '#FF7A00',
        paddingHorizontal : 0,
        paddingVertical : 10,
        borderRadius : 10,
        borderWidth : 1,
        borderColor : 'gray',
        elevation : 5,
    },
    buttonText : {
        fontSize : 15,
        fontWeight : '600',
        textAlign : 'center'
    }
})