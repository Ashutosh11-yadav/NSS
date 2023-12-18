import { View, Text ,SafeAreaView, StyleSheet, TextInput, Button, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Details from './Details';

export default function Login({navigation}) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);

    const auth=FIREBASE_AUTH;

    const signIn = async()=>{
        setLoading(true);
        try{
            const response =await signInWithEmailAndPassword(auth,email.trim(),password);
            console.log(response);
            console.log("Email:",email, "Password:", password)
            alert('Logged in')
            setEmail('')
            setPassword('')
            navigation.navigate('Details',{name:response.user.email})
        }catch(error){
            console.log(error);
            alert('Sign in Failed: ' +error.message)
        }finally{
            setLoading(false);
        }
    }

    const signUp= async()=>{
        setLoading(true);
        try{
            const response =await createUserWithEmailAndPassword(auth,email.trim(),password);
            console.log(response);
            alert('Check your emails!')

        }catch(error){
            console.log(error);
            alert('Sign Up failed:' +error.message);
        }finally{
            setLoading(false);
        }
    }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput value={email} style={styles.input}
      placeholder='Email' autoCapitalize='none'
      onChangeText={(text)=>setEmail(text)}/>
      <TextInput value={password} style={styles.input}
      placeholder='Password' autoCapitalize='none'
      onChangeText={(text)=>setPassword(text)} secureTextEntry/>
      
      {loading? <Text style={{textAlign:"center"}}>Loading...</Text> :
      <View>
        <Button title='Login' onPress={signIn} />
        <View style={{height:10}}></View>
        <Button title='Create Account' onPress={signUp}/>
      </View>
      }
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:25
    },
    input:{
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:"white",
        fontSize:15,
        borderRadius:10,
        marginBottom:10
    }
})