import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import AttendedEventCard from '../components/AttendedEventCard'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Attended() {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Past Events - 1 Event Attended</Text>
      <AttendedEventCard/>
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