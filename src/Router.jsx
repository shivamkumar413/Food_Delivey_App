import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from './Screens/LoginPage/LoginPage';
import Routes from './Routes';

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            {/* <Stack.Screen 
                name='Login'
                component={LoginPage}
                options={{
                    headerShown : false,
                }}
            /> */}
            <Stack.Screen 
                name='Main'
                component={Routes}
                options={{
                    headerShown : false
                }}
            />
        </Stack.Navigator>
    )
}

export default function Router(){
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}