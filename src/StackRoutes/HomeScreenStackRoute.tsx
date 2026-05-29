import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantScreen from '../Screens/Restaurant/RestaurantScreen';
import { Props } from '../Components/atoms/Restaurants/Restaurants';
import { useRestaurantScreenHeaderStore } from '../Stores/useRestaurantScreenHeaderStore';
import RestaurantScreenHeader from '../Components/molecules/RestaurantScreenHeader/RestaurantScreenHeader';
import CartScreen from '../Screens/CartScreen/CartScreen';
import { useCartStore } from '../Stores/useCartStore';

const Stack = createStackNavigator();

export type HomeStackParamList = {
    HomeStack : undefined;
    RestaurantScreen : Props;
}

export default function HomeScreenStackRoute(){
    
    const { headerShown } = useRestaurantScreenHeaderStore();
    const { restaurantName } = useCartStore()

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeStack'  
                component={HomeScreen} 
                options={{
                    headerShown : false
                }}
                
            />
            <Stack.Screen 
                name='RestaurantScreen'  
                component={RestaurantScreen} 
                options={{
                    header : ()=><RestaurantScreenHeader />,
                    headerShown : headerShown
                }}
            />

            <Stack.Screen 
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerTitle : restaurantName,
                    headerTitleStyle : {
                        fontSize : 11,
                        fontWeight : '500',
                        color : 'gray'
                    }
                    
                }}
            />
        </Stack.Navigator>
    )
}