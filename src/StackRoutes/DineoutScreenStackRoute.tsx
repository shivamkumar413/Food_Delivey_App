import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DineoutScreen from '../Screens/DineoutScreen';

const Stack = createStackNavigator();

export default function DineoutScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='DineoutStack'  
                component={DineoutScreen} 
            />
        </Stack.Navigator>
    )
}