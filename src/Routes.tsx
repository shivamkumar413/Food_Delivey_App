import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import InstamartScreen from './Screens/InstamartScreen';
import HomeScreenStackRoute from './StackRoutes/HomeScreenStackRoute';
import InstamartScreenStackRoute from './StackRoutes/InstamartScreenStackRoute';
import DineoutScreenStackRoute from './StackRoutes/DineoutScreenStackRoute';
import GiftablesScreenStackRoute from './StackRoutes/GiftablesScreenStackRoute';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Food" 
            component={HomeScreenStackRoute} 
            options={{
                headerShown : false,
            }}
        />
        <Tab.Screen  
            name="Instamart" 
            component={InstamartScreenStackRoute} 
            options={{
                headerShown : false,
            }}
        />
        <Tab.Screen 
            name="Dineout" 
            component={DineoutScreenStackRoute} 
            options={{
                headerShown : false,
            }}
        />

        <Tab.Screen 
            name="Giftables" 
            component={GiftablesScreenStackRoute}
            options={{
                headerShown : false,
            }} 
        />
    </Tab.Navigator>
  );
}

export default function Routes(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
    
}