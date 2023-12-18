import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AlreadyRegisteredEventCard from '../components/AlreadyRegisteredEventCard'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Attending() {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Don't miss the opportunity</Text>
      <AlreadyRegisteredEventCard/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff",
    padding:24
  },
  msg:{
    color:"#a1a1a1",
    fontSize:wp(4)
  }
})