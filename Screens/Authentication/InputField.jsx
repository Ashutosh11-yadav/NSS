import { View, Text , TextInput} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Appcolor } from "../utils/AppColors";

const InputField = ({
    Info,
    placeholder,
    onBlur,
    onChangeText,
    value,
    touched,
    secureTextEntry,
    keyboardType,
    maxLength,
    errors
}) => {
  return (
    <View>
    <Text style={styles.info}>{Info}</Text>
    <View style={styles.inputContainer}>
    <TextInput
    placeholder={placeholder}
    onBlur={onBlur}
    onChangeText={onChangeText}
    value={value}
    touched={touched}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    maxLength={maxLength}
    errors={errors}
    style={styles.textEntry}
    />
</View>
    {touched && errors && <Text style={{color:'red', paddingLeft:40, marginBottom:10}}>{errors}</Text>}
</View>
  )
}

export default InputField

const styles= StyleSheet.create({
    inputContainer:{
        height:40,
        marginBottom:22,
        alignItems:'center'
    },
    info:{
        marginHorizontal:16,
        marginBottom:4,
        fontSize:15,
        color:Appcolor.NSS
    },
    textEntry:{
        borderColor:'black',
        borderRadius:10,
        
        height:50,
        width:330,
        paddingHorizontal:10,
        marginHorizontal:10,
        backgroundColor:'#D9D9D9'
        
    }
})