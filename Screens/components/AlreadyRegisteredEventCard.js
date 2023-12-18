import { View, Text , StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const EventImg=require('../../assets/EventImg.jpg');

export default function AlreadyRegisteredEventCard() {
  return (
    <View style={styles.eventImg}>
        <ImageBackground  
            source={EventImg}
            imageStyle={{borderRadius:20, overflow:"hidden"}}
            style={styles.img}>
                <Text style={styles.date}>Armed Forces Flag Day</Text>
                <Text style={styles.details}>Time - 10:00 AM</Text>
                <Text style={styles.details}>Venue - Subhash Garden</Text>
                <Text style={[styles.details,{position:"absolute", right:25, bottom:10}]}>Already Registered</Text>
                <View style={styles.timeLeft}>
                    <Text style={{textAlign:"center", fontWeight:"500"}}>2 Days Left</Text>
                </View>
        </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
    eventImg:{
        width:wp(90),
        height:hp(18),
        marginVertical:20,
        alignSelf:"center",
        borderRadius:50,
        elevation:5,
    },
    img:{
        width:wp(90),
        height:hp(22),
        resizeMode:"contain",
        paddingHorizontal:25
    },
    date:{
        fontSize:wp(5.4),
        fontWeight:"bold",
        marginTop:10,
        color:"white",
        textAlign:"center"
    },
    details:{
        fontSize:wp(3.8),
        fontWeight:"400",
        color:"white",
        textAlign:"center"
    },
    RegisterBtn:{
        backgroundColor:"beige",
        paddingHorizontal:3,
        paddingVertical:5,
        width:wp(30),
        borderRadius:20,
        elevation:5,
        position:"relative",
        left:205,
        top:20
    },
    btnText:{
        textAlign:"center",
        fontWeight:"500"
    },
    timeLeft:{
        backgroundColor:"#AED8E6",
        width:wp(15),
        padding:3,
        borderRadius:10,
        position:"absolute",
        bottom:0,
        left:0,
    }
})