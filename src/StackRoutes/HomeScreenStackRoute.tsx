import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeStack'  
                component={HomeScreen} 
            />
        </Stack.Navigator>
    )
}