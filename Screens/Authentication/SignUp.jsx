import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from "react-native";
import { Appcolor } from "../utils/AppColors";
import InputField from "./InputField";
import { Formik } from "formik";
import { SignUpInitialValue, SignUpValidationSchema } from "./utils";
import DropDownPicker from "react-native-dropdown-picker";
import { PickerSelectProps } from "react-native-picker-select";
import { useState } from "react";
import Components from "../../Components/Components"
import { TouchableOpacity } from "react-native";
import { DropDownPickerProps } from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";





const SignUp = () => {

    const navigation = useNavigation()

    const [isOpen, setIsOpen] = useState(false);
    const [bloodGroup, setBloodGroup] = useState("");
    const [affiliation, setAffiliation] = useState("");


    const bloodGroupOptions = [
        { label: 'A+', value: 'A+' },
        { label: 'B+', value: 'B+' },
        { label: 'O+', value: 'O+' },
        { label: 'AB+', value: 'AB+' },
        { label: 'A-', value: 'A-' },
        { label: 'B-', value: 'B-' },
        { label: 'O-', value: 'O-' },
        { label: 'AB-', value: 'AB-' },
    ];
    const affiliationOption = [
        { label: 'Student', value: 'Student' },
        { label: 'Faculty', value: 'Faculty' },
        { label: 'Alumini', value: 'Alumini' },
        { label: 'Not a part of GEC Bilaspur', value: 'Not a part of GEC Bilaspur' },
    ];

    const handleSignUp = () => {
        console.log("Hello")
    }
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
           
            <View style={styles.formContainer}>
               
                <Formik
                    initialValues={SignUpInitialValue}
                    validationSchema={SignUpValidationSchema}
                    onSubmit={handleSignUp
                    }
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
                            <View>
                                <InputField
                                    Info={'Username'}
                                    onChangeText={handleChange('Username')}
                                    onBlur={handleBlur('Username')}
                                    value={values ? values.username : ' '}
                                    touched={touched.username}
                                    errors={errors.username} />
                                <InputField
                                    Info={'Contact No'}
                                    
                                    onChangeText={handleChange('Contact No')}
                                    onBlur={handleBlur('Contact No')}
                                    value={values ? values.contactno : ' '}
                                    touched={touched.contactno}
                                    errors={errors.contactno} />
                                <InputField
                                    Info={'Email'}
                                    
                                    onChangeText={handleChange('Email')}
                                    onBlur={handleBlur('Email')}
                                    value={values ? values.emailadress : ' '}
                                    touched={touched.emailadress}
                                    errors={errors.emailadress} />
                                <InputField
                                    Info={'Create Password'}
                                    onChangeText={handleChange('Create Password')}
                                    onBlur={handleBlur('Create Password')}
                                    value={values ? values.createpassword : ' '}
                                    touched={touched.createpassword}
                                    errors={errors.createpassword} />
                                <InputField
                                    Info={'Confirm Password'}
                                    onChangeText={handleChange('Confirm Password')}
                                    onBlur={handleBlur('Confirm Password')}
                                    value={values ? values.confirmpassword : ' '}
                                    touched={touched.confirmpassword}
                                    errors={errors.confirmpassword} />

                                <View style={{paddingTop:30, flexDirection:'row' }}>


                                <DropDownPicker
                                style={{marginBottom:20 , marginTop: 0,width:330, paddingHorizontal:10, marginHorizontal:20, borderColor:Appcolor.NSS}}
                                placeholder="Affiliation"
                                items={affiliationOption}
                                open={isOpen}
                                setOpen={() => setIsOpen(!isOpen)}
                                value={affiliation}
                                setValue={(val) => setAffiliation(val)}
                                maxHeight={100}
                                autoScroll
                                showArrowIcon={true}
                                showTickIcon={true}
                               
                                
                                />
                                </View>

                                <Components buttonTitle={'Sign Up'} onPress={handleSubmit} />
                                <TouchableOpacity style={{ alignItems: 'center' , marginTop:20}} onPress={()=> navigation.goBack()}>
                                        <Text style={{ fontSize: 16, }}>Already have an account?<Text style={{textDecorationLine:'underline'}}> LogIn</Text></Text>
                                </TouchableOpacity>

                           
                            </View>
                        )
                    }
                    }

                </Formik>
             
            </View>
            
        </View>
        </ScrollView>
       

    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Appcolor.NSS,

    },
    logoBox: {
        flex: 0.6,
        backgroundColor: Appcolor.NSS,
        alignItems: 'center',
        justifyContent: "center",
        height:200
    },
    logo: {
        
        height: '60%',
        width:'30%'
    },
    Heading: {
        alignItems: 'center',
        margin: 20,

    },
    HeadingText: {
        fontSize: 30,
        fontWeight: '700',

    },
    formContainer:{
        padding:20,
        backgroundColor:'white',
        borderTopEndRadius:100
    }
})