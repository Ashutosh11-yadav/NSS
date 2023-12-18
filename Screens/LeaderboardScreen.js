import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Leaderboard from 'react-native-leaderboard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LeaderboardScreen() {
  this.state={
    data:[
      {userName : 'Jagriti Singh', 
      highScore: 93, 
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},
      
      {userName : 'Divya Dron' , 
      highScore: 82,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},
      
      {userName : 'Prakriti Gupta', 
      highScore : 76,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Mrityunjay' , 
      highScore : 78,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Sanjana Tiwari' , 
      highScore : 78,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Jagriti Singh', 
      highScore: 93,
        iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},
    
      {userName : 'Divya Dron' , 
      highScore: 82,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Prakriti Gupta', 
      highScore : 76,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Mrityunjay' , 
      highScore : 78,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Sanjana Tiwari' , 
      highScore : 78,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Jagriti Singh', 
      highScore: 93,
        iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Divya Dron' , 
      highScore: 82,
        iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Prakriti Gupta', 
      highScore : 76,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Mrityunjay' , 
      highScore : 78,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`},

      {userName : 'Sanjana Tiwari' , 
      highScore : 78,
      iconUrl:`https://i.pinimg.com/1200x/9c/7b/22/9c7b2215857a44433f374f72a0564f1b.jpg`}
    ]
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(50,41,98,10)', 'rgba(191,36,176,0.8)']} end={{x:0.1,y:2.8}} style={styles.gradientContainer}>
        <View style={styles.top3}>
          <View style={styles.rankDetails}>
          <View style={styles.rank2}></View>
          <Text style={styles.rankText2}>2</Text>
          <Text style={styles.rankName}>Divya Dron</Text>
          <Text style={styles.rankHours}>82 Volunteering Hours</Text>
          </View>

          <View style={styles.rankDetails}>
          <View style={styles.rank1}></View>
          <Text style={styles.rankText1}>1</Text>
          <Text style={styles.rankName}>Jagriti Singh</Text>
          <Text style={styles.rankHours}>93 Volunteering Hours</Text>
          </View>
          
          <View style={styles.rankDetails}>
          <View style={styles.rank3}></View>
          <Text style={styles.rankText3}>3</Text>
          <Text style={styles.rankName}>Sanjana Tiwari</Text>
          <Text style={styles.rankHours}>78 Volunteering Hours</Text>
          </View>
        </View>

      </LinearGradient>
      {/* <Svg height="100%" width="100%" viewBox="0 0 100 100" style={{width:wp(100)}}>
        <Path
          d="M20 46.5 Q30 30 40 46.5 T60 46.5 T80 46.5"
          fill="#ffffff"
        />
      </Svg> */}

      <Leaderboard 
      data={this.state.data}
      sortBy='highScore'
      labelBy='userName'
      evenRowColor='hsl(249, 41%, 90%)'
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"#ffffff"
  },
  gradientContainer:{
    height:hp(38),
    marginTop:1
  },
  top3:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:hp(40),
    padding:24,
  },
  rank2:{
    backgroundColor:"white",
    height:wp(16),
    width:wp(16),
    borderRadius:50
  },
  rank1:{
    backgroundColor:"white",
    height:wp(22),
    width:wp(22),
    borderRadius:50
  },
  rank3:{
    backgroundColor:"white",
    height:wp(16),
    width:wp(16),
    borderRadius:50
  },
  rankDetails:{
    alignItems:"center",
    width:wp(27),
  },
  rankText1:{
    color:"yellow",
    fontSize:hp(5),
    fontWeight:"bold"
  },
  rankText2:{
    color:"silver",
    fontSize:hp(4.5),
    fontWeight:"bold"
  },
  rankText3:{
    color:"brown",
    fontSize:hp(4.5),
    fontWeight:"bold"
  },
  rankName:{
    color:"white",
    fontSize:wp(3.5),
    fontWeight:"bold"
  },
  rankHours:{
    textAlign:"center",
    color:"#ffffff",
    fontWeight:"300",
    fontSize:wp(3),
    marginVertical:2
  },
  backButton:{
    padding:5
  }
})