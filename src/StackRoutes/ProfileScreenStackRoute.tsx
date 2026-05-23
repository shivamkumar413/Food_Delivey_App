import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createStackNavigator();

export default function ProfileScreenStackRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='GiftablesStack'  
                component={ProfileScreen}
                options={{
                    headerShown : false
                }} 
            />
        </Stack.Navigator>
    )
}