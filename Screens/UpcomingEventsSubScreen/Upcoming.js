import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import UpcomingCard from './UpcomingCard'

export default function Upcoming() {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Don't miss the opportunity</Text>
      <UpcomingCard/>
      <UpcomingCard/>
      <UpcomingCard/>
      <UpcomingCard/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    padding:24
  },
  msg:{
    color:"#a1a1a1",
    fontSize:wp(4)
  }
})