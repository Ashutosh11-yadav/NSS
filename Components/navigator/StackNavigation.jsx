import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LogIn from '../../Screens/Authentication/LogIn'
import SignUp from '../../Screens/Authentication/SignUp'

const Stack= createNativeStackNavigator()

const StackNavigation = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='LogIn' component={LogIn}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default StackNavigation