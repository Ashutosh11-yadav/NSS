import { View, Text, StyleSheet,Image, Touchable } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EventRegistration from './EventRegistration';

const EventImg=require('../../assets/EventImg.jpg')
export default function UpcomingCard() {
    const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Event Registration')}>
        <Image source={EventImg} style={styles.img}/>
        <View style={{marginTop:5}}>
            <View style={styles.detailContainer}>
                <EvilIcons name="calendar" size={22} color="#322962" />
                <Text style={styles.detailsText}>Oct 12, 2023</Text>
            </View>
            <View style={styles.detailContainer}>
                <Ionicons name="location-sharp" size={22} color="#322962" />
                <Text style={styles.detailsText}>MV Hall,Main Building</Text>
            </View>
            <View style={styles.detailContainer}>
                <EvilIcons name="clock" size={22} color="#322962" />
                <Text style={styles.detailsText}>09:00 AM - 03:00 PM</Text>
            </View>
            <View style={styles.btn}>
            <SimpleLineIcons name="arrow-right-circle" size={20} color="black" />
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
        marginTop:20,
        padding:8,
        flexDirection:"row",
        gap:22
    },
    img:{
        height:hp(12),
        width:wp(30),
        borderRadius:7,
    },
    detailContainer:{
        flexDirection:"row",
        gap:8,
        alignItems:"center"
    },
    detailsText:{
        color:"#322962",
        fontSize:wp(3)
    },
    btn:{
        left:164,
        top:8
    }
})