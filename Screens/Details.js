import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Details({route,navigation}) {
  return (
    <View style={{justifyContent:"center", alignItems:"center",flex:1}}>
      <Text>{route.params.name}</Text>
      <TouchableOpacity style={{backgroundColor:"dodgerblue", padding:10, marginTop:20}} >
        <Text style={{color:"white"}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}