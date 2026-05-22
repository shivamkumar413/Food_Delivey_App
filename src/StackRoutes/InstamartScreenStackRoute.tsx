import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InstamartScreen from '../Screens/InstamartScreen';

const Stack = createStackNavigator();

export default function InstamartScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='InstamartStack'  
                component={InstamartScreen} 
            />
        </Stack.Navigator>
    )
}