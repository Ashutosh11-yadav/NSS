import { View, Text, Image,StyleSheet, Alert,Touchable, ImageBackground } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign , EvilIcons, Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EventImg=require('../../assets/EventImg.jpg')
export default function EventRegistration() {
    const navigation = useNavigation();
    const handleRegister=()=>{
        console.log("You are Successfully Registered for the event")
        // Alert.alert("You are registered successfully")
        Alert.alert(
            'Successfully Registered',
            'Thank you for Registration, Be present at time!',
            [
              { text: 'Sure,I will be there', onPress: () => {
                console.log('Sure I will be there')
                navigation.navigate('Attending')
            } }
            ],
            { cancelable: false }
          );
    }

  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <ImageBackground source={EventImg} style={styles.coverImg}>
      <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.navigate('Upcoming')}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
      <Text style={styles.title}>Armed Forces Flag Day</Text>
      <Text style={styles.desc}>Jai hind!!🇮🇳 {'\n'}
To remember the virtues of the martyrs, Armed Forces Flag Day is celebrated every year on 7th December in their honour, which this year Armed Forces Flag Day will be celebrated on Thursday, 7th December 2023. {'\n'}
Money is collected from this event to provide assistance to the widows, dependents of martyrs and disabled soldiers.</Text>
    <View style={{marginTop:5, gap:8}}>
            <View style={styles.detailContainer}>
                <EvilIcons name="calendar" size={26} color="#322962" />
                <Text style={styles.detailsText}>Oct 12, 2023</Text>
            </View>
            <View style={styles.detailContainer}>
                <Ionicons name="location-sharp" size={26} color="#322962" />
                <Text style={styles.detailsText}>MV Hall, Main Building</Text>
            </View>
            <View style={styles.detailContainer}>
                <EvilIcons name="clock" size={26} color="#322962" />
                <Text style={styles.detailsText}>09:00 AM - 03:00 PM</Text>
            </View>
            </View>
           <TouchableOpacity style={styles.btn} onPress={handleRegister}>
            <Text style={styles.btnText}>Register Now</Text>
            </TouchableOpacity> 
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    coverImg:{
        width: wp(100),
        height:hp(30),
        paddingVertical:24,
        paddingHorizontal:18,
    },
    container:{
        paddingHorizontal:24,
        paddingVertical:24,
    },
    title:{
        fontSize:wp(5.5),
        fontWeight:"bold"
    },
    desc:{
        marginVertical:30,
        textAlign:"justify",
        fontSize:wp(3.7),
        fontWeight:"400"
    },
    detailContainer:{
        flexDirection:"row",
        gap:8,
        alignItems:"center"
    },
    detailsText:{
        color:"#322962",
        fontSize:wp(3.5)
    },
    btn:{
        backgroundColor:"#322962",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        width:wp(90),
        alignSelf:"center",
        marginVertical:80
    },
    btnText:{
        fontSize:wp(4),
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"300",
    }
})