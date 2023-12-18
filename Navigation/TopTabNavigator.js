import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/UpcomingEventsSubScreen/Upcoming';
import Attending from '../screens/UpcomingEventsSubScreen/Attending'
import Attended from '../screens/UpcomingEventsSubScreen/Attended'
import { NavigationContainer } from '@react-navigation/native';

const TopTab=createMaterialTopTabNavigator();

const TopTabNavigator=()=>{
    return(
        <NavigationContainer>
        <TopTab.Navigator initialRouteName='Upcoming'>
            <TopTab.Screen name='Upcoming' component={Upcoming} options={{
                tabBarLabel:"Upcoming"
            }}/>
            <TopTab.Screen name='Attending' component={Attending} options={{
                tabBarLabel:"Attending"
            }}/>
            <TopTab.Screen name='Attended' component={Attended} options={{
                tabBarLabel:"Attended"
            }}/>
        </TopTab.Navigator>
    </NavigationContainer>
    )
  }

export default TopTabNavigator;