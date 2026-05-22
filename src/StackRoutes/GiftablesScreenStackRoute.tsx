import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GiftablesScreen from '../Screens/GiftablesScreen';

const Stack = createStackNavigator();

export default function GiftablesScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='GiftablesStack'  
                component={GiftablesScreen} 
            />
        </Stack.Navigator>
    )
}