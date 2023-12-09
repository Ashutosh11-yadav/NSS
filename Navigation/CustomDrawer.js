import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import LogIn from '../screens/Authentication/LogIn'
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawer(props) {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.drawerHeader}>
            <Image source={require('../assets/logo.png')} style={styles.drawerHeaderImage}/>
            <View>
            <Text style={styles.headerTitle}>National Service</Text>
            <Text style={styles.headerTitle}>Scheme</Text>
            <Text style={styles.text}>Not me, But you</Text>
            </View>
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        <View>
            <TouchableOpacity style={styles.drawerFooter} onPress={()=>navigation.navigate('Log In')}>
            <Ionicons name="log-out-outline" size={28} color="black" />
            <Text style={styles.footerText}>Logout</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:18,
        paddingVertical:24
    },
    drawerHeaderImage:{
        width:wp(14),
        height:wp(14),
        marginBottom:18,
        marginTop:11
    },
    drawerHeader:{
        flexDirection:"row",
        gap:20,
        justifyContent:"center",
    },
    headerTitle:{
        fontSize:wp(4.5),
        fontWeight:"bold"
    },
    text:{
        fontWeight:"400",
        marginBottom:30
    },
    drawerFooter:{
        flexDirection:"row",
        paddingHorizontal:18,
        paddingVertical:24,
        gap:15,
        alignItems:"center"
    },
    footerText:{
        fontSize:wp(3.8)
    }
})
