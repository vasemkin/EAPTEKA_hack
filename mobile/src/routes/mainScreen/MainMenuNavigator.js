import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Reminder from './reminders/Reminders'
import Home from './home/HomeScreen'
import Treatment from './treatment/Treatment'
import Basket from './basket/Basket'
import Favorites from './favorites/Favorites'
import Profile from './profile/Profile'

const Tab = createBottomTabNavigator();

function MainMenuNavigator() {
    return(
    <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Treatment" component={Treatment} options={{headerShown: false}}/>
        <Tab.Screen name="Basket" component={Basket} options={{headerShown: false}}/>
        <Tab.Screen name="Favorites" component={Favorites} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Tab.Navigator>
    )
}

export default MainMenuNavigator;
