import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RestaurantScreen from '../Screens/Restaurant/RestaurantScreen';
import { Props } from '../Components/atoms/Restaurants/Restaurants';

const Stack = createStackNavigator();

export type HomeStackParamList = {
    HomeStack : undefined;
    RestaurantScreen : Props;
}

export default function HomeScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeStack'  
                component={HomeScreen} 
            />
            <Stack.Screen 
                name='RestaurantScreen'  
                component={RestaurantScreen} 
            />
        </Stack.Navigator>
    )
}