import React from "react";
import { Formik } from "formik";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Appcolor } from "../utils/AppColors";
import { loginInitialValue, loginValidationSchema } from "./utils";
import InputField from "./InputField";
import Components from "../../Components/Components"
import { useNavigation } from "@react-navigation/native";

const logo=require("../../assets/logo.png")
const LogIn = () => {

    const navigation= useNavigation();

    const handleLogin = () => {
        console.log("Hello")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={logo}/>
            </View>
            
                <View style={{ flex: 0.75 , backgroundColor:"#ffffff", borderTopEndRadius:100}}>
                <View style={styles.Heading}>
                    <Text style={styles.HeadingText}>Login</Text>
                </View>
                    <Formik
                        initialValues={loginInitialValue}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleLogin}
                        style={styles.formik}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            touched,
                            errors,
                            isValid
                        }) => {
                            return (
                                <View style={{}}>
                                    <InputField
                                        placeholder={'Username'}
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values ? values.username : ''}
                                        touched={touched.username}
                                        errors={errors.username}
                                    />

                                    <InputField
                                        placeholder={'Password'}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values ? values.password : ''}
                                        touched={touched.password}
                                        errors={errors.password}
                                    />

                                    <View style={{ alignItems: 'flex-end', marginHorizontal: 40, marginTop:5 }}>
                                        <TouchableOpacity>
                                        <Text>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Components buttonTitle={'LogIn'} onPress={handleSubmit} />
                                    <TouchableOpacity style={{ alignItems: 'center',margin:20 }} onPress={() =>navigation.navigate('SignUp')}>
                                        <Text style={{ fontSize: 16, }}>New User?<Text style={{textDecorationLine:'underline'}}> Sign Up</Text></Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        }}
                    </Formik>
              
            </View>
        </SafeAreaView>
    )
}

export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Appcolor.NSS,


    },
    logoBox: {
        flex:0.3,
        alignItems: 'center',
        justifyContent: "center",
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100
    },
    logo: {
        height:'60%',
        width:'40%'
    },
    Heading: {
        alignItems: 'center',
        margin: 20,

    },
    HeadingText: {
        fontSize: 30,
        fontWeight: '700',

    },
    formik:{
        border:2,
        borderColor:'red'
    }
})