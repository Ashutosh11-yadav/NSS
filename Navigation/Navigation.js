import 'react-native-gesture-handler'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/HomeScreen';
import Post from '../screens/Post';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Profile from '../screens/Profile';
import Feedback from '../screens/Feedback';
import AboutNss from '../screens/AboutNss';
import Community from '../screens/Community';
import Gallery from '../screens/Gallery';
import Terms_and_conditions from '../screens/Terms_and_conditions';
import CustomDrawer from './CustomDrawer';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import LogIn from '../screens/Authentication/LogIn';
import UpcomingEvent from '../screens/UpcomingEvent';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/UpcomingEventsSubScreen/Upcoming';
import Attending from '../screens/UpcomingEventsSubScreen/Attending'
import Attended from '../screens/UpcomingEventsSubScreen/Attended'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EventRegistration from '../screens/UpcomingEventsSubScreen/EventRegistration';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopTab=createMaterialTopTabNavigator();
const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();


const MainTabNavigator=()=>{
  return(
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#645795",
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#ffffff",
            paddingBottom:5,
          },

          tabBarStyle: {
            backgroundColor: "#322962",
            height: "7.5%",
            width: "100%",
            borderRadius: 12,
            marginBottom: 12,
            paddingHorizontal:"5%",
          }
        }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (<AntDesign name="home" size={24} color="white" />),
          }} />
        <Tab.Screen name="Post" component={Post}
          options={{
            tabBarIcon: ({ color, size }) => (<AntDesign name="pluscircleo" size={24} color="white" />),

          }} />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (<MaterialIcons name="account-circle" size={24} color="white" />),
          }} />
      </Tab.Navigator>
  )
}

const MainDrawerNavigator=()=>{
  const navigation=useNavigation()
  return(
    <Drawer.Navigator screenOptions={{
      headerShown:false,
      drawerActiveTintColor:"white",
      drawerActiveBackgroundColor:"#322962",
      drawerLabelStyle:{marginLeft:-15}
      }} drawerContent={props=> <CustomDrawer {...props}/>}> 
            <Drawer.Screen name='Home Screen' component={MainTabNavigator} options={{
              title:"Home",
              drawerIcon:({color})=>(
                <AntDesign name="home" size={24} color={color} />
              ),
            }}/>
            <Drawer.Screen name='About NSS' component={AboutNss} 
            options={{
              drawerIcon:({color})=>(
                <Ionicons name="md-book-outline" size={24} color={color} />
              )
            }}/>
            <Drawer.Screen name='Community' component={Community} 
            options={{
              drawerIcon:({color})=>(
                <Ionicons name="people-outline" size={24} color={color} />
              )
            }}/>
            <Drawer.Screen name='Gallery' component={Gallery} 
            options={{
              drawerIcon:({color})=>(
                <FontAwesome name="photo" size={24} color={color} />
              )
            }}/>
            <Drawer.Screen name='Leaderboard Screen' component={LeaderboardScreen} 
             options={{
              drawerIcon:({color})=>(
                  <SimpleLineIcons name="trophy" size={24} color={color} />),
                  title:"Leaderboard",
                  headerShown:true,
                  headerStyle:{
                    backgroundColor:"#322962"
                  },
                  headerTintColor:"#ffffff"
            }}/>
            <Drawer.Screen name='Feedback' component={Feedback} 
            options={{
              drawerIcon:({color})=>(
                <Foundation name="clipboard-pencil" size={24} color={color} />
              )
            }}/>
            <Drawer.Screen name='Terms and Conditions' component={Terms_and_conditions} 
            options={{
              drawerIcon:({color})=>(
                <FontAwesome name="file-text-o" size={24} color={color} />              )
            }} />
      </Drawer.Navigator>
  )
}

const UpcomingEventsTopTab = () => {
  return (
    <TopTab.Navigator screenOptions={{
      tabBarIndicatorContainerStyle:{
        backgroundColor:"#white",
        borderWidth:0.1,
      },
      tabBarIndicatorStyle: {
        backgroundColor:"#322962"
      },
      tabBarAccessibilityLabel:'Main Navigation',
      tabBarActiveTintColor:"#322962",
      tabBarInactiveTintColor:"#a1a1a1",
      tabBarAllowFontScaling:true,
      tabBarPressColor:"#322962",
      tabBarLabelStyle:{
        fontWeight:"500",
        textTransform:"capitalize",
        fontSize:wp(3.7)
      }
    }}>
      <TopTab.Screen name='Upcoming' component={Upcoming} options={{ 
        tabBarLabel: "Upcoming",
        }} />
      <TopTab.Screen name='Attending' component={Attending} options={{ tabBarLabel: "Attending" }} />
      <TopTab.Screen name='Attended' component={Attended} options={{ tabBarLabel: "Attended" }} />
    </TopTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='UpcomingEvent'>
      <HomeStack.Screen name="UpcomingEvent" component={UpcomingEventsTopTab} options={{headerShown:false}}/>
    </HomeStack.Navigator>
  );
}

const AppNavigator=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainDrawer' component={MainDrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='Log In' component={LogIn} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Upcoming Event' component={HomeStackScreen} options={{
          headerTitle:"Events"
        }}/>
        <Stack.Screen name='Event Registration' component={EventRegistration} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
