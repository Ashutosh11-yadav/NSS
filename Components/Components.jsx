import React from "react";
import { TouchableOpacity , View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { Appcolor } from "../screens/utils/AppColors";

const Components = ({buttonTitle, onPress}) =>{
    return(
        <View>
            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <Text style={styles.btn}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Components

const styles= StyleSheet.create({
    btn:{
        fontSize:20,
        backgroundColor:Appcolor.NSS,
        height:50,
        borderRadius:10,
        width:250,
        color:'#ffffff',
        textAlign:'center',
        margin:40,
        paddingVertical:10
    },
    btnContainer:{
        alignItems:'center',
    }
})