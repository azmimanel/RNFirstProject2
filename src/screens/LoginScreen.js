import React, { useContext } from "react";
import {Button, Text,TouchableOpacity,View,TextInput,StyleSheet} from "react-native";
import { useState} from "react";
import RegisterScreen from "./RegisterScreen";
import Navigation from "../components/Navigation";
import { AuthContext, handleLogin } from "../context/AuthContext";



const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState(null);
    const [password,setPassword]= useState(null);
    const val= useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>{val}</Text>
                <TextInput 
                style={styles.Input} 
                value={email}
                placeholder="Enter email" 
                onChangeText={text=> setEmail(text)}
                />

                <TextInput 
                style={styles.Input}  
                value={password}
                placeholder="Enter password" 
                onChangeText={text =>setPassword(text)}
                secureTextEntry 
                />

                <Button onPress={handleLogin} title="Login"/>

                <View style={{flexDirection:'row' , marginTop:20}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    wrapper: {
        width: '80%'
    },
    Input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link : {
        color: 'blue',
    }
}

);

export default LoginScreen;