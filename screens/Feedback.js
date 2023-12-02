import { View, Text , SafeAreaView, StyleSheet, Image, TextInput, KeyboardAvoidingView, Button, TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ratings from './components/Ratings';

export default function Feedback() {
    const [text,setText]=useState('');

    const handleSend=()=>{
        text.length>0?
        (console.log("Suggestion:",text),
        setText(''),
        Alert.alert("","Thanks for the feedback!")):(
            Alert.alert("Warning", "Write Something")
        )
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Give Feedback</Text>
      <Text style={styles.ques}>What do you think of this organization?</Text>
      <View style={styles.ratings}>
        <Ratings/>

      </View>
      <Text style={[styles.ques,{marginVertical:20}]}>Any Suggestion about How can we improve?</Text>
      <KeyboardAvoidingView behavior="position" 
      style={{alignItems:"center"}}
      >
      <TextInput placeholder='Write Something' 
      maxLength={500} 
      style={styles.input} 
      multiline 
      value={text}
      onChangeText={newText => setText(newText)}/>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.btnFill} onPress={handleSend}>
        <Text style={styles.btnFillText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOutline}>
        <Text style={styles.btnOutlineText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:14
    },
    title:{
        fontSize:wp(6.1),
        // fontSize:25,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:25
    },
    ques:{
        marginVertical:12,
        // fontSize:17,
        fontSize:wp(4.3),
        fontWeight:"400",
        marginLeft:10
    },
    ratings:{
        justifyContent:"center",
        marginLeft:10
    },
    icon:{
        marginHorizontal:10,
    },
    input:{
        borderWidth:1,
        borderColor:"#322962",
        width:wp(91),
        height:hp(49),
        borderRadius:10,
        padding:14,
        textAlignVertical:"top",
        fontSize:wp(4.5),
        backgroundColor:"white"
    },
    btnFill:{
        backgroundColor:"#322962",
        paddingVertical:13,
        paddingHorizontal:10,
        width:wp(90),
        alignSelf:"center",
        borderRadius:10,
        alignItems:"center",
        elevation:5,
        marginTop:20
    },
    btnFillText:{
        color:"white",
        fontSize:wp(4)
    },
    btnOutline:{
        backgroundColor:"white",
        paddingVertical:13,
        paddingHorizontal:10,
        width:wp(90),
        alignSelf:"center",
        borderRadius:10,
        alignItems:"center",
        elevation:5,
        marginTop:17,
        borderWidth:2,
        borderColor:"#322962"
    },
    btnOutlineText:{
        color:"#322962",
        fontSize:wp(4)
    },
})