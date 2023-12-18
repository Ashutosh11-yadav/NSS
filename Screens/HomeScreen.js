import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
// import DrawerNavigation from '../Navigation/DrawerNavigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EventCard from './components/EventCard';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Image source={require('../assets/logo.png')} style={styles.menuBtn}/>
            </TouchableOpacity>
            <EventCard/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        paddingHorizontal:24,
        paddingVertical:18
    },
    menuBtn:{
        height:wp(14),
        width:wp(14),
    }
})

export default HomeScreen