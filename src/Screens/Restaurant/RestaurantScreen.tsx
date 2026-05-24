import { FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { menuItem } from '../../utils/Mockdata/Menu';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import FoodDetailModal from '../../Components/atoms/FoodDetailModal/FoodDetailModal';
import RestaurantDetailHeader from '../../Components/atoms/Restaurants/RestaurantDetailHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRestaurantScreenHeaderStore } from '../../Stores/useRestaurantScreenHeaderStore';
import { useOrderStore } from '../../Stores/useOrderStore';


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

interface Order  {
    restaurantName ?: string;
    itemName : string;
    itemImage : string;
    restaurantAddress ?: string;
    price : number;
}


export default function RestaurantScreen({route} : any) {

    const {id,name,location,rating,distance} = route.params;
    const [menu,setMenu] = React.useState<menuItemType[]>([]);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalDetails,setModalDetails] = React.useState<menuItemType>();
    const {headerShown,setHeaderShown,setHeaderText } = useRestaurantScreenHeaderStore();
    const { setFoodOrders } = useOrderStore();


    useEffect(()=>{
        if(!name) return;
        let obj = menuItem[name as keyof typeof menuItem];
        setMenu(obj);
        setHeaderShown(false);
        setHeaderText(name);
    }, [id])

    function handleModalOpenPress(item : menuItemType){
        setIsModalVisible(true);
        setModalDetails(item);
    }

    function handleAddToCart(builder : Order){
        setFoodOrders({
            restaurantName : builder.restaurantName,
            itemName : builder.itemName,
            itemImage : builder.itemImage,
            restaurantAddress : builder.restaurantAddress,
            price : builder.price,

        })
    }

    return (
        <ScrollView 
            onScroll={(e)=>{
                const y = e.nativeEvent.contentOffset.y;
                if(y>10) setHeaderShown(true)
                else if(y<=20) setHeaderShown(false)

            }}
            style={{flex : 1,paddingVertical : 0,}}
            scrollEventThrottle={16}
        
        >
            <StatusBar barStyle={headerShown ? 'dark-content' : 'light-content'}/>
            <View
                style={styles.restaurantHeaderContainer}
            >
                <RestaurantDetailHeader 
                    name={name}
                    distance={distance}
                    location={location}
                    rating={rating}
                />
                <Text style={styles.restaurantHeaderContainerText}>
                    Free delivery on orders above ₹99
                </Text>
            </View>

            <FlatList 
                scrollEnabled={false}
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
                            <Pressable 
                                onPress={()=>handleAddToCart({
                                    restaurantName : name,
                                    restaurantAddress : location,
                                    itemName : item.name,
                                    itemImage : item.image,
                                    price : item.price
                                })}
                                style={styles.addButton}
                            >
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    restaurantHeaderContainer : {
        backgroundColor:'#1D0807',
        paddingTop : 50,
        paddingBottom : 20,
        borderBottomLeftRadius : 30,
        borderBottomRightRadius : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    restaurantHeaderContainerText : {
        color:'white',
        fontSize : 13,
        fontWeight : '500',
        marginTop : 5
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