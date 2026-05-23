import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { menuItem } from '../../utils/Mockdata/Menu';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import FoodDetailModal from '../../Components/atoms/FoodDetailModal/FoodDetailModal';


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


export default function RestaurantScreen({route} : any) {

    const {id,name,location,rating,distance} = route.params;
    const [menu,setMenu] = React.useState<menuItemType[]>([]);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalDetails,setModalDetails] = React.useState<menuItemType>();

    useEffect(()=>{
        if(!name) return;
        let obj = menuItem[name as keyof typeof menuItem];
        setMenu(obj);
    }, [id])

    function handleModalOpenPress(item : menuItemType){
        setIsModalVisible(true);
        setModalDetails(item);
    }
    return (
        <View style={{flex : 1,paddingVertical : 10}}>
            <View style = {styles.restaurantInfoContainer}>
                <View style={styles.innerContainer}>
                    <View style={{flex : 1,}}>
                        <Text style={styles.restaurantName}>{name}</Text>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center',marginVertical : 2}}>
                            <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center',marginVertical : 2}}>
                                <Text style={styles.distanceText}>{distance} km</Text>
                                <Text style={styles.locationText}>{location}</Text>
                            </View>
                            <View style={{marginLeft : 20, flexDirection : 'row', alignItems : 'center', backgroundColor : '#EAFBE7', paddingHorizontal : 5, borderRadius : 5}}>
                                <Foundation name='star' size={12} color={'green'}/>
                                <Text style={styles.ratingText}>{rating}</Text>
                            </View>
                        </View>
                    </View>
                    

                    
                </View>
                
            </View>

            <FlatList 
                data={menu}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                }}

                keyExtractor={item=>item.name}
                renderItem={({item})=>(
                    <View style={styles.flatListContainer}>
                        <Pressable
                            onPress={()=>handleModalOpenPress(item)}
                        >
                            <Image 
                                source={{uri : item.image}} 
                                style={styles.image} 
                            />
                        </Pressable>
                        
                        <View style={styles.ratingContainer}>
                            {item.isVeg ? <MaterialCommunityIcons name="square-circle" color={'green'}/> : <MaterialCommunityIcons name="square-circle" color={'red'}/>}
                            <View style={{flexDirection : 'row', alignItems : 'center', backgroundColor : '#EAFBE7', paddingHorizontal : 5, borderRadius : 5}}>
                                <Foundation name='star' size={10} color={'green'}/>
                                <Text style={styles.ratingText}>{item.rating} ({item.numberOfRating})</Text>
                            </View>
                            
                        </View>
                        <Text style={styles.itemName}>{item.name}</Text>
                        
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceText}>
                                ₹{item.price}
                            </Text>
                            <Pressable style={styles.addButton}>
                                <Text  style={styles.addButtonText}>ADD</Text>
                            </Pressable>
                        </View>
                        
                    </View>
                )}
                
            />

            <FoodDetailModal 
                visible={isModalVisible} 
                setVisible={setIsModalVisible}
                itemDetail={modalDetails}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantInfoContainer : {
        padding : 10,
        margin : 10,
        elevation : 5,
        backgroundColor : 'white',
        borderRadius : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    innerContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
    },
    restaurantName : {
        fontSize : 20,
        fontWeight : '600',
    },
    distanceText : {
        borderRightColor : 'gray',
        borderRightWidth : 1,
        paddingRight : 5,
        color : 'gray',
        fontSize : 12,
        fontWeight : '600',
    },
    locationText : {
        paddingLeft : 5,
        color : 'gray',
        fontSize : 12,
        fontWeight : '600',
    },
    flatListContainer : {
        flex : 1,
        width : '40%',
        marginVertical : 10,
        marginHorizontal : 10,
    },
    image : {
        borderRadius : 10,
        height : 150,
        width : 150,
    },
    ratingContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 5,
        marginHorizontal : 2,
        justifyContent : 'space-between'
    },
    ratingText : {
        marginHorizontal : 5,
        fontSize : 10,
        fontWeight : '500',
        color : 'green',
    },
    itemName : {
        fontSize : 12,
        fontWeight : '600',

    },
    priceContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 15,
    },
    priceText : {
        fontSize : 12,
        fontWeight : '400',
        color : 'black',
    },
    addButton :{
        borderColor : 'gray',
        borderWidth : 1,
        paddingHorizontal : 10,
        paddingVertical : 3,
        borderRadius : 6,
    },
    addButtonText : { 
        color : 'green',
        fontSize : 12,
        fontWeight : '500',
    }
    
})