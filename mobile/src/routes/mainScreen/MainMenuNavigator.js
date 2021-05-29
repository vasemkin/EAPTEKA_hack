import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Reminder from './reminders/Reminders'

const Tab = createBottomTabNavigator();

function MainMenuNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
                <Tab.Screen name="Map" component={Map} options={{headerShown: false}}/>
                <Tab.Screen name="Reminder" component={Reminder} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainMenuNavigator;
