import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../Screens/OrderScreen';

const Stack = createStackNavigator();

export default function OrderScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='OrderScreen'  
                component={OrderScreen} 
                options={{
                    headerShown : false,
                }}
            />
        </Stack.Navigator>
    )
}