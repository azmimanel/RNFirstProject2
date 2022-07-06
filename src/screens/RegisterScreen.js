import React, { useContext } from "react";
import {Button, Text,TextInput,View,StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({navigation}) => {
    const [name,setName]= useState(null);
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const val= useContext(AuthContext)

    const {register} =useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>{val}</Text>
                <TextInput
                 style={styles.input}
                 value={name}
                 placeholder="Enter Name"
                 onChangeText={text => setName(text)}
                 />

                <TextInput 
                 style={styles.input}
                 value={email}
                 placeholder="Enter Email"
                 onChangeText={text =>setEmail(text)}
                 />

                <TextInput
                 style={styles.input}
                 value={password}
                 placeholder="Enter Passwword"
                 onChangeText={text => setPassword(text)}
                 />

                <Button 
                 title="Register"
                 onPress={() => {register}}
                 />

                <View style={{flexDirection:'row', marginTop: 20}}>
                    <Text>Alreadt have an acccount?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        felx:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom:12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5, 
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },
});

export default RegisterScreen;