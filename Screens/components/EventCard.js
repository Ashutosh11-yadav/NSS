import { View, Text , StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';

const EventImg=require('../../assets/EventImg.jpg');
export default function EventCard() {
    const navigation=useNavigation();
    const handleRegister=()=>{
        navigation.navigate('Upcoming Event');
    }
  return (
    <View style={styles.eventImg}>
        <ImageBackground  
            source={EventImg}
            imageStyle={{borderRadius:20, overflow:"hidden"}}
            style={styles.img}>
                <Text style={styles.date}>Armed Forces Flag Day</Text>
                <Text style={styles.details}>Date - 07 December 2023 </Text>
                <Text style={styles.details}>Time - 10:00 AM</Text>
                <Text style={styles.details}>Venue - Subhash Garden</Text>
                <TouchableOpacity style={styles.RegisterBtn} onPress={handleRegister}>
                    <Text style={styles.btnText}>Register Now</Text>
                </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
    eventImg:{
        width:wp(90),
        height:hp(22),
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
        color:"white"
    },
    details:{
        fontSize:wp(3.8),
        fontWeight:"400",
        color:"white"
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
    }
})