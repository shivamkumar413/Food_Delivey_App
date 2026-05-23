import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenStackRoute from './StackRoutes/HomeScreenStackRoute';
import InstamartScreenStackRoute from './StackRoutes/InstamartScreenStackRoute';
import OrderScreenStackRoute from './StackRoutes/OrderScreenStackRoute';
import ProfileScreenStackRoute from './StackRoutes/ProfileScreenStackRoute';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon : ({focused,color})=>{
                let iconName : React.ComponentProps<typeof Ionicons>['name'] | React.ComponentProps<typeof MaterialCommunityIcons>['name'];
                if(route.name === 'Food'){
                    if(focused) color = 'tomato'
                    else color="black"
                    iconName = 'rice'
                }
                else if(route.name === 'Instamart'){
                    if(focused) color = 'tomato'
                    else color="black"
                    return <AntDesign name='shopping-cart' size={23} color={color}/>
                }
                else if(route.name === 'Order'){
                    if(focused){
                        iconName='bike-fast';
                        color = 'tomato';
                    }
                    else{
                        iconName='bike';
                        color='black';
                    }
                }
                else{
                    if(focused){
                        color = 'tomato';
                        iconName = 'person'
                    }
                    else{
                        color = 'black';
                        iconName = 'person-outline'
                    } 
                    return <Ionicons name={iconName} color={color} size={23}/>
                }


                return <MaterialCommunityIcons name={iconName} size={24} color={color}/>
            },
            tabBarActiveTintColor : 'tomato',
            tabBarInactiveTintColor : 'black'
        })}
    >
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
            name="Order" 
            component={OrderScreenStackRoute}
        />

        <Tab.Screen 
            name="Profile" 
            component={ProfileScreenStackRoute}
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