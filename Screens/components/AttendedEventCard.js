import { View, Text,StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const EventImg=require('../../assets/EventImg.jpg');

export default function AttendedEventCard() {
  return (
    <View style={styles.eventImg}>
        <ImageBackground  
            source={EventImg}
            imageStyle={{borderRadius:20, overflow:"hidden"}}
            style={styles.img}>
                <Text style={styles.date}>Armed Forces Flag Day</Text>
        </ImageBackground>
    </View>
  )
}


const styles=StyleSheet.create({
    eventImg:{
        width:wp(45),
        marginVertical:20,
        borderRadius:50,
        elevation:5,
    },
    img:{
        width:wp(45),
        height:hp(18),
        resizeMode:"contain",
        paddingHorizontal:25,
        justifyContent:"center"
    },
    date:{
        fontSize:wp(5.4),
        fontWeight:"bold",
        marginTop:10,
        color:"white",
        textAlign:"center"
    }
})