import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantScreen from '../Screens/Restaurant/RestaurantScreen';
import { Props } from '../Components/atoms/Restaurants/Restaurants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRestaurantScreenHeaderStore } from '../Stores/useRestaurantScreenHeaderStore';
import RestaurantScreenHeader from '../Components/molecules/RestaurantScreenHeader/RestaurantScreenHeader';
import CartScreen from '../Screens/CartScreen/CartScreen';

const Stack = createStackNavigator();

export type HomeStackParamList = {
    HomeStack : undefined;
    RestaurantScreen : Props;
}

export default function HomeScreenStackRoute(){
    
    const insets = useSafeAreaInsets();
    const { headerShown } = useRestaurantScreenHeaderStore();

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
            />
        </Stack.Navigator>
    )
}